import { ContactForm } from "./ContactForm";

const CONTACT_EMAIL = "info@globaldistributer.com";

export function ContactSection({
  id = "contact",
  eyebrow = "Contact",
  title = "Get in touch",
  subtitle = "Wholesale enquiry, supplier partnership, or a question about the directory — send us a message and our team will get back to you.",
  className = "",
}: {
  id?: string;
  eyebrow?: string | null;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-stone-200/80 bg-gradient-to-br from-teal-50/60 via-stone-50 to-white ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            {eyebrow ? (
              <span className="inline-flex rounded-full border border-teal-200/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-800 shadow-sm backdrop-blur-sm">
                {eyebrow}
              </span>
            ) : null}
            <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-stone-900 md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-stone-600">{subtitle}</p>

            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 ring-1 ring-black/5">
                  <svg
                    className="h-5 w-5 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">Email us</dt>
                  <dd className="text-sm">
                    <a
                      className="text-teal-700 transition-colors hover:text-teal-800 hover:underline"
                      href={`mailto:${CONTACT_EMAIL}`}
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-violet-50 ring-1 ring-black/5">
                  <svg
                    className="h-5 w-5 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">Response time</dt>
                  <dd className="text-sm text-stone-600">Within 1–2 business days</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 to-cyan-50 ring-1 ring-black/5">
                  <svg
                    className="h-5 w-5 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">B2B only</dt>
                  <dd className="text-sm text-stone-600">
                    Wholesale buyers and suppliers. No consumer sales.
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
