import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-sm text-cyan-400">
          {project.category}
        </span>

        <h3 className="mt-2 text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Live Demo
            <ExternalLink size={15} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white"
          >
            GitHub
            <FaGithub size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}