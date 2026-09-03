import Link from "next/link";

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M16.5 10.5V7.5a4.5 4.5 0 1 0-9 0v3M6 10.5h12a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V12A1.5 1.5 0 0 1 6 10.5Z"
      />
    </svg>
  );
}

export function PriceGate({
  variant = "card",
  className = "",
}: {
  variant?: "card" | "panel";
  className?: string;
}) {
  if (variant === "card") {
    return (
      <div
        className={`inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-teal-50 to-violet-50 px-2.5 py-1.5 text-xs font-semibold text-teal-800 ring-1 ring-teal-600/15 ${className}`}
      >
        <LockIcon className="h-3.5 w-3.5 flex-shrink-0" />
        Login or Sign Up to View Price
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-teal-200/70 bg-gradient-to-br from-teal-50 via-white to-violet-50 p-6 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 text-teal-700">
        <LockIcon className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.1em]">Wholesale Pricing</span>
      </div>
      <p className="mt-2 text-xl font-bold text-stone-900 md:text-2xl">Login or Sign Up to View Price</p>
      <p className="mt-2 text-sm text-stone-600">
        Wholesale pricing, volume discounts, and reorder tools are reserved for registered buyers. Create a
        free account to unlock pricing on this and 120,000+ other products.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <span className="inline-flex h-11 cursor-default select-none items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 px-6 text-sm font-semibold text-white opacity-90">
          Log In
        </span>
        <span className="inline-flex h-11 cursor-default select-none items-center justify-center rounded-full border border-teal-300 bg-white px-6 text-sm font-semibold text-teal-700 opacity-90">
          Create Free Account
        </span>
      </div>
      <p className="mt-3 text-xs text-stone-500">
        Buyer accounts are launching soon.{" "}
        <Link href="/contact" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-800">
          Contact our team
        </Link>{" "}
        for pricing and availability in the meantime.
      </p>
    </div>
  );
}
