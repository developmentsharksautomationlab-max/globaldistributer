"use client";

import { useRef, useState, type FormEvent } from "react";
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
  "w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20";
const labelClass = "mb-1.5 block text-sm font-medium text-stone-700";

function Required() {
  return <span className="text-red-500">*</span>;
}

export function WholesaleSignupForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitted = useRef(false);
  const router = useRouter();

  function handleFrameLoad() {
    // Ignore the iframe's initial blank load; only react to our submission.
    if (!submitted.current) return;
    submitted.current = false;
    router.push(THANK_YOU_PATH);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const license = form.elements.namedItem("drivers_license") as HTMLInputElement;
    const file = license.files?.[0];

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
        className="space-y-6 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm md:p-6"
      >
        {error ? (
          <p
            role="alert"
            className="cf-rise rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {error}
          </p>
        ) : null}

        <fieldset className="space-y-4">
          <legend className="mb-3 text-base font-semibold text-stone-900">
            Required Information
          </legend>

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
                placeholder="Your full name"
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
                placeholder="Your LLC or company name"
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
          </div>

          <div>
            <label className={labelClass} htmlFor="ws-license">
              Driver&apos;s License <Required />
            </label>
            <input
              id="ws-license"
              name="drivers_license"
              type="file"
              required
              accept="image/*,application/pdf"
              className={`${fieldClass} file:mr-3 file:rounded-full file:border-0 file:bg-teal-50 file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-teal-700 hover:file:bg-teal-100`}
            />
            <p className="mt-1.5 text-xs text-stone-500">
              Upload a clear photo or scan for verification (image or PDF, max {MAX_FILE_MB} MB).
            </p>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="mb-3 text-base font-semibold text-stone-900">
            Optional Information
          </legend>
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
                placeholder="Optional"
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
                placeholder="Optional"
              />
            </div>
          </div>
        </fieldset>

        {/* FormSubmit settings */}
        {/* No value/defaultValue props: these are filled in handleSubmit, and a
            React-managed value would be reset by the re-render before the
            browser submits (an empty _next sends visitors to formsubmit.co). */}
        <input type="hidden" name="_subject" />
        <input type="hidden" name="_next" />
        <input type="hidden" name="_template" defaultValue="table" />
        <input type="hidden" name="_captcha" defaultValue="false" />
        {/* Honeypot — hidden from users, catches bots */}
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />

        <button
          type="submit"
          disabled={pending}
          aria-live="polite"
          className="glow-teal inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:from-teal-400 hover:via-teal-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {pending ? (
            <>
              <span
                aria-hidden
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              />
              Submitting…
            </>
          ) : (
            "Create wholesale account"
          )}
        </button>
        <p className="text-center text-xs text-stone-500">
          We&apos;ll review your details and get back to you shortly.
        </p>
      </form>
    </>
  );
}
