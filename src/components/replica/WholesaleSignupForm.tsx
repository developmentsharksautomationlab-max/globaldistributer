"use client";

import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";

// Sign-ups (including the driver's license attachment) are forwarded to this
// inbox by FormSubmit (https://formsubmit.co) — no account or API key needed.
// The very first submission sends a one-time "Activate form" email to this
// address that must be clicked.
const SIGNUP_EMAIL = "zynofficiall09@gmail.com";
const THANK_YOU_PATH = "/wholesale-portal/signup/thank-you";
const MAX_FILE_MB = 5;
// The form posts into this hidden iframe so visitors never leave the site;
// when FormSubmit responds we send them to our own thank-you page.
const FRAME_NAME = "formsubmit-frame";

const fieldClass =
  "w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors placeholder:text-stone-400 hover:border-stone-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15";
const labelClass = "mb-1.5 block text-sm font-medium text-stone-700";

function Required() {
  return (
    <span className="text-red-500" aria-hidden>
      *
    </span>
  );
}

function Section({
  step,
  title,
  hint,
  children,
}: {
  step: number;
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="space-y-4">
      <legend className="mb-4 flex w-full items-center gap-3">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-violet-600 text-xs font-bold text-white shadow-sm">
          {step}
        </span>
        <span className="text-base font-semibold text-stone-900">{title}</span>
        {hint ? (
          <span className="ml-auto rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500">
            {hint}
          </span>
        ) : null}
      </legend>
      {children}
    </fieldset>
  );
}

