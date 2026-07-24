"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;

    const isDark = html.classList.contains("dark");

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:scale-105 hover:border-cyan-400 dark:border-white/10 dark:bg-slate-900 dark:text-white"
    >
      <span className="hidden dark:block">
        <Sun size={18} />
      </span>

      <span className="block dark:hidden">
        <Moon size={18} />
      </span>
    </button>
  );
}