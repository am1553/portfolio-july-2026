import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing on frontend engineering, React, TypeScript, and full-stack development — coming soon.",
};

export default function BlogPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className={styles.page}>
        <div className={`container ${styles.inner}`}>
          <p className="tag">Blog</p>
          <h1 className={`display ${styles.title}`}>
            Thoughts, notes, and technical writing{" "}
            <span className={styles.titleAccent}>coming soon.</span>
          </h1>

          <p className={styles.body}>
            I&rsquo;m currently working on a collection of blog posts where
            I&rsquo;ll share what I&rsquo;m learning and building as a
            developer. This space will include practical notes on frontend
            engineering, React, TypeScript, full-stack development, UI
            architecture, performance, and lessons from real projects.
          </p>

          <p className={styles.body}>
            The goal is to turn my learning process into useful, readable
            content: not just polished tutorials, but honest explanations of
            how I approach problems, debug issues, structure applications, and
            improve as a software developer.
          </p>

          <div className={styles.placeholder}>
            <p className={styles.placeholderStatus}>
              <code>status: drafting</code>
            </p>
            <h2 className={styles.placeholderTitle}>Nothing published yet</h2>
            <p className={styles.placeholderBody}>
              Posts aren&rsquo;t available yet, but this page will be updated
              soon with articles, project write-ups, and development notes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
