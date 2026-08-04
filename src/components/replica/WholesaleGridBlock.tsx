import { fullCatalog } from "@/data/dpmContent";
import { GridCategoryIcon } from "./GridCategoryIcon";
import { Reveal } from "./Reveal";

function DesktopItem({ name }: { name: string }) {
  return (
    <div className="group flex flex-row items-center gap-4 rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300/60 hover:shadow-lg hover:shadow-teal-900/10">
      <GridCategoryIcon />
      <div className="flex-1">
        <p className="mb-1 truncate text-base font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">+120k products</p>
      </div>
    </div>
  );
}

function MobileCol({ slice }: { slice: readonly (typeof fullCatalog)[number][] }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      {slice.map((name) => (
        <div
          key={name}
          className="flex w-64 min-w-0 flex-row items-center gap-3 rounded-xl border border-slate-200/70 bg-white p-3 shadow-sm"
        >
          <GridCategoryIcon small />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">+120k products</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function WholesaleGridBlock() {
  const a = fullCatalog;
  const colSize = Math.ceil(a.length / 4);
  const c0 = a.slice(0, colSize);
  const c1 = a.slice(colSize, colSize * 2);
  const c2 = a.slice(colSize * 2, colSize * 3);
  const c3 = a.slice(colSize * 3);
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
        className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {a.map((name) => (
          <DesktopItem key={name} name={name} />
        ))}
      </Reveal>
      <div className="md:hidden">
        <div className="flex w-max max-w-full gap-4 overflow-x-auto pb-4" style={{ width: "max-content" }}>
          <MobileCol slice={c0} />
          <MobileCol slice={c1} />
          <MobileCol slice={c2} />
          <MobileCol slice={c3} />
        </div>
      </div>
    </section>
  );
}
