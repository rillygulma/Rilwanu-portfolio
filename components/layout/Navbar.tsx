"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-900 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/95 dark:text-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

{/* Logo */}
{/* Logo */}
<Link
  href="/"
  className="text-xl font-bold tracking-tight text-slate-950 transition-colors hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
>
  Rilwanu{" "}
  <span className="text-cyan-500 dark:text-cyan-400">
    Idris
  </span>
</Link>
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}

          <ThemeToggle />

          <Link
            href="/contact"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() =>
              setOpen(!open)
            }
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 transition-all hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950 md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {links.map(
                (link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay:
                        index * 0.08,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() =>
                        setOpen(false)
                      }
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              )}

              <Link
                href="/contact"
                onClick={() =>
                  setOpen(false)
                }
                className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}