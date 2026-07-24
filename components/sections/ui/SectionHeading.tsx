interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}