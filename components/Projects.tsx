import Image from "next/image";
import styles from "./Projects.module.css";
import { projects, type Layer, type Project } from "@/lib/data";

const LAYERS: Layer[] = ["client", "api", "db"];

/**
 * Encodes which layers of the stack were built on each project.
 * Filled = built; hollow = not part of this project. Ties every card
 * back to the hero's client → api → db thesis.
 */
function LayerMap({ layers }: { layers: Layer[] }) {
  return (
    <span
      className={styles.layerMap}
      role="img"
      aria-label={`Stack layers built: ${layers.join(", ")}`}
    >
      {LAYERS.map((l) => (
        <span
          key={l}
          className={`${styles.layer} ${layers.includes(l) ? styles.layerOn : ""}`}
        >
          {l}
        </span>
      ))}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const mediaHref = p.live ?? p.code;
  return (
    <article className={`${styles.card} ${p.featured ? styles.featured : ""}`}>
      <a
        className={styles.media}
        href={mediaHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${p.title}${p.live ? " — live demo" : " — source code"} (opens in new tab)`}
      >
        <Image
          src={p.image}
          alt={p.imageAlt}
          width={1200}
          height={740}
          className={styles.mediaImg}
        />
      </a>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{p.title}</h3>
          <LayerMap layers={p.layers} />
        </div>

        <p className={styles.description}>{p.description}</p>

        <p className={styles.stack}>{p.stack.join(" · ")}</p>

        <div className={styles.links}>
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} source code on GitHub (opens in new tab)`}
            >
              Code
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} live demo (opens in new tab)`}
            >
              Live <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <header className={styles.header}>
          <p className="tag">Projects</p>
          <h2 id="projects-title" className="display">
            Selected work.
          </h2>
          <p className={styles.intro}>
            A selection of projects across full-stack applications, frontend
            builds, and responsive product interfaces. Each card maps which
            layers of the stack I owned.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