function formatSize(bytes: number) {
  return bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function WholesaleSignupForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const submitted = useRef(false);
  const router = useRouter();

  function handleFrameLoad() {
    // Ignore the iframe's initial blank load; only react to our submission.
    if (!submitted.current) return;
    submitted.current = false;
    router.push(THANK_YOU_PATH);
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const picked = e.target.files?.[0] ?? null;
    setFile(picked);
    setError(
      picked && picked.size > MAX_FILE_MB * 1024 * 1024
        ? `Driver's license file must be under ${MAX_FILE_MB} MB.`
        : null,
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;

    if (file && file.size > MAX_FILE_MB * 1024 * 1024) {
      e.preventDefault();
      setError(`Driver's license file must be under ${MAX_FILE_MB} MB.`);
      return;
    }

    const field = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement).value.trim();
    (form.elements.namedItem("_subject") as HTMLInputElement).value =
      `New wholesale sign-up: ${field("company")} (${field("name")})`;
    (form.elements.namedItem("_next") as HTMLInputElement).value =
      `${window.location.origin}${THANK_YOU_PATH}`;

    // Let the browser submit the form natively (into the hidden iframe) so
    // the file is attached.
    submitted.current = true;
    setError(null);
    setPending(true);
  }

  return (
    <>
      <iframe
        name={FRAME_NAME}
        title="Form submission"
        onLoad={handleFrameLoad}
        // Sandboxed so nothing loaded here can navigate the visitor's tab away.
        sandbox=""
        className="hidden"
        aria-hidden
      />
      <form
        action={`https://formsubmit.co/${SIGNUP_EMAIL}`}
        method="POST"
        encType="multipart/form-data"
        target={FRAME_NAME}
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-2xl shadow-stone-900/10"
      >
        <div className="border-b border-stone-100 bg-gradient-to-r from-teal-50/80 via-white to-violet-50/60 px-5 py-5 md:px-8">
          <h2 className="font-display text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
            Wholesale account application
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Takes about 2 minutes. Fields marked <Required /> are required.
          </p>
        </div>

        <div className="space-y-8 px-5 py-6 md:px-8 md:py-8">
          {error ? (
            <p
              role="alert"
              className="cf-rise rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
            >
              {error}
            </p>
          ) : null}

          <Section step={1} title="Business & contact details">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="ws-name">
                  Full Name <Required />
                </label>
                <input
                  id="ws-name"
                  name="name"
                  required
                  maxLength={200}
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="ws-phone">
                  Phone Number <Required />
                </label>
                <input
                  id="ws-phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={50}
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="+1 555 000 0000"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="ws-company">
                  LLC/Company Name <Required />
                </label>
                <input
                  id="ws-company"
                  name="company"
                  required
                  maxLength={200}
                  autoComplete="organization"
                  className={fieldClass}
                  placeholder="Acme Trading LLC"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="ws-ein">
                  EIN Number <Required />
                </label>
                <input
                  id="ws-ein"
                  name="ein"
                  required
                  inputMode="numeric"
                  pattern="\d{2}-?\d{7}"
                  title="EIN should be 9 digits, e.g. 12-3456789"
                  maxLength={10}
                  className={fieldClass}
                  placeholder="12-3456789"
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="ws-email">
                Active Email Address <Required />
              </label>
              <input
                id="ws-email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                className={fieldClass}
                placeholder="you@company.com"
              />
              <p className="mt-1.5 text-xs text-stone-500">
                We&apos;ll send your account updates here.
              </p>
            </div>
          </Section>

          <Section step={2} title="Identity verification">
            <div>
              <span className={labelClass} id="ws-license-label">
                Driver&apos;s License <Required />
              </span>
              <div
                className={`relative flex items-center gap-4 rounded-2xl border-2 border-dashed px-4 py-5 transition-colors focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/15 ${
                  file
                    ? "border-teal-300 bg-teal-50/60"
                    : "border-stone-300 bg-stone-50/60 hover:border-teal-400 hover:bg-teal-50/40"
                }`}
              >
                {/* Transparent input over the whole box: click or drop a file anywhere. */}
                <input
                  id="ws-license"
                  name="drivers_license"
                  type="file"
                  required
                  accept="image/*,application/pdf"
                  aria-labelledby="ws-license-label"
                  aria-describedby="ws-license-help"
                  onChange={handleFileChange}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <span
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ring-1 ring-black/5 ${
                    file ? "bg-teal-600 text-white" : "bg-white text-teal-600"
                  }`}
                  aria-hidden
                >
                  {file ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  )}
                </span>
                <div className="min-w-0 text-sm">
                  {file ? (
                    <>
                      <p className="truncate font-semibold text-stone-900">{file.name}</p>
                      <p className="text-stone-500">
                        {formatSize(file.size)} ·{" "}
                        <span className="font-medium text-teal-700">Click to change</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-stone-900">
                        <span className="text-teal-700">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-stone-500">JPG, PNG or PDF · up to {MAX_FILE_MB} MB</p>
                    </>
                  )}
                </div>
              </div>
              <p id="ws-license-help" className="mt-1.5 text-xs text-stone-500">
                Upload a clear photo or scan for verification. All four corners should be visible.
              </p>
            </div>
          </Section>

          <Section step={3} title="Additional information" hint="Optional">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="ws-agency">
                  Agency You Are Working With
                </label>
                <input
                  id="ws-agency"
                  name="agency"
                  maxLength={200}
                  className={fieldClass}
                  placeholder="Agency name"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="ws-agency-code">
                  Agency Code
                </label>
                <input
                  id="ws-agency-code"
                  name="agency_code"
                  maxLength={100}
                  autoCapitalize="characters"
                  className={fieldClass}
                  placeholder="e.g. AG-1234"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="ws-email2">
                  Secondary Email Address
                </label>
                <input
                  id="ws-email2"
                  name="secondary_email"
                  type="email"
                  maxLength={200}
                  className={fieldClass}
                  placeholder="accounts@company.com"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="ws-phone2">
                  Secondary Phone Number
                </label>
                <input
                  id="ws-phone2"
                  name="secondary_phone"
                  type="tel"
                  maxLength={50}
                  className={fieldClass}
                  placeholder="+1 555 000 0000"
                />
              </div>
            </div>
          </Section>
        </div>

        {/* FormSubmit settings */}
        <input type="hidden" name="_template" defaultValue="table" />
        <input type="hidden" name="_captcha" defaultValue="false" />
        {/* No value/defaultValue props: these are filled in handleSubmit, and a
            React-managed value would be reset by the re-render before the
            browser submits (an empty _next sends visitors to formsubmit.co). */}
        <input type="hidden" name="_subject" />
        <input type="hidden" name="_next" />
        {/* Honeypot — hidden from users, catches bots */}
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />

        <div className="space-y-4 border-t border-stone-100 bg-stone-50/70 px-5 py-6 md:px-8">
          <button
            type="submit"
            disabled={pending}
            aria-live="polite"
            className="glow-teal inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:from-teal-400 hover:via-teal-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {pending ? (
              <>
                <span
                  aria-hidden
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                />
                Submitting your application…
              </>
            ) : (
              <>
                Submit application
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </button>
          <p className="flex items-start justify-center gap-2 text-center text-xs text-stone-500">
            <svg className="mt-px h-4 w-4 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            Your information is kept confidential and used only to verify your business.
          </p>
        </div>
      </form>
    </>
  );
}
