/** Public assets on the live DPM / Wholesale Central marketing site. */
export const DPM_ORIGIN = "https://dpmdistribution.us" as const;

export function dpmUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${DPM_ORIGIN}${p}`;
}
