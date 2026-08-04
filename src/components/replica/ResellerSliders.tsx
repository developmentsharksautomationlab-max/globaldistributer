import Image from "next/image";
import { dpmUrl } from "@/lib/dpmCdn";
import { Reveal } from "./Reveal";

const online = [
  { title: "Amazon FBA", src: "/cat-1.png" },
  { title: "Electronics", src: "/cat-2.png" },
  { title: "Cosmetics", src: "/cat-3.png" },
  { title: "Perfume", src: "/perfume-bottle-product-photo.jpg" },
  { title: "Closeout", src: "/golden-products-tile.jpg" },
] as const;

const discount = [
  { title: "Closeout Suppliers", src: "/box.png" },
  { title: "General Merchandise", src: "/plane.png" },
  { title: "Dollar Store", src: "/dollar.png" },
  { title: "Gifts", src: "/gift.png" },
  { title: "Toys & Hobbies", src: "/mobile-accessories-on-a-blue-pedestal.jpg" },
] as const;

function Chev() {
  return (
    <svg
      className="h-4 w-4 md:h-5 md:w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CardRow({
  span,
  items,
}: {
  span: string;
  items: readonly { title: string; src: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <Reveal className="mb-6 flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-center">
        <h2 className="font-display flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl lg:text-3xl">
          Popular categories for{" "}
          <span className="text-gradient-teal inline-flex items-center gap-1">
            {span}
            <Chev />
          </span>
        </h2>
        <button
          className="self-start text-left text-sm font-medium text-slate-600 transition-colors hover:text-teal-700 md:self-center"
          type="button"
        >
          See more categories →
        </button>
      </Reveal>
      <div className="relative">
        <Reveal stagger={0.08} y={20} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:gap-6">
          {items.map((c) => (
            <div
              key={c.title}
              className="group flex w-56 flex-none cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-0 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300/60 hover:shadow-2xl hover:shadow-teal-900/15 md:w-64 lg:w-72"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl md:h-72 lg:h-80">
                <Image
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  height={400}
                  src={dpmUrl(c.src)}
                  width={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                  <h3 className="text-base font-semibold text-white md:text-lg">{c.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function ResellerSliders() {
  return (
    <div>
      <CardRow items={online} span="Online Resellers" />
    </div>
  );
}

export function DiscountRetailerSlider() {
  return <CardRow items={discount} span="Discount Retailers" />;
}
