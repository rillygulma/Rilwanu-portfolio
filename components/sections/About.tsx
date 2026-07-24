"use client";

import { motion } from "framer-motion";
import Button from "@/components/sections/ui/Button";

export default function About() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Turning ideas into powerful digital products.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-8 text-slate-400"
        >
          <p>
            I&apos;m a passionate Frontend Developer focused on creating
            modern and user-friendly web applications.
          </p>

          <p>
            I work with modern technologies such as Next.js, React,
            TypeScript, and Tailwind CSS to transform ideas into reliable
            digital experiences.
          </p>

          <Button href="/about">
            More About Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}