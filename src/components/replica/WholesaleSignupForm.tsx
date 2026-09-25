"use client";

import { useState, type FormEvent } from "react";

// Sign-ups are forwarded to this inbox by FormSubmit (https://formsubmit.co) —
// no account or API key needed. The very first submission sends a one-time
// "Activate form" email to this address that must be clicked.
const SIGNUP_EMAIL = "zynofficiall09@gmail.com";

type SignupState =
  | { status: "idle" | "pending" }
  | { status: "success" | "error"; message: string };

const fieldClass =
  "w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20";
const labelClass = "mb-1.5 block text-sm font-medium text-stone-700";

function Required() {
  return <span className="text-red-500">*</span>;
}

function SubmitButton({ sent, pending }: { sent: boolean; pending: boolean }) {
  const base =
    "glow-teal inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-all";
  const skin = sent
    ? "bg-gradient-to-r from-teal-500 to-teal-600 cursor-default"
    : "bg-gradient-to-r from-teal-500 via-teal-600 to-violet-600 hover:-translate-y-0.5 hover:from-teal-400 hover:via-teal-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

  return (
    <button
      type="submit"
      disabled={pending || sent}
      aria-live="polite"
      className={`${base} ${skin}`}
      style={sent ? { animation: "cf-pop 0.4s cubic-bezier(0.16,1,0.3,1)" } : undefined}
    >
      {pending ? (
        <>
          <span
            aria-hidden
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          />
          Signing up…
        </>
      ) : sent ? (
        <>
          <svg
            aria-hidden
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path className="cf-check-path" d="M20 6 9 17l-5-5" />
          </svg>
          Signed up!
        </>
      ) : (
        "Create wholesale account"
      )}
    </button>
  );
}

export function WholesaleSignupForm() {
  const [state, setState] = useState<SignupState>({ status: "idle" });
  const sent = state.status === "success";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Honeypot: real users never fill a hidden field. Pretend it worked.
    if (String(data._honey || "").trim() !== "") {
      setState({ status: "success", message: "Thanks for signing up! We'll be in touch soon." });
      return;
    }

    setState({ status: "pending" });
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SIGNUP_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New wholesale sign-up: ${data.company} (${data.name})`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || String(json?.success) !== "true") {
        throw new Error(json?.message || `HTTP ${res.status}`);
      }
      setState({ status: "success", message: "Thanks for signing up! We'll be in touch soon." });
    } catch (err) {
      console.error("[signup] Failed to submit sign-up:", err);
      setState({
        status: "error",
        message: "Something went wrong submitting your sign-up. Please try again in a moment.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm md:p-6"
    >
      {state.status === "success" ? (
        <p
          role="status"
          className="cf-rise flex items-start gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-medium text-teal-800"
        >
          <svg
            aria-hidden
            className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path className="cf-check-path" d="M20 6 9 17l-5-5" />
          </svg>
          {state.message}
        </p>
      ) : null}
      {state.status === "error" ? (
        <p
          role="alert"
          className="cf-rise rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ws-name">
            Full name <Required />
          </label>
          <input
            id="ws-name"
            name="name"
            required
            maxLength={200}
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="ws-email">
            Email <Required />
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
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ws-company">
            Company name <Required />
          </label>
          <input
            id="ws-company"
            name="company"
            required
            maxLength={200}
            autoComplete="organization"
            className={fieldClass}
            placeholder="Company name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="ws-phone">
            Phone <Required />
          </label>
          <input
            id="ws-phone"
            name="phone"
            type="tel"
            required
            maxLength={200}
            autoComplete="tel"
            className={fieldClass}
            placeholder="+1 555 000 0000"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ws-business">
            Business type
          </label>
          <select id="ws-business" name="business" className={fieldClass} defaultValue="">
            <option value="">Select business type</option>
            <option>Retailer</option>
            <option>Distributor</option>
            <option>E-commerce</option>
            <option>Marketplace Seller</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="ws-volume">
            Expected monthly volume
          </label>
          <select id="ws-volume" name="volume" className={fieldClass} defaultValue="">
            <option value="">Select volume range</option>
            <option>$1,000 - $5,000</option>
            <option>$5,000 - $15,000</option>
            <option>$15,000 - $50,000</option>
            <option>$50,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="ws-website">
          Website
        </label>
        <input
          id="ws-website"
          name="website"
          maxLength={200}
          autoComplete="url"
          className={fieldClass}
          placeholder="Optional"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="ws-notes">
          Anything else we should know?
        </label>
        <textarea
          id="ws-notes"
          name="notes"
          rows={3}
          maxLength={2000}
          className={`${fieldClass} resize-y`}
          placeholder="Optional"
        />
      </div>

      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <SubmitButton sent={sent} pending={state.status === "pending"} />
      <p className="text-center text-xs text-stone-500">
        We&apos;ll review your details and get back to you shortly.
      </p>
    </form>
  );
}
