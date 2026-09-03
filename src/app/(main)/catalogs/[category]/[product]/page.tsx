import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/replica/ProductImage";
import { PriceGate } from "@/components/replica/PriceGate";
import {
  categories,
  getCategory,
  getProduct,
  getProductsForCategory,
  getRelatedProducts,
} from "@/data/catalog";

export function generateStaticParams() {
  return categories.flatMap((category) =>
    getProductsForCategory(category.slug).map((product) => ({
      category: category.slug,
      product: product.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, product: productSlug } = await params;
  const category = getCategory(categorySlug);
  const product = category ? getProduct(categorySlug, productSlug) : undefined;
  if (!category || !product) return {};
  return {
    title: `${product.name} | ${category.name} Wholesale | Global Distributer`,
    description: product.tagline,
  };
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const category = getCategory(categorySlug);
  const product = category ? getProduct(categorySlug, productSlug) : undefined;
  if (!category || !product) notFound();

  const related = getRelatedProducts(product, 3);

  return (
    <div>
      <section className="border-b border-stone-200/90 bg-gradient-to-br from-teal-50/70 via-stone-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-stone-500 md:px-6">
          <Link className="hover:text-teal-700" href="/catalogs">
            Catalogs
          </Link>
          <span className="mx-2">/</span>
          <Link className="hover:text-teal-700" href={`/catalogs/${category.slug}`}>
            {category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone-800">{product.name}</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <ProductImage
              categorySlug={product.categorySlug}
              productSlug={product.slug}
              productName={product.name}
              size="hero"
              fit={product.imageFit}
              label={product.sku}
            />
          </div>

          <div>
            {product.badge ? (
              <span className="mb-3 inline-flex w-fit rounded-full bg-teal-600/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-teal-700">
                {product.badge}
              </span>
            ) : null}
            <h1 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">{product.name}</h1>
            <p className="mt-2 text-sm text-stone-500">
              SKU: {product.sku} &middot;{" "}
              <Link className="hover:text-teal-700" href={`/catalogs/${category.slug}`}>
                {category.name}
              </Link>
            </p>
            <p className="mt-4 text-stone-600">{product.description}</p>

            <PriceGate variant="panel" className="mt-6" />

            <dl className="mt-6 grid grid-cols-3 gap-4 rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <div>
                <dt className="text-stone-500">Pack Size</dt>
                <dd className="mt-0.5 font-semibold text-stone-900">{product.packSize}</dd>
              </div>
              <div>
                <dt className="text-stone-500">Min. Order</dt>
                <dd className="mt-0.5 font-semibold text-stone-900">{product.moq}</dd>
              </div>
              <div>
                <dt className="text-stone-500">Origin</dt>
                <dd className="mt-0.5 font-semibold text-stone-900">{product.origin}</dd>
              </div>
            </dl>

            <ul className="mt-6 space-y-2.5 text-sm text-stone-600">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <CheckIcon />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                href="/contact"
              >
                Request Wholesale Quote
              </Link>
              <Link
                className="rounded-full border border-stone-200 px-6 py-2.5 text-sm font-semibold text-stone-800 hover:bg-stone-50"
                href={`/catalogs/${category.slug}`}
              >
                Back to {category.name}
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mt-16 border-t border-stone-100 pt-10">
            <h2 className="text-lg font-bold text-stone-900 md:text-xl">More from {category.name}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/catalogs/${category.slug}/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300/60 hover:shadow-lg hover:shadow-teal-900/10"
                >
                  <div className="p-3">
                    <ProductImage
                      categorySlug={r.categorySlug}
                      productSlug={r.slug}
                      productName={r.name}
                      fit={r.imageFit}
                      label={r.sku}
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-4 pb-4">
                    <h3 className="text-sm font-semibold leading-snug text-stone-900">{r.name}</h3>
                    <p className="mt-1 text-xs text-stone-500">{r.tagline}</p>
                    <div className="mt-auto pt-3">
                      <PriceGate variant="card" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
