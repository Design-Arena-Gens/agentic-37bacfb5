"use client";

import { useTheme } from "@/components/ThemeProvider";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <span className={styles.icon} aria-hidden>
        {theme === "dark" ? "🌙" : "🌞"}
      </span>
      <span>{theme === "dark" ? "Dark" : "Light"} mode</span>
    </button>
  );
}
