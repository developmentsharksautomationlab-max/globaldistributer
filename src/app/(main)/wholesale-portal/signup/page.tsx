import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/replica/PageHero";
import { WholesaleSignupForm } from "@/components/replica/WholesaleSignupForm";

export const metadata: Metadata = {
  title: "Wholesale Sign Up | Global Distributer",
  description:
    "Create your Global Distributer wholesale account to access exclusive pricing, bulk ordering, and dedicated support.",
};

export default function WholesaleSignupPage() {
  return (
    <div>
      <PageHero
        eyebrow="Wholesale portal"
        title="Create your wholesale account"
        subtitle="Sign up in a minute. Once your account is approved you'll get access to exclusive wholesale pricing and bulk ordering."
      />
      <section className="py-10">
        <div className="mx-auto max-w-2xl px-4">
          <WholesaleSignupForm />
          <p className="mt-6 text-center text-sm text-stone-600">
            Want to know more first?{" "}
            <Link className="font-semibold text-teal-700 hover:underline" href="/wholesale-portal">
              Learn about the wholesale portal
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
