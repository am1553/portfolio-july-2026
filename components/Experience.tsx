import styles from "./Experience.module.css";
import { experience, education, type TimelineEntry } from "@/lib/data";

function Timeline({
  id,
  label,
  heading,
  intro,
  entries,
}: {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  entries: TimelineEntry[];
}) {
  return (
    <div id={id} className={styles.block} aria-labelledby={`${id}-title`}>
      <header className={styles.blockHeader}>
        <p className="tag">{label}</p>
        <h2 id={`${id}-title`} className="display">
          {heading}
        </h2>
        {intro && <p className={styles.blockIntro}>{intro}</p>}
      </header>

      <dl className={styles.list}>
        {entries.map((e) => (
          <div key={`${e.years}-${e.org}`} className={styles.row}>
            <dt className={styles.years}>{e.years}</dt>
            <dd className={styles.detail}>
              <h3 className={styles.role}>{e.role}</h3>
              <p className={styles.org}>
                {e.org} <span className={styles.meta}>· {e.meta}</span>
              </p>
              {e.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className={styles.summary}>
                  {p}
                </p>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-label="Experience and education"
    >
      <div className="container">
        <Timeline
          id="experience"
          label="Experience"
          heading="Frontend foundations, full-stack direction."
          intro="Commercial frontend work across legacy modernisation, data-heavy applications, reusable UI systems, and full-stack product development."
          entries={experience}
        />
        <Timeline
          id="education"
          label="Education"
          heading="Studying computing while building in the real world."
          entries={education}
        />
      </div>
    </section>
  );
}
