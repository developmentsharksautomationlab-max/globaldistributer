import type { Metadata } from "next";
import { PageHero } from "@/components/replica/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use | Global Distributer",
  description: "Terms of use for Global Distributer B2B services.",
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        title="Terms of Use"
        subtitle="Rules and conditions for using our B2B wholesale directory and services."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-10 text-sm leading-relaxed text-gray-600 md:text-base">
        <p>
          This is a static placeholder for development. Replace with terms covering marketplace
          conduct, account eligibility, ordering, liability, and governing law for your business.
        </p>
      </div>
    </div>
  );
}
