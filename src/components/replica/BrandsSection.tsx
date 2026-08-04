import Image from "next/image";
import { dpmUrl } from "@/lib/dpmCdn";
import { brandRow1, brandRow2, brandRow3 } from "@/data/dpmContent";
import { Reveal } from "./Reveal";

function Row({
  row,
  base,
  repeat,
}: {
  row: readonly number[];
  base: "row-1" | "row-2" | "row-3";
  repeat: boolean;
}) {
  const items = repeat ? [...row, ...row] : [...row];
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-dpm-scroll">
        {items.map((n, i) => (
          <div key={`${base}-${n}-${i}`} className="mx-4 w-48 flex-shrink-0 sm:w-48">
            <div className="flex aspect-square cursor-pointer items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200/70 hover:shadow-xl hover:shadow-teal-900/10">
              <Image
                alt={`Brand ${n}`}
                className="max-h-full max-w-full object-contain"
                height={160}
                src={dpmUrl(`/${base}/img-${n}.png`)}
                width={160}
                sizes="(max-width: 1024px) 25vw, 12rem"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RowMobile({ row, base }: { row: readonly number[]; base: "row-1" | "row-2" | "row-3" }) {
  const items = [...row, ...row];
  return (
    <div className="overflow-hidden">
      <div className="flex animate-dpm-scroll-mobile">
        {items.map((n, i) => (
          <div key={`${base}-m-${n}-${i}`} className="mx-2 w-24 flex-shrink-0 md:w-28">
            <div className="flex aspect-square items-center justify-center rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
              <Image
                alt={`Brand ${n}`}
                className="max-h-full max-w-full object-contain"
                height={112}
                src={dpmUrl(`/${base}/img-${n}.png`)}
                width={112}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-20">
      <Reveal className="mb-8 text-center md:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-600 md:text-sm">
          Trusted Partners
        </p>
        <h2 className="font-display mb-4 text-2xl font-bold tracking-tight text-gray-900 md:mb-4 md:text-3xl lg:text-4xl">
          Brands We Carry
        </h2>
        <div className="mb-8 flex justify-center gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 rotate-45 bg-gradient-to-br from-teal-500 to-violet-500"
            />
          ))}
        </div>
      </Reveal>
      <div className="fade-edges-x hidden space-y-8 lg:block">
        <Row base="row-1" repeat row={brandRow1} />
        <Row base="row-2" repeat row={brandRow2} />
        <Row
          base="row-3"
          repeat
          row={brandRow3}
        />
      </div>
      <div className="fade-edges-x space-y-8 lg:hidden">
        <RowMobile base="row-1" row={brandRow1} />
        <RowMobile base="row-2" row={brandRow2} />
        <RowMobile base="row-3" row={brandRow3} />
      </div>
    </section>
  );
}
