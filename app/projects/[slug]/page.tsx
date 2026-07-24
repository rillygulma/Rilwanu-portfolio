import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <div className="mt-10">
          <span className="text-cyan-400">
            {project.category}
          </span>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {project.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Live Demo
              <ExternalLink size={18} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3"
            >
              GitHub
              <FaGithub size={18} />
            </a>
          </div>

          <div className="relative mt-16 aspect-video overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}