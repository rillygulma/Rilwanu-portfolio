"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutDashboard,
  Smartphone,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, scalable websites and web applications built with Next.js, React, and TypeScript.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    description:
      "Powerful dashboards, management systems, portals, and custom business applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
       "Modern and responsive mobile applications built to deliver seamless experiences across Android and iOS devices.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Fast-loading, SEO-friendly, and optimized web experiences designed for excellent performance.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What I Do
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Services I provide
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <Icon className="text-cyan-400" size={32} />

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}