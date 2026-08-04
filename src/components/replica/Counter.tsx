"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Animates the numeric portion of a stat string (e.g. "99.9%", "75K", "100+")
 * from 0 up to its parsed value on scroll into view. The displayed text —
 * including the unit/suffix — always matches the original `value` exactly
 * once the animation completes.
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const match = value.match(/^([\d.,]+)(.*)$/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const [display, setDisplay] = useState(numeric === null ? value : `0${suffix}`);

  useGSAP(
    () => {
      if (numeric === null || !ref.current) return;
      const counter = { val: 0 };
      gsap.to(counter, {
        val: numeric,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => setDisplay(`${counter.val.toFixed(decimals)}${suffix}`),
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
