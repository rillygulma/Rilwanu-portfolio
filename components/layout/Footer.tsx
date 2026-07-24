"use client";

import Link from "next/link";
import {
  Mail,
  ArrowUp,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-slate-950 transition-colors hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
            >
              Rilwanu{" "}
              <span className="text-cyan-500 dark:text-cyan-400">
                Idris
              </span>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
              Frontend Developer building modern, responsive, and
              high-performance digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-start gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/10 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/10 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:rillygulma@gmail.com"
              aria-label="Email"
              className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/10 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              aria-label="Back to top"
              className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/10 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-500">
          © {new Date().getFullYear()} Rilwanu Idris. All rights reserved.
        </div>
      </div>
    </footer>
  );
}