import type { Metadata } from "next";
import { PageHero } from "@/components/replica/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Resellers | Global Distributer",
  description:
    "Find trending products for online marketplaces and e-commerce — search categories and connect with wholesale suppliers.",
};

const filters = [
  "All Categories",
  "Tech Gadgets",
  "Fashion Accessories",
  "Home Decor",
  "Sports & Fitness",
  "Beauty Products",
] as const;

export default function OnlineResellersPage() {
  return (
    <div>
      <PageHero
        eyebrow="E-commerce & marketplaces"
        title="Popular Categories for Online Resellers"
        subtitle="Find trending products perfect for online marketplaces and e-commerce stores."
      />
      <section className="border-b border-gray-100 bg-white py-4">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4">
          <div className="flex w-max gap-2">
            {filters.map((f) => (
              <button
                key={f}
                className="whitespace-nowrap rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-700 hover:border-teal-300 hover:bg-white"
                type="button"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-lg px-4 py-20 text-center">
        <h2 className="text-lg font-semibold text-gray-800">No products found</h2>
        <p className="mt-2 text-sm text-gray-600">
          No products available in this category yet. Try another filter or back to the marketplace
          home to search the full directory.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white" href="/">
            Home
          </Link>
          <Link
            className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium"
            href="/catalogs"
          >
            View catalogs
          </Link>
        </div>
      </section>
    </div>
  );
}
