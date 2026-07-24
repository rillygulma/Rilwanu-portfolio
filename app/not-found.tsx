import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
      <div>
        <p className="text-8xl font-bold text-cyan-400">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold">
          Page not found
        </h1>

        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}