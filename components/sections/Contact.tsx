"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rilwanu Idris for web development and frontend projects.",
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Get In Touch
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              Let&apos;s build something great together.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Have a project in mind or need help building a modern web
              application? I&apos;d love to hear from you.
            </p>

            <div className="mt-10 space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" size={22} />

                <a
                  href="mailto:rillygulma@gmail.com"
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  rillygulma@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" size={22} />

                <a
                  href="tel:+2348035504017"
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  +234 803 550 4017
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" size={22} />

                <span className="text-slate-300">
                  Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
          >
            {/* Name */}
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />

            {/* Message */}
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
