import type { Metadata } from "next";
import { PageHero } from "@/components/replica/PageHero";
import Link from "next/link";
import { categories, getProductsForCategory } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Product Catalogs | Global Distributer",
  description:
    "Explore thousands of products from verified suppliers across various categories. Browse by category and featured supplier catalogs.",
};

const browse = categories.map((c) => ({
  title: c.name,
  slug: c.slug,
  count: `${getProductsForCategory(c.slug).length} featured · 120k+ in category`,
  desc: c.description,
}));

const featured = [
  { badge: "New", name: "Premium Electronics Catalog 2024", by: "TechSource Global", n: 450, tags: ["Smartphones", "Laptops", "Accessories"] },
  { badge: "Popular", name: "Beauty Essentials Collection", by: "Beauty Wholesale Pro", n: 320, tags: ["Skincare", "Makeup", "Tools"] },
  { badge: "Featured", name: "Mobile Accessories Hub", by: "Mobile World Inc", n: 280, tags: ["Cases", "Chargers", "Stands"] },
] as const;

const stats = [
  ["12,000+", "Total Products"],
  ["500+", "Verified Suppliers"],
  ["50+", "Categories"],
  ["24/7", "Support"],
] as const;

export default function CatalogsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Product catalogs"
        title="Product Catalogs"
        subtitle="Explore thousands of products from verified suppliers across various categories."
      />
      <section className="mx-auto max-w-2xl border-b border-gray-100 px-4 py-6">
        <form className="flex flex-col gap-2 sm:flex-row" role="search">
          <input
            className="h-10 flex-1 rounded-md border border-gray-200 px-3 text-sm"
            name="q"
            placeholder="Search"
            type="search"
          />
          <button className="h-10 rounded-md bg-teal-600 px-4 text-sm font-medium text-white hover:bg-teal-700" type="submit">
            Search
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Browse by Category</h2>
        <p className="mt-1 text-gray-600">Discover products across our comprehensive catalog categories</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {browse.map((c) => (
            <div
              key={c.slug}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div>
                <p className="text-sm font-medium text-teal-600">{c.count}</p>
                <h3 className="mt-1 text-lg font-bold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
              </div>
              <Link
                className="mt-4 text-sm font-semibold text-teal-600 hover:underline"
                href={`/catalogs/${c.slug}`}
              >
                Browse Category →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Featured Catalogs</h2>
          <p className="mt-1 text-gray-600">Handpicked catalogs from our top-performing suppliers</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featured.map((f) => (
              <div key={f.name} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="bg-teal-600/10 px-4 py-1.5 text-xs font-bold uppercase text-teal-700">
                  {f.badge}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{f.name}</h3>
                  <p className="text-sm text-gray-500">by {f.by}</p>
                  <p className="mt-2 text-sm text-gray-600">
                    {f.n} products across multiple categories
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mt-4 w-full rounded-md border border-gray-200 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                    type="button"
                  >
                    View Catalog
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(([n, t]) => (
            <div key={t} className="text-center">
              <p className="text-2xl font-bold text-gray-900 md:text-3xl">{n}</p>
              <p className="text-sm text-gray-500">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900">Ready to Start Sourcing?</h2>
          <p className="mt-1 text-gray-600">
            Join thousands of retailers who trust us for their wholesale needs
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
              href="/online-resellers"
            >
              Browse All Catalogs
            </Link>
            <Link
              className="rounded-md border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              href="/contact"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
