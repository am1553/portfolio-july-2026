"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on route change and on Escape
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          href="/"
          className={styles.wordmark}
          aria-label="Aryan Mehta home"
        >
          aryan<span className={styles.wordmarkAccent}>mehta</span>.dev
        </Link>

        <nav aria-label="Primary" className={styles.desktopNav}>
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

        <button
          type="button"
          className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </div>

      {/* Mobile panel — always rendered so open/close can animate */}
      <nav
        id="mobile-navigation"
        aria-label="Primary, mobile"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
      >
        <ul className={styles.mobileList}>
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.mobileStatus}>
          <span className={styles.statusDot} aria-hidden="true" />
          Open to full-stack roles
        </p>
      </nav>
    </header>
  );
}
