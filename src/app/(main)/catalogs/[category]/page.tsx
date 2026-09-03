import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/replica/PageHero";
import { ProductImage } from "@/components/replica/ProductImage";
import { PriceGate } from "@/components/replica/PriceGate";
import { Reveal } from "@/components/replica/Reveal";
import { categories, getCategory, getProductsForCategory } from "@/data/catalog";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} Wholesale Products | Global Distributer`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsForCategory(slug);

  return (
    <div>
      <PageHero eyebrow="Wholesale category" title={category.name} subtitle={category.description} />

      <section className="mx-auto max-w-7xl px-4 pt-6 text-sm text-stone-500 md:px-6">
        <Link className="hover:text-teal-700" href="/catalogs">
          Catalogs
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-800">{category.name}</span>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-stone-900 md:text-2xl">Featured {category.name} Products</h2>
            <p className="mt-1 text-sm text-stone-600">
              {`${products.length} featured picks shown below — the full range of 120,000+ SKUs in this category unlocks with a free wholesale account.`}
            </p>
          </div>
          <Link
            className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:border-teal-300 hover:text-teal-700"
            href="/catalogs"
          >
            &larr; All categories
          </Link>
        </div>

        <Reveal
          stagger={0.03}
          y={16}
          duration={0.5}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/catalogs/${category.slug}/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300/60 hover:shadow-lg hover:shadow-teal-900/10"
            >
              <div className="p-3">
                <ProductImage
                  categorySlug={p.categorySlug}
                  productSlug={p.slug}
                  productName={p.name}
                  fit={p.imageFit}
                  label={p.sku}
                />
              </div>
              <div className="flex flex-1 flex-col px-4 pb-4">
                {p.badge ? (
                  <span className="mb-2 inline-flex w-fit rounded-full bg-teal-600/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-teal-700">
                    {p.badge}
                  </span>
                ) : null}
                <h3 className="text-sm font-semibold leading-snug text-stone-900 md:text-base">{p.name}</h3>
                <p className="mt-1 text-xs text-stone-500">{p.tagline}</p>
                <div className="mt-auto pt-3">
                  <PriceGate variant="card" />
                </div>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>

      <section className="border-t border-stone-100 bg-stone-50 py-10">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-lg font-bold text-stone-900">Want to see wholesale pricing?</h2>
          <p className="mt-1 text-sm text-stone-600">
            Buyer accounts are launching soon. Reach out to our team for pricing, MOQs, and availability on any
            product in {category.name}.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              className="rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              href="/contact"
            >
              Contact Sales
            </Link>
            <Link
              className="rounded-full border border-stone-200 px-6 py-2.5 text-sm font-semibold text-stone-800 hover:bg-white"
              href="/catalogs"
            >
              Browse Other Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
