import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/replica/PageHero";

export const metadata: Metadata = {
  title: "Sign-up Received | Global Distributer",
  description: "Thanks for signing up for a Global Distributer wholesale account.",
};

export default function WholesaleSignupThankYouPage() {
  return (
    <div>
      <PageHero
        eyebrow="Wholesale portal"
        title="Thanks for signing up!"
        subtitle="We've received your details. Our team will review your application and get back to you shortly."
      />
      <section className="py-10">
        <div className="mx-auto flex max-w-2xl justify-center px-4">
          <Link
            className="glow-teal inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            href="/"
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
