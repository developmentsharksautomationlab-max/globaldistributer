export function GridCategoryIcon({ small }: { small?: boolean }) {
  return (
    <div
      className={`bg-gradient-to-br from-teal-50 to-violet-50 ${small ? "p-2" : "p-3"} rounded-lg ring-1 ring-slate-200/80 transition-colors group-hover:from-teal-100 group-hover:to-violet-100`}
    >
      <svg
        className={small ? "h-5 w-5 text-teal-600" : "h-6 w-6 text-teal-600"}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
      </svg>
    </div>
  );
}
