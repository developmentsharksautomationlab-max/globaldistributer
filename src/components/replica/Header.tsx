"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/catalogs", label: "Catalogs" },
  { href: "/our-brands", label: "Our Brands" },
  { href: "/discount-retailers", label: "Discount Retailers" },
  { href: "/online-resellers", label: "Online Resellers" },
  { href: "/wholesale-portal", label: "Wholesale Portal" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-white/85 shadow-sm shadow-stone-900/5 backdrop-blur-xl">
      <div
        className="h-[3px] w-full bg-gradient-to-r from-teal-500 via-violet-500 to-cyan-500"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between md:h-[70px]">
          <div className="flex items-center">
            <Link className="flex items-center" href="/">
              <Image
                alt="Global Distributer"
                className="h-9 w-auto sm:h-11"
                height={335}
                src="/logo.png"
                width={900}
                priority
              />
            </Link>
          </div>
          <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
            <Link
              className="group relative rounded-full px-3.5 py-2 text-stone-600 transition-colors hover:text-teal-700"
              href="/"
            >
              Home
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-teal-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link
              className="group relative rounded-full px-3.5 py-2 text-stone-600 transition-colors hover:text-teal-700"
              href="/about"
            >
              About Us
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-teal-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link
              className="group relative rounded-full px-3.5 py-2 text-stone-600 transition-colors hover:text-teal-700"
              href="/catalogs"
            >
              Catalogs
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-teal-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link
              className="group relative rounded-full px-3.5 py-2 text-stone-600 transition-colors hover:text-teal-700"
              href="/our-brands"
            >
              Our Brands
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-teal-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-stone-600 transition-colors hover:text-teal-700"
              >
                Products
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-2xl border border-stone-200/90 bg-white/95 opacity-0 shadow-xl shadow-stone-900/15 ring-1 ring-black/5 backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="p-2">
                  <Link
                    className="block rounded-xl px-4 py-3 text-stone-700 transition-colors hover:bg-teal-50/80 hover:text-teal-800"
                    href="/discount-retailers"
                  >
                    Discount Retailers
                  </Link>
                  <Link
                    className="block rounded-xl px-4 py-3 text-stone-700 transition-colors hover:bg-teal-50/80 hover:text-teal-800"
                    href="/online-resellers"
                  >
                    Online Resellers
                  </Link>
                </div>
              </div>
            </div>
            <Link
              className="ml-1 rounded-full bg-gradient-to-r from-teal-50 to-violet-50 px-4 py-2 font-semibold text-teal-700 ring-1 ring-teal-600/15 transition-all hover:ring-teal-600/30"
              href="/wholesale-portal"
            >
              Wholesale Portal
            </Link>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="glow-teal inline-flex h-9 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:from-teal-400 hover:via-teal-500 hover:to-violet-500"
            >
              Contact Us
            </Link>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-stone-100 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-stone-200/80 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm font-medium">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                className="rounded-xl px-3.5 py-2.5 text-stone-700 transition-colors hover:bg-teal-50/80 hover:text-teal-800"
                href={l.href}
              >
                {l.label}
              </Link>
            ))}
            <Link
              className="mt-2 flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 text-sm font-semibold text-white"
              href="/contact"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
