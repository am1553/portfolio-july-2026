import styles from "./Hero.module.css";
import { site } from "@/lib/data";

/**
 * Live circuitry layer: engineering grid + signal beams travelling
 * along the wires. Colours follow the site's signal semantics —
 * cobalt (request), green (ok), amber (warn), violet (trace).
 */
function GridCircuit() {
  return (
    <div className={styles.gridLayer} aria-hidden="true">
      <span className={`${styles.beam} ${styles.beamV} ${styles.beamV1}`} />
      <span className={`${styles.beam} ${styles.beamV} ${styles.beamV2}`} />
      <span className={`${styles.beam} ${styles.beamV} ${styles.beamV3}`} />
      <span className={`${styles.beam} ${styles.beamH} ${styles.beamH1}`} />
      <span className={`${styles.beam} ${styles.beamH} ${styles.beamH2}`} />
    </div>
  );
}

/**
 * Signature element: the stack rendered as a live request path.
 * A request pulse travels client → api → db and a response returns.
 */
function RequestPath() {
  const nodes = [
    { key: "client", label: "client", sub: "React · TypeScript" },
    { key: "api", label: "api", sub: "Node · Express" },
    { key: "db", label: "db", sub: "PostgreSQL" },
  ];

  return (
    <figure
      className={styles.path}
      aria-label="Request path: client to API to database"
    >
      <div className={styles.pathTrack} aria-hidden="true">
        <span className={styles.pathWire} />
        <span className={styles.pathPulse} />
      </div>
      <div className={styles.pathNodes}>
        {nodes.map((n) => (
          <div key={n.key} className={styles.pathNode}>
            <span className={styles.pathPort} aria-hidden="true" />
            <span className={styles.pathLabel}>{n.label}</span>
            <span className={styles.pathSub}>{n.sub}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.pathCaption}>
        <code>200 OK</code> — every layer, one developer
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <GridCircuit />
      <div className={`container ${styles.inner}`}>
        <p className="tag">Full-stack developer · {site.location}</p>

        <h1 id="hero-title" className={`display ${styles.title}`}>
          Full Stack Developer with{" "}
          <span className={styles.titleAccent}>Frontend Expertise.</span>
        </h1>

        <p className={styles.lead}>{site.intro}</p>

        <div className={styles.actions}>
          <a
            href="https://www.linkedin.com/in/aryanmehta-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            Connect on LinkedIn
          </a>
          <a href="#projects" className={styles.secondaryCta}>
            View projects
          </a>
        </div>

        <RequestPath />
      </div>
    </section>
  );
}
