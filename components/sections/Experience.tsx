"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Award,
} from "lucide-react";
import { useState } from "react";

import CertificateModal from "@/components/sections/ui/CertificateModal";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance / Independent",
    period: "2024 – Present",
    description:
      "Building modern, responsive, and scalable web applications using Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    role: "Frontend Developer Intern",
    company: "HNG Internship",
    period: "2024",
    description:
      "Worked on real-world frontend projects and collaborated with developers to build responsive web experiences.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Trueminds Innovation Ltd",
    period: "2024",
    description:
      "Developed modern web interfaces and gained practical experience working with frontend technologies.",
  },
];

const certificates = [
  {
    title: "Frontend Development Certificate",
    issuer: "HNG Internship",
    year: "2024",
    image: "/certificates/hng-frontend-certificate.jpeg",
  },
    {
    title: "Backend Development Certificate",
    issuer: "HNG Internship",
    year: "2024",
    image: "/certificates/hng-backend-certificate.jpeg",
  },
  {
    title: "Frontend Development Certificate",
    issuer: "Trueminds Innovation Ltd",
    year: "2026",
    image: "/certificates/trueminds-certificate.jpeg",
  },
];

export default function Experience() {
  // Selected certificate for the modal
  const [selectedCertificate, setSelectedCertificate] =
    useState<string | null>(null);

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================
            EXPERIENCE HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Experience
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            My professional journey
          </h2>
        </div>

        {/* =========================
            EXPERIENCE TIMELINE
        ========================== */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-cyan-400">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar size={16} />
                    {experience.period}
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================
            CERTIFICATES
        ========================== */}
        <div className="mt-28">
          <div className="mb-12 text-center">
            <Award className="mx-auto text-cyan-400" />

            <h3 className="mt-4 text-3xl font-bold text-white">
              Certificates & Credentials
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Professional certifications and credentials earned throughout
              my development journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.div
                key={`${certificate.issuer}-${certificate.title}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                {/* Certificate Image Button */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCertificate(certificate.image)
                  }
                  className="relative aspect-[4/3] w-full overflow-hidden"
                  aria-label={`View ${certificate.title}`}
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                      Click to View Certificate
                    </span>
                  </div>
                </button>

                {/* Certificate Details */}
                <div className="p-6">
                  <h4 className="font-semibold text-white">
                    {certificate.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {certificate.issuer} • {certificate.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          CERTIFICATE MODAL
      ========================== */}
      <CertificateModal
        image={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
