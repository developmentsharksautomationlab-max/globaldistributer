import Image from "next/image";
import { dpmUrl } from "@/lib/dpmCdn";
import { CategoryPillRow } from "./CategoryPillRow";
import { Reveal } from "./Reveal";

const popular = ["Electronics", "Health & Beauty", "Fashion", "Home & Garden"] as const;

export function HeroWithPills() {
  return (
    <>
      <section className="section-hero-dark relative overflow-hidden py-14 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <Reveal className="mb-6 flex justify-center md:mb-8">
            <p className="card-glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-200 md:text-[13px]">
              US America&apos;s wholesale hub since 1997
            </p>
          </Reveal>
          <Reveal y={36} delay={0.1} className="mb-8 text-center md:mb-12">
            <h1 className="font-display mx-auto max-w-5xl px-4 text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Connect{" "}
              <span className="mx-1 inline-block md:mx-2">
                <Image
                  alt="Business person"
                  className="glow-teal inline-block rounded-full ring-2 ring-teal-300/40 md:h-[60px] md:w-[60px]"
                  height={40}
                  src={dpmUrl("/hero-1.png")}
                  width={40}
                  priority
                />
              </span>{" "}
              with top wholesale suppliers
              <br />
              &amp; find{" "}
              <span className="text-gradient-teal">products</span>{" "}
              <span className="mx-1 inline-block md:mx-2">
                <Image
                  alt="Product showcase"
                  className="glow-violet inline-block rounded-full ring-2 ring-violet-300/40 md:h-[100px] md:w-[100px]"
                  height={60}
                  src={dpmUrl("/hero-2.png")}
                  width={60}
                  priority
                />
              </span>{" "}
              that sell
            </h1>
          </Reveal>

          <Reveal y={24} delay={0.2} className="mb-10 max-w-2xl px-4 md:mx-auto md:mb-16">
            <form
              className="card-glass relative mx-auto flex w-full max-w-2xl items-center gap-2 rounded-2xl p-2 shadow-2xl shadow-black/40"
              aria-label="Search wholesale suppliers and products"
            >
              <input
                className="h-9 w-full min-w-0 flex-1 rounded-md border-0 bg-transparent px-3 text-base text-white shadow-none outline-none ring-0 placeholder:text-stone-400 focus:ring-0 md:text-sm"
                placeholder="Search wholesale products or suppliers"
                name="q"
                suppressHydrationWarning
              />
              <button
                className="glow-teal h-9 shrink-0 rounded-xl bg-gradient-to-r from-teal-500 to-violet-600 px-5 py-2 text-sm font-medium text-white transition-all hover:from-teal-400 hover:to-violet-500"
                type="submit"
              >
                Search
              </button>
            </form>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-sm font-medium text-stone-400">Popular:</span>
              {popular.map((p) => (
                <button
                  key={p}
                  className="card-glass inline-flex h-8 items-center justify-center rounded-full px-3 text-xs font-medium text-stone-200 transition-colors hover:border-teal-300/40 hover:text-teal-200"
                  type="button"
                >
                  {p}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 md:-mt-14">
        <Reveal
          delay={0.15}
          className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-2xl shadow-stone-900/15 md:p-8"
        >
          <CategoryPillRow />
        </Reveal>
      </div>
    </>
  );
}
