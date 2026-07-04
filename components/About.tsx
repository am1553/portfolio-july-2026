import Image from "next/image";
import styles from "./About.module.css";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <figure className={styles.photo}>
          <Image
            src="/images/me.jpg"
            alt="Aryan Mehta on a rooftop in London, mid-game of chess"
            width={640}
            height={800}
            className={styles.photoImg}
          />
          <figcaption className={styles.photoCaption}>
            London · usually mid-game
          </figcaption>
        </figure>

        <div className={styles.copy}>
          <p className="tag">About</p>
          <h2 id="about-title" className="display">
            Hi, I&rsquo;m Aryan.
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className={styles.body}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
