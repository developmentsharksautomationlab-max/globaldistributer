import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative mt-12 bg-slate-950 text-slate-400">
      <div
        className="h-[3px] w-full bg-gradient-to-r from-teal-500 via-violet-500 to-cyan-500"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Image
                alt="Global Distributer"
                className="h-11 w-auto brightness-0 invert"
                height={335}
                src="/logo.png"
                width={900}
              />
            </div>
            <p className="mb-4 max-w-md text-sm leading-6 text-slate-400">
              Global Distributer provides premium sourcing tools that help wholesale buyers find
              wholesale suppliers and products. This site is strictly B2B. Wholesale only. No
              consumers.
            </p>
            <p className="text-sm text-slate-400">
              Trusted by thousands of retailers and suppliers as a{" "}
              <span className="font-semibold text-white">top pick for wholesale buying and selling</span>.
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Products</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/discount-retailers">
                  Discount Retailers
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/online-resellers">
                  Online Resellers
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/catalogs">
                  Full Catalog
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/our-brands">
                  Featured Brands
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Services</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/wholesale-portal">
                  Wholesale Portal
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <a className="transition-colors hover:text-teal-300" href="mailto:info@globaldistributer.com">
                  Support
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-teal-300" href="mailto:info@globaldistributer.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Information</h5>
            <ul className="mb-6 space-y-2.5 text-sm">
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/about">
                  About us
                </Link>
              </li>
              <li>
                <a className="transition-colors hover:text-teal-300" href="mailto:info@globaldistributer.com">
                  Contact us
                </a>
              </li>
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/terms">
                  Terms of Use
                </Link>
              </li>
            </ul>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">More</h5>
            <ul className="mb-6 space-y-2.5 text-sm">
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/catalogs">
                  Product Catalogs
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/our-brands">
                  Brand Partners
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-teal-300" href="/wholesale-portal">
                  B2B Portal
                </Link>
              </li>
            </ul>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Follow Us</h5>
            <div className="flex gap-3">
              {["f", "in", "@"].map((x) => (
                <a
                  key={x}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-teal-500 hover:to-violet-600 hover:shadow-lg hover:shadow-teal-900/40"
                  href="#"
                >
                  {x}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Global Distributer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
