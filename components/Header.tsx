"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./Header.module.css";

const links: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/video-lessons", label: "Video Lessons" },
  { href: "/song-chords", label: "Song Chords" },
  { href: "/text-lessons", label: "Text Lessons" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        Guitar<span>Guide</span>
      </Link>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.link}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
