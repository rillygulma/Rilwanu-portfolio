import ProjectCard from "@/components/sections/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Portfolio
          </span>

          <h1 className="mt-5 text-5xl font-bold">
            My Projects
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            A selection of web applications and digital experiences
            I&apos;ve built using modern technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}