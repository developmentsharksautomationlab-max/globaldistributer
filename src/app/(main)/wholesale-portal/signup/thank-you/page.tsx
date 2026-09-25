import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Received | Global Distributer",
  description: "Thanks for applying for a Global Distributer wholesale account.",
};

const next = [
  "Our team reviews your business details and documents.",
  "We may reach out if we need anything else.",
  "Once approved, you'll get an email with your portal access.",
] as const;

export default function WholesaleSignupThankYouPage() {
  return (
    <section className="section-hero-dark relative overflow-hidden">
      <div className="bg-grid-lines pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-xl px-4 py-16 md:py-24">
        <div className="cf-rise rounded-3xl border border-stone-200/80 bg-white p-6 text-center shadow-2xl shadow-stone-900/20 md:p-10">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-violet-600 text-white shadow-lg shadow-teal-600/30">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path className="cf-check-path" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <h1 className="font-display mt-6 text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
            Application received
          </h1>
          <p className="mt-3 text-pretty text-stone-600">
            Thanks for applying for a wholesale account. We&apos;ll review your details and get back
            to you shortly.
          </p>

          <div className="mt-8 rounded-2xl bg-stone-50 p-5 text-left ring-1 ring-stone-200/80">
            <h2 className="text-sm font-semibold text-stone-900">What happens next</h2>
            <ol className="mt-3 space-y-3">
              {next.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-stone-600">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              className="glow-teal inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              href="/catalogs"
            >
              Browse catalogs
            </Link>
            <Link
              className="inline-flex h-11 items-center justify-center rounded-full border border-stone-300 bg-white px-6 text-sm font-semibold text-stone-700 transition-colors hover:border-teal-400 hover:text-teal-700"
              href="/"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
