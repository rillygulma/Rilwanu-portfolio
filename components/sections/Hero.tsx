"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Button from "@/components/sections/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">
            Available for freelance projects
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            I build digital
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              experiences that matter.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;m Rilwanu Idris, a Frontend Developer specializing in
            Next.js, React, TypeScript, and Tailwind CSS. I create fast,
            scalable, and visually engaging web applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">
              Explore My Work
            </Button>

            <Button
              href="/resume/Rilwanu-Idris-CV.pdf"
              variant="secondary"
            >
              <Download size={17} />
              Download CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ArrowDown className="text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}