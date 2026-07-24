"use client";

import Image from "next/image";
import {  ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function GitHubActivity() {
  const username = "rillygulma";

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <FaGithub className="mx-auto text-cyan-400" />

          <h2 className="mt-4 text-4xl font-bold">
            GitHub Activity
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore my open-source projects and development activity.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-6">
          <div className="overflow-x-auto">
            <Image
              src={`https://ghchart.rshah.org/${username}`}
              alt="GitHub contribution activity"
              width={800}
              height={120}
              unoptimized
              className="mx-auto min-w-[700px]"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
          >
            View GitHub Profile
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}