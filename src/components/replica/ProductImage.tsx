import Image from "next/image";

export function ProductImage({
  categorySlug,
  productSlug,
  productName,
  size = "card",
  fit = "cover",
  label,
}: {
  categorySlug: string;
  productSlug: string;
  productName?: string;
  size?: "card" | "hero";
  fit?: "cover" | "contain";
  label?: string;
}) {
  const isHero = size === "hero";
  const isContain = fit === "contain";

  return (
    <div
      className={`relative overflow-hidden rounded-xl ring-1 ring-slate-200/70 ${
        isContain ? "bg-white" : "bg-slate-100"
      } ${isHero ? "aspect-[4/3] md:aspect-[16/11]" : "aspect-square"}`}
    >
      <Image
        alt={productName ? `${productName} photo` : "Product photo"}
        className={isContain ? "object-contain p-6" : "object-cover"}
        fill
        sizes={isHero ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
        src={`/products/${categorySlug}/${productSlug}.jpg`}
      />
      {label ? (
        <span className="absolute bottom-2 right-2 rounded-md bg-white/85 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-slate-500 backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
