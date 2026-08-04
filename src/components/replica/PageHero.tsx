export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <div className="border-b border-stone-200/90 bg-gradient-to-br from-teal-50/70 via-stone-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        {eyebrow ? (
          <div className="mb-3">
            <span className="inline-flex rounded-full border border-teal-200/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-800 shadow-sm backdrop-blur-sm">
              {eyebrow}
            </span>
          </div>
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-4 max-w-3xl text-pretty text-lg text-stone-600">{subtitle}</p> : null}
      </div>
    </div>
  );
}
