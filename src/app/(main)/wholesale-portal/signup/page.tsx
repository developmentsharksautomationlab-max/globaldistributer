import type { Metadata } from "next";
import Link from "next/link";
import { WholesaleSignupForm } from "@/components/replica/WholesaleSignupForm";

export const metadata: Metadata = {
  title: "Wholesale Sign Up | Global Distributer",
  description:
    "Create your Global Distributer wholesale account to access exclusive pricing, bulk ordering, and dedicated support.",
};

const benefits = [
  "Exclusive wholesale pricing tiers",
  "Bulk ordering across 30+ categories",
  "Priority shipping on wholesale orders",
  "A dedicated account manager",
] as const;

const steps = [
  { t: "Submit your application", d: "Share your business details and ID." },
  { t: "We verify your business", d: "Our team reviews your EIN and documents." },
  { t: "Start ordering", d: "Get portal access and wholesale pricing." },
] as const;

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function WholesaleSignupPage() {
  return (
    <section className="section-hero-dark relative overflow-hidden">
      <div className="bg-grid-lines pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-14 lg:py-20">
        <div className="text-white lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-200 backdrop-blur-sm">
            Wholesale portal
          </span>
          <h1 className="font-display mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Open your <span className="text-gradient-teal">wholesale account</span>
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-base text-stone-300 md:text-lg">
            Join retailers, distributors and online sellers sourcing directly through Global
            Distributer.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-stone-200">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-400/15 text-teal-300 ring-1 ring-teal-300/30">
                  <CheckIcon />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-400">
              How it works
            </h2>
            <ol className="mt-4 space-y-4">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-violet-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{s.t}</p>
                    <p className="text-sm text-stone-400">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 text-sm text-stone-400">
            Questions before you apply?{" "}
            <Link className="font-semibold text-teal-300 hover:text-teal-200 hover:underline" href="/contact">
              Contact our team
            </Link>{" "}
            or{" "}
            <Link
              className="font-semibold text-teal-300 hover:text-teal-200 hover:underline"
              href="/wholesale-portal"
            >
              learn about the portal
            </Link>
            .
          </p>
        </div>

        <div>
          <WholesaleSignupForm />
        </div>
      </div>
    </section>
  );
}
