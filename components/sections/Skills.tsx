"use client";

import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";

const skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Git",
    icon: SiGit,
  },
];

export default function Skills() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            My Technology Stack
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-7">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <Icon size={42} />

                <span className="text-sm text-slate-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}