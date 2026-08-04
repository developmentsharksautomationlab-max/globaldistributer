import Image from "next/image";
import { discoverMore } from "@/data/dpmContent";
import { dpmUrl } from "@/lib/dpmCdn";
import { DiscountRetailerSlider } from "./ResellerSliders";
import { Reveal } from "./Reveal";

const arrow = (
  <svg
    className="h-3 w-3 text-black md:h-4 md:w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export function BuyersSourcingBlock() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-6 border-b border-gray-200 md:mb-12">
          <div className="flex">
            <button
              className="relative flex items-center gap-2 px-4 py-3 text-sm font-semibold text-teal-700 md:px-6 md:text-base"
              type="button"
            >
              <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-teal-500 to-violet-500" />
              <svg
                className="h-4 w-4 md:h-5 md:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              For buyers
            </button>
            <button
              className="flex items-center gap-2 border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 md:px-6 md:text-base"
              type="button"
            >
              <svg
                className="h-4 w-4 md:h-5 md:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              For suppliers
            </button>
          </div>
        </div>

        <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative order-2 lg:order-1">
            <Image
              alt="Buyer searching for products"
              className="glow-teal h-64 w-full rounded-2xl object-cover md:h-80 lg:h-96"
              height={600}
              src={dpmUrl("/buyer.png")}
              width={900}
            />
            <div className="card-glass absolute left-4 top-4 rounded-full px-3 py-1 shadow-sm">
              <span className="text-xs text-stone-800 md:text-sm">🔍 Search for...</span>
            </div>
            <div className="card-glass absolute bottom-4 right-4 rounded-lg px-3 py-2 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="text-xs font-medium text-stone-800 md:text-sm">Verified supplier</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900 md:text-3xl">Simplify your sourcing</h2>
            <p className="mb-6 text-sm text-gray-600 md:mb-8 md:text-base">
              Gain free access to the web&apos;s original wholesale marketplace and start
              sourcing from America&apos;s top wholesalers all in one place
            </p>
            <button
              className="glow-teal h-10 w-full rounded-full bg-gradient-to-r from-teal-500 to-violet-600 px-8 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:from-teal-400 hover:to-violet-500 sm:w-auto md:h-12 md:text-base"
              type="button"
            >
              Browse Products →
            </button>
          </div>
        </Reveal>

        <Reveal stagger={0.1} y={22} className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 lg:grid-cols-3">
          <div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200/60 hover:shadow-xl hover:shadow-teal-900/10 md:p-6">
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 ring-1 ring-black/5 md:mb-4 md:h-12 md:w-12">
              <svg
                className="h-5 w-5 text-teal-600 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold md:mb-3 md:text-lg">Deals and steals</h3>
            <p className="text-xs text-gray-600 md:text-sm">
              Looking for a wholesale bargain? Exclusive deals and promotions are posted daily
              for registered buyers by the approved wholesalers on Global Distributer.
            </p>
          </div>
          <div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200/60 hover:shadow-xl hover:shadow-teal-900/10 md:p-6">
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-50 ring-1 ring-black/5 md:mb-4 md:h-12 md:w-12">
              <svg
                className="h-5 w-5 text-yellow-600 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold md:mb-3 md:text-lg">Instant Checkout</h3>
            <p className="text-xs text-gray-600 md:text-sm">
              Purchase merchandise with the click of a button with our instant checkout feature. Pay
              with credit card, digital wallets, bank transfers and more to make wholesale buying a
              breeze.
            </p>
          </div>
          <div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200/60 hover:shadow-xl hover:shadow-teal-900/10 sm:col-span-2 lg:col-span-1 md:p-6">
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 ring-1 ring-black/5 md:mb-4 md:h-12 md:w-12">
              <svg
                className="h-5 w-5 text-orange-600 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0Z"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold md:mb-3 md:text-lg">True wholesale pricing</h3>
            <p className="text-xs text-gray-600 md:text-sm">
              Other marketplaces charge suppliers hefty commissions—costs that get passed on to
              you. At Global Distributer, suppliers pay 0% commission, so you get the best prices
              with no extra markup.
            </p>
          </div>
        </Reveal>
      </section>

      <DiscountRetailerSlider />

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-12 items-center gap-8 lg:mb-16 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="font-display mb-6 max-w-md text-2xl text-gray-900 md:mb-8 md:text-3xl lg:text-4xl">
                Sourcing wholesale has never been easier
              </h2>
            </Reveal>
            <Reveal stagger={0.12} y={20} className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 ring-1 ring-black/5 md:h-16 md:w-16">
                  <svg
                    className="h-6 w-6 text-teal-600 md:h-8 md:w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-gray-900 md:mb-2 md:text-xl">Search for products</h3>
                  <p className="text-sm text-gray-600 md:text-base">
                    Search and filter from our vast product and supplier offerings to find exactly
                    what your business needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 ring-1 ring-black/5 md:h-16 md:w-16">
                  <svg
                    className="h-6 w-6 text-orange-600 md:h-8 md:w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-gray-900 md:mb-2 md:text-xl">Find the best deal</h3>
                  <p className="text-sm text-gray-600 md:text-base">
                    See wholesale pricing from hundreds of wholesale suppliers with just one account.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-50 ring-1 ring-black/5 md:h-16 md:w-16">
                  <svg
                    className="h-6 w-6 text-yellow-600 md:h-8 md:w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-gray-900 md:mb-2 md:text-xl">Effortless ordering</h3>
                  <p className="text-sm text-gray-600 md:text-base">
                    Your favorite payment method will be securely stored so you can checkout as soon
                    as you find what you&apos;re looking for.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 ring-1 ring-black/5 md:h-16 md:w-16">
                  <svg
                    className="h-6 w-6 text-teal-600 md:h-8 md:w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-gray-900 md:mb-2 md:text-xl">Stay in the loop</h3>
                  <p className="text-sm text-gray-600 md:text-base">
                    Never miss out on promotions, news, and industry trends with our Buyer&apos;s
                    Network Newsletter.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative order-1 lg:order-2">
            <Image
              alt="Sourcing wholesale products"
              className="mx-auto h-auto w-full max-w-sm drop-shadow-2xl md:max-w-lg"
              height={500}
              src={dpmUrl("/sourcing.png")}
              width={500}
            />
          </Reveal>
        </div>
        <div className="mt-6 flex justify-center md:mt-8">
          <button
            className="glow-teal h-10 w-full rounded-full bg-gradient-to-r from-teal-500 to-violet-600 px-8 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:from-teal-400 hover:to-violet-500 sm:w-auto md:h-12 md:text-base"
            type="button"
          >
            Create your free account →
          </button>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal>
            <h3 className="font-display mb-6 text-2xl text-gray-900 md:mb-8 md:text-3xl">Discover even more</h3>
          </Reveal>
          <Reveal
            stagger={0.03}
            y={16}
            duration={0.5}
            className="hidden grid-cols-2 gap-3 md:grid md:gap-4 lg:grid-cols-3 xl:grid-cols-4"
          >
            {["What's hot", ...discoverMore].map((label) => (
              <div
                key={label}
                className="group flex flex-col gap-6 rounded-xl border border-gray-200/80 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300/50 hover:shadow-lg hover:shadow-teal-900/10 md:p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black md:text-base">{label}</span>
                  {arrow}
                </div>
              </div>
            ))}
          </Reveal>
          <div className="md:hidden">
            <div
              className="flex w-max max-w-full gap-3 overflow-x-auto pb-2"
              style={{ width: "max-content" }}
            >
              {["What's hot", ...discoverMore].map((label) => (
                <div
                  key={label}
                  className="w-64 flex-none rounded-xl border bg-white p-3 text-sm text-black shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    {label}
                    {arrow}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
