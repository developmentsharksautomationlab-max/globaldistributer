import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/replica/PageHero";
import { dpmUrl } from "@/lib/dpmCdn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Brands | Global Distributer",
  description:
    "Partner with world-class brands and verified suppliers across multiple industries. Browse by category and explore our featured partners.",
};

const kpi = [
  ["500+", "Verified Brands"],
  ["50+", "Countries"],
  ["100K+", "Products"],
  ["99.8%", "Satisfaction"],
] as const;

const featured = [
  {
    name: "TechPro Global",
    blurb: "World's leading electronics manufacturer with over 15 years of innovation",
    spec: ["Smartphones", "Laptops", "Accessories"],
    est: "2008",
    hq: "California, USA",
    cert: ["ISO 9001", "CE", "FCC"],
    image: "/mobile-accessories-on-a-blue-pedestal.jpg",
  },
  {
    name: "BeautyLux International",
    blurb: "Premium beauty brand offering luxury cosmetics and skincare solutions",
    spec: ["Skincare", "Makeup", "Fragrances"],
    est: "2012",
    hq: "Paris, France",
    cert: ["FDA", "Cruelty-Free", "Organic"],
    image: "/perfume-bottle-product-photo.jpg",
  },
  {
    name: "StyleCraft Fashion",
    blurb: "Contemporary fashion house creating trendy and sustainable clothing",
    spec: ["Apparel", "Accessories", "Footwear"],
    est: "2015",
    hq: "Milan, Italy",
    cert: ["GOTS", "Fair Trade", "OEKO-TEX"],
    image: "/golden-products-tile.jpg",
  },
] as const;

const byCategory: Record<string, { name: string; count: string }[]> = {
  "Premium Electronics": [
    { name: "TechPro", count: "250+ products" },
    { name: "GadgetMaster", count: "180+ products" },
    { name: "ElectroWorld", count: "320+ products" },
    { name: "DigitalPlus", count: "150+ products" },
  ],
  "Beauty & Cosmetics": [
    { name: "BeautyLux", count: "200+ products" },
    { name: "GlowCare", count: "120+ products" },
    { name: "CosmoPro", count: "180+ products" },
    { name: "NaturalGlow", count: "95+ products" },
  ],
  "Fashion & Lifestyle": [
    { name: "StyleCraft", count: "300+ products" },
    { name: "TrendWorks", count: "220+ products" },
    { name: "UrbanStyle", count: "150+ products" },
    { name: "ClassicWear", count: "180+ products" },
  ],
};

export default function OurBrandsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our brands"
        title="Our Brands"
        subtitle="Partner with world-class brands and verified suppliers across multiple industries."
      />

      <section className="border-b border-gray-100 py-8">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {kpi.map(([n, t]) => (
              <div key={t} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-teal-600 md:text-3xl">{n}</p>
                <p className="text-sm text-gray-600">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Featured Brand Partners</h2>
        <p className="mt-1 text-gray-600">Spotlight on our premium brand partnerships</p>
        <div className="mt-8 space-y-5">
          {featured.map((b) => (
            <div
              key={b.name}
              className="grid gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_180px] md:p-5"
            >
              <div>
                <h3 className="text-base font-bold text-gray-900 md:text-lg">{b.name}</h3>
                <p className="mt-1.5 text-sm text-gray-600">{b.blurb}</p>
                <p className="mt-2.5 text-xs font-medium text-gray-500">Specialties</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {b.spec.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-teal-50 px-2 py-0.5 text-xs text-teal-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-600">
                  <span>Established: {b.est}</span>
                  <span>Headquarters: {b.hq}</span>
                </div>
                <p className="mt-2 text-xs font-medium text-gray-500">Certifications</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {b.cert.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-gray-200 px-1.5 py-0.5 text-xs"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-end gap-3">
                <div className="relative h-20 overflow-hidden rounded-lg md:h-24">
                  <Image
                    alt={b.name}
                    className="object-cover"
                    fill
                    sizes="180px"
                    src={dpmUrl(b.image)}
                  />
                </div>
                <button
                  className="w-full rounded-md bg-teal-600 py-2 text-sm font-semibold text-white hover:bg-teal-700"
                  type="button"
                >
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Browse Brands by Category</h2>
          <p className="mt-1 text-gray-600">Discover brands across all our product categories</p>
          <div className="mt-8 space-y-8">
            {Object.entries(byCategory).map(([cat, rows]) => (
              <div key={cat}>
                <h3 className="text-base font-bold text-gray-900">{cat}</h3>
                <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2 md:grid-cols-4">
                  {rows.map((row) => (
                    <div
                      key={row.name}
                      className="rounded-lg border border-white bg-white p-3 shadow-sm"
                    >
                      <p className="text-sm font-semibold text-gray-900">{row.name}</p>
                      <p className="text-xs text-gray-500">Leading in category</p>
                      <p className="mt-0.5 text-xs text-teal-600">{row.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <h2 className="text-center text-xl font-bold text-gray-900 md:text-2xl">
          Why Partner With Our Brands?
        </h2>
        <p className="text-center text-gray-600">Benefits of working with our verified brand partners</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { t: "Verified Quality", b: "All brands undergo rigorous verification to ensure product quality and authenticity." },
            { t: "Competitive Pricing", b: "Access wholesale pricing directly from manufacturers with transparent cost structure." },
            { t: "Fast Delivery", b: "Quick fulfillment and shipping through our global network of warehouses." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
              <h3 className="font-bold text-gray-900">{x.t}</h3>
              <p className="mt-2 text-sm text-gray-600">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold text-gray-900">Ready to Partner With Top Brands?</h2>
          <p className="mt-1 text-gray-600">Start sourcing from verified suppliers and grow your business today</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white" href="/catalogs">
              Explore All Brands
            </Link>
            <Link
              className="rounded-md border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800"
              href="/wholesale-portal#apply"
            >
              Become a Supplier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
