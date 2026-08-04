import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  cart: (
    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  ),
  local: (
    <path d="M16 4h-2c0-1.11-.89-2-2-2s-2 .89-2 2H8L6.21 6.21L8 8v8c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V8l1.79-1.79L16 4z" />
  ),
  add: (
    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6h5v2H4v8h5v2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" />
  ),
  store: (
    <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
  ),
  light: (
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
  ),
  target: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" />
  ),
  phone: <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />,
  star: (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
};

export function PillIcon({
  name,
  className,
  size = "md",
}: {
  name: string;
  className?: string;
  size?: "md" | "sm";
}) {
  const w = size === "md" ? "w-8 h-8" : "w-6 h-6 md:w-7 md:h-7";
  return (
    <svg className={`${w} text-teal-600 ${className ?? ""}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      {paths[name] ?? paths.cart}
    </svg>
  );
}
