import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function ServicesBlock() {
  return (
    <section className="border-y border-slate-200/80 bg-white px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-teal-600 md:text-base">
            WE SOURCE FOR YOU
          </p>
          <h2 className="font-display mx-auto max-w-4xl text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
            Our Service Exceeds Your Expectations
          </h2>
        </Reveal>
        <Reveal
          stagger={0.1}
          y={24}
          className="mb-16 grid grid-cols-2 gap-6 md:mb-20 md:grid-cols-3 md:gap-8 lg:grid-cols-5"
        >
          {[
            {
              bg: "bg-orange-50",
              d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              bg: "bg-teal-50",
              d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
            },
            {
              bg: "bg-pink-50",
              d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
            },
            {
              bg: "bg-purple-50",
              d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
            },
            {
              bg: "bg-cyan-50",
              d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            },
          ].map((icon, i) => {
            const [line1, line2] = [
              ["Lower", "Price"],
              ["Local", "Warehouses"],
              ["Preorder", "Inventory"],
              ["Product", "Labelling"],
              ["Order", "Fulfillment"],
            ][i] as [string, string];
            return (
              <div
                key={line1 + line2}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-200/60 hover:shadow-xl hover:shadow-teal-900/10 md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
                <div
                  className={`${icon.bg} mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24`}
                >
                  <svg
                    className="h-12 w-12 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d={icon.d}
                    />
                  </svg>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 md:text-xl">{line1}</h3>
                <p className="text-base font-semibold text-gray-700 md:text-lg">{line2}</p>
              </div>
            );
          })}
        </Reveal>
        <Reveal
          stagger={0.15}
          y={20}
          className="grid grid-cols-1 gap-8 border-t border-slate-200 pt-10 md:grid-cols-3 md:gap-12"
        >
          {[
            ["99.9%", "Final customers have a good purchasing experience."],
            ["75K", "Low prices without the cost of warehousing."],
            ["100+", "We offer a large variety of products."],
          ].map(([k, t]) => (
            <div key={k} className="text-center">
              <div className="flex items-center justify-center gap-4">
                <Counter
                  value={k}
                  className="text-gradient-teal text-2xl font-bold md:text-3xl lg:text-4xl"
                />
                <p className="max-w-xs text-left text-base text-gray-600 md:text-lg">{t}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
