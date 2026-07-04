import styles from "./Contact.module.css";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <p className="tag">Get in touch</p>
        <h2 id="contact-title" className="display">
          Let&rsquo;s build something.
        </h2>
        <p className={styles.body}>
          I&rsquo;m looking for a full-stack role where I can keep growing and
          contribute properly to a strong engineering team. If that sounds like
          your team, I&rsquo;d love to hear from you.
        </p>

        <a href={`mailto:${site.email}`} className={styles.email}>
          {site.email}
        </a>

        <nav aria-label="Other places to find me">
          <ul className={styles.socials}>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} profile (opens in new tab)`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
