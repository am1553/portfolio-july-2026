"use client";

import { useEffect, useRef } from "react";
import styles from "./GridCircuit.module.css";

const GS = 72; // grid cell size — keep in sync with --gs in the CSS module

const BEAM_COLORS = [
  "var(--cobalt)",
  "var(--signal)",
  "var(--amber)",
  "var(--violet)",
  "var(--cyan)",
  "var(--teal)",
  "var(--sky)",
  "var(--rose)",
  "var(--magenta)",
  "var(--orange)",
];

const GLOW_MS = 750; // how long a tile stays lit after the head passes
const BEAM_LEN = 150; // px

type Beam = {
  axis: "v" | "h";
  line: number; // grid line index the beam rides on
  pos: number; // px along the travel axis
  speed: number; // px per second
  color: string;
  el: HTMLSpanElement;
  lastCell: number;
  side: 0 | 1;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GridCircuit() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    const layer: HTMLDivElement = el;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let beams: Beam[] = [];
    let tiles: HTMLDivElement[] = [];
    let cols = 0,
      rows = 0,
      width = 0,
      height = 0,
      lastT = 0;

    const tileHost = document.createElement("div");
    tileHost.className = styles.tiles;
    layer.appendChild(tileHost);

    const beamHost = document.createElement("div");
    beamHost.className = styles.beams;
    layer.appendChild(beamHost);

    /** tiles lit right now → expiry timestamp */
    const lit = new Map<HTMLDivElement, number>();

    function build() {
      width = layer.clientWidth;
      height = layer.clientHeight;
      cols = Math.ceil(width / GS);
      rows = Math.ceil(height / GS);

      // --- tiles ---
      tileHost.innerHTML = "";
      tileHost.style.gridTemplateColumns = `repeat(${cols}, ${GS}px)`;
      tiles = [];
      for (let i = 0; i < cols * rows; i++) {
        const t = document.createElement("div");
        t.className = styles.tile;
        tileHost.appendChild(t);
        tiles.push(t);
      }
      lit.clear();

      // --- beams: verticals spread across columns, a few horizontals ---
      beamHost.innerHTML = "";
      beams = [];
      const palette = shuffle(BEAM_COLORS);
      let colorIdx = 0;
      const nextColor = () => palette[colorIdx++ % palette.length];

      const vCount = Math.min(6, Math.max(2, Math.floor(cols / 4)));
      const vLines = shuffle(
        Array.from({ length: Math.max(cols - 2, 1) }, (_, i) => i + 1),
      ).slice(0, vCount);

      const hCount = Math.min(3, Math.max(1, Math.floor(rows / 3)));
      const hLines = shuffle(
        Array.from({ length: Math.max(rows - 2, 1) }, (_, i) => i + 1),
      ).slice(0, hCount);

      const makeBeam = (axis: "v" | "h", line: number): Beam => {
        const beamEl = document.createElement("span");
        const color = nextColor();
        beamEl.className = `${styles.beam} ${axis === "v" ? styles.beamV : styles.beamH}`;
        beamEl.style.setProperty("--beam-c", color);
        if (axis === "v") beamEl.style.left = `${line * GS}px`;
        else beamEl.style.top = `${line * GS}px`;
        beamHost.appendChild(beamEl);
        const travel = axis === "v" ? height : width;
        return {
          axis,
          line,
          // random start offsets: reads as a system already running
          pos: Math.random() * (travel + BEAM_LEN) - BEAM_LEN,
          speed: 90 + Math.random() * 80,
          color,
          el: beamEl,
          lastCell: -1,
          side: Math.random() < 0.5 ? 0 : 1,
        };
      };

      vLines.forEach((l) => beams.push(makeBeam("v", l)));
      hLines.forEach((l) => beams.push(makeBeam("h", l)));
    }

    function light(col: number, row: number, color: string) {
      if (col < 0 || row < 0 || col >= cols || row >= rows) return;
      const tile = tiles[row * cols + col];
      if (!tile) return;
      tile.style.setProperty("--glow", color);
      tile.classList.add(styles.tileLit);
      lit.set(tile, performance.now() + GLOW_MS);
    }

    function tick(now: number) {
      const dt = Math.min((now - lastT) / 1000, 0.05); // clamp tab-switch jumps
      lastT = now;

      for (const b of beams) {
        const travel = b.axis === "v" ? height : width;
        b.pos += b.speed * dt;

        if (b.pos > travel + BEAM_LEN) {
          b.pos = -BEAM_LEN - Math.random() * GS * 3;
          b.lastCell = -1;
        }

        b.el.style.transform =
          b.axis === "v" ? `translateY(${b.pos}px)` : `translateX(${b.pos}px)`;

        // the gradient is brightest mid-beam — treat that as the head
        const head = b.pos + BEAM_LEN / 2;
        const cell = Math.floor(head / GS);
        if (cell !== b.lastCell && head >= 0 && head <= travel) {
          b.lastCell = cell;
          const trail = cell - 1; // the cell just passed — a wake, not a headlamp
          const flank = b.line - 1 + b.side;
          if (b.axis === "v") light(flank, trail, b.color);
          else light(trail, flank, b.color);
        }
      }

      // decay: drop the class once expired; the CSS transition eases it out
      for (const [tile, expiry] of lit) {
        if (now >= expiry) {
          tile.classList.remove(styles.tileLit);
          lit.delete(tile);
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    build();
    lastT = performance.now();
    rafId = requestAnimationFrame(tick);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      tileHost.remove();
      beamHost.remove();
    };
  }, []);

  return <div ref={layerRef} className={styles.gridLayer} aria-hidden="true" />;
}
