import type { Metadata } from "next";
import { PageHero } from "@/components/replica/PageHero";
import Image from "next/image";
import Link from "next/link";
import { dpmUrl } from "@/lib/dpmCdn";

export const metadata: Metadata = {
  title: "Discount Retailers | Global Distributer",
  description:
    "Sourcing for discount stores, closeouts, and off-price — browse categories, suppliers, and deals for high-turn inventory.",
};

const tiles = [
  { title: "Closeout & Liquidation", desc: "Short lots, overstock, and seasonal clearance in volume.", src: "/box.png" },
  { title: "Dollar & Variety", desc: "Value assortments and impulse categories for high traffic floors.", src: "/dollar.png" },
  { title: "General Merchandise", desc: "Broadline SKUs to fill planograms and mixed shipments.", src: "/plane.png" },
  { title: "Seasonal & Gifts", desc: "Rotating programs for holidays, events, and co-op deals.", src: "/gift.png" },
] as const;

export default function DiscountRetailersPage() {
  return (
    <div>
      <PageHero
        eyebrow="For discount retailers"
        title="Sourcing for Discount & Off-Price Retail"
        subtitle="Build margin with high-turn categories — closeout, value, and broadline, backed by vetted B2B suppliers on Global Distributer."
      />
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {tiles.map((t) => (
            <div
              key={t.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative h-48">
                <Image
                  alt={t.title}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={dpmUrl(t.src)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-3 text-lg font-bold text-white">{t.title}</h3>
              </div>
              <p className="p-4 text-sm text-gray-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-gray-100 bg-gray-50 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-bold text-gray-900">Also explore</h2>
          <p className="mt-1 text-sm text-gray-600">Crosslisted categories and supplier programs for discount channels</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
            {["Dollar Store", "Closeout", "Gifts", "Toys", "Home", "HBA", "Importers"].map((c) => (
              <span key={c} className="rounded-full bg-white px-3 py-1 shadow-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <Link
            className="inline-block rounded-md bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white"
            href="/"
          >
            Return to home — search products
          </Link>
        </div>
      </section>
    </div>
  );
}
