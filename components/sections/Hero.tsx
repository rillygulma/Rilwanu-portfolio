"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Button from "@/components/sections/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">
              Available for freelance projects & Contract work. Let&apos;s
              collaborate and bring your ideas to life!
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
              I build digital
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                experiences that matter.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              I&apos;m Rilwanu Idris, a Software Developer specializing in
              Next.js, React, React Native, TypeScript, and Tailwind CSS. I
              create fast, scalable, and visually engaging web applications and
              mobile apps.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/projects">Explore My Work</Button>

              <Button
                href="/resume/Rilwanu-Idris-CV.pdf"
                variant="secondary"
              >
                <Download size={17} />
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Image Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

              {/* Image Container */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20 sm:h-96 sm:w-96">
                <Image
                  src="/images/profile.jpeg"
                  alt="Rilwanu Idris - Software Developer"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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