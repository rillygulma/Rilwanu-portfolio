import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Rilwanu Idris, a Frontend Developer specializing in Next.js, React, TypeScript, and modern web development.",
};

export default function AboutPage() {
  return (
    <>
      <div className="h-20 bg-slate-950" />

      <About />

      <Skills />

      <Experience />
    </>
  );
}