"use client";

import { useLayoutEffect, useEffect, useRef, type ReactNode } from "react";

const useIsomorphicLayoutEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Scroll-triggered entrance animation. Content is unaffected — this only
 * animates opacity/transform of the wrapper (or its direct children when
 * `stagger` is set, e.g. for grids of cards).
 *
 * Drives plain CSS transitions on the DOM nodes directly (not GSAP): a
 * GSAP `timeline({paused:true}).from(children, {stagger})` here would
 * reliably fire play() on intersect but the children would stay stuck at
 * opacity:0 — confirmed via instrumentation, not a StrictMode artifact.
 * Manipulating style/transition on the real DOM nodes sidesteps that
 * failure mode entirely and works regardless of what the children are.
 */
export function Reveal({
  children,
  className,
  y = 28,
  stagger = 0,
  delay = 0,
  duration = 0.8,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}) {
  const scope = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;
    const targets = (stagger > 0 ? Array.from(el.children) : [el]) as HTMLElement[];

    targets.forEach((t, i) => {
      const d = delay + i * stagger;
      t.style.opacity = "0";
      t.style.transform = `translateY(${y}px)`;
      t.style.transition = `opacity ${duration}s ${EASE} ${d}s, transform ${duration}s ${EASE} ${d}s`;
    });

    const show = () =>
      targets.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "translateY(0)";
      });
    const hide = () =>
      targets.forEach((t) => {
        t.style.opacity = "0";
        t.style.transform = `translateY(${y}px)`;
      });

    let hasPlayed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          hasPlayed = true;
          if (once) observer.disconnect();
        } else if (!once && hasPlayed) {
          hide();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [y, stagger, delay, duration, once]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
