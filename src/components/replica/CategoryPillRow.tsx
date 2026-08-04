"use client";

import { useRef } from "react";
import { pillDesktop, pillMobile } from "@/data/dpmContent";
import { PillIcon } from "./PillIcon";

function PillItem({
  title,
  iconKey,
  size,
}: {
  title: string;
  iconKey: string;
  size: "lg" | "sm";
}) {
  if (size === "lg") {
    return (
      <div className="flex-shrink-0 text-center">
        <div className="mx-auto mb-3 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-teal-50 to-violet-50 shadow-sm ring-1 ring-slate-200/80 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-900/10 hover:ring-teal-300/60">
          <PillIcon name={iconKey} size="md" />
        </div>
        <h3 className="mb-1 text-sm font-medium text-gray-900">{title}</h3>
        <p className="text-xs text-gray-500">+120k products</p>
      </div>
    );
  }
  return (
    <div className="w-20 flex-shrink-0 text-center">
      <div className="mx-auto mb-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-teal-50 to-violet-50 shadow-sm ring-1 ring-slate-200/80 transition-all hover:ring-teal-300/60 md:h-14 md:w-14">
        <PillIcon name={iconKey} size="sm" />
      </div>
      <h3 className="mb-1 truncate text-xs font-medium text-gray-900">{title}</h3>
      <p className="text-xs text-gray-500">+120k products</p>
    </div>
  );
}

export function CategoryPillRow() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="mb-0 hidden items-center justify-between lg:flex">
        <button
          className="z-10 rounded-full border border-slate-200/80 bg-white p-2 shadow-sm transition-all hover:-translate-x-0.5 hover:border-teal-300 hover:shadow-md"
          type="button"
          aria-label="Previous"
          onClick={() => scroll(-1)}
        >
          <svg className="h-6 w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div ref={trackRef} className="scrollbar-hide mx-8 flex gap-8 overflow-x-auto scroll-smooth">
          {pillDesktop.map((p) => (
            <PillItem key={p.title} title={p.title} iconKey={p.key} size="lg" />
          ))}
        </div>
        <button
          className="z-10 rounded-full border border-slate-200/80 bg-white p-2 shadow-sm transition-all hover:translate-x-0.5 hover:border-teal-300 hover:shadow-md"
          type="button"
          aria-label="Next"
          onClick={() => scroll(1)}
        >
          <svg className="h-6 w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="lg:hidden">
        <div className="scrollbar-hide overflow-x-auto">
          <div className="flex w-max gap-4 px-4 pb-4">
            {pillMobile.map((p) => (
              <PillItem key={p.title} title={p.title} iconKey={p.key} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
