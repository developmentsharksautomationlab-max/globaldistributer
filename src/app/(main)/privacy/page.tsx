import type { Metadata } from "next";
import { PageHero } from "@/components/replica/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Global Distributer",
  description: "Privacy policy for Global Distributer B2B services.",
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle information for our B2B marketplace and portal users."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-10 text-sm leading-relaxed text-gray-600 md:text-base">
        <p>
          This is a static placeholder page for development. A full privacy policy should be
          provided by your legal team, covering data collection, cookies, account information, and
          third-party services used in your production environment.
        </p>
        <p>
          For questions, contact the address listed in the site footer or your account
          representative.
        </p>
      </div>
    </div>
  );
}
