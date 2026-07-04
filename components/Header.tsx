import Link from "next/link";
import styles from "./Header.module.css";

/* Anchors are absolute (/#about) so they work from /blog too */
const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark} aria-label="Aryan Mehta home">
          aryan<span className={styles.wordmarkAccent}>mehta</span>.dev
        </Link>

        <nav aria-label="Primary">
          <ul className={styles.nav}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          Open to full-stack roles
        </p>
      </div>
    </header>
  );
}
