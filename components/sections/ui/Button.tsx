import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
        variant === "primary"
          ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
          : "border border-white/10 bg-white/5 text-white hover:border-cyan-400 hover:text-cyan-400"
      }`}
    >
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}