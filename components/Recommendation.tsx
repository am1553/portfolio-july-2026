import Image from "next/image";
import styles from "./Recommendation.module.css";
import { recommendation as r } from "@/lib/data";

export default function Recommendation() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-label="Recommendation"
    >
      <div className={`container ${styles.inner}`}>
        <p className={`tag ${styles.label}`}>From a manager</p>
        <figure>
          <blockquote className={styles.quote}>{r.quote}</blockquote>
          <figcaption className={styles.cite}>
            <Image
              src={r.avatar}
              alt=""
              width={48}
              height={48}
              className={styles.avatar}
            />
            <div>
              <span className={styles.name}>{r.name}</span>
              <span className={styles.role}>{r.roleLine}</span>
              <time className={styles.date} dateTime={r.date}>
                {r.dateLabel}
              </time>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
