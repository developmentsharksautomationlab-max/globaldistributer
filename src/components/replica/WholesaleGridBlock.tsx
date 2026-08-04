import { fullCatalog } from "@/data/dpmContent";
import { GridCategoryIcon } from "./GridCategoryIcon";
import { Reveal } from "./Reveal";

function GridItem({ name }: { name: string }) {
  return (
    <div className="group flex flex-row items-center gap-3 rounded-xl border border-slate-200/70 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300/60 hover:shadow-lg hover:shadow-teal-900/10 md:gap-4 md:p-4">
      <GridCategoryIcon small />
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-sm font-medium leading-snug text-gray-900 md:text-base">{name}</p>
        <p className="text-xs text-gray-500 md:text-sm">+120k products</p>
      </div>
    </div>
  );
}

export function WholesaleGridBlock() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Reveal>
        <h2 className="font-display mb-6 max-w-2xl text-left text-xl font-semibold tracking-tight text-slate-900 md:mb-10 md:text-2xl lg:text-3xl">
          Wholesale Products Across 120+ Categories for Every Type of Reseller
        </h2>
      </Reveal>
      <Reveal
        stagger={0.02}
        y={16}
        duration={0.5}
        className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {fullCatalog.map((name) => (
          <GridItem key={name} name={name} />
        ))}
      </Reveal>
    </section>
  );
}
