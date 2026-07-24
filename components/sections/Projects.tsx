"use client";

import { useState } from "react";
import ProjectCard from "@/components/sections/ui/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  longDescription: string;
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore web applications and digital products built by Rilwanu Idris.",
};

export default function Projects() {
  const categories = [
    "All",
    ...Array.from(
      new Set(projects.map((project) => project.category))
    ),
  ];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section className="bg-slate-950 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Portfolio
          </span>

          <h1 className="mt-5 text-5xl font-bold text-white">
            My Projects
          </h1>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-cyan-400 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}