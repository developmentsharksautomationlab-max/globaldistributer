"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage } from "@/app/(main)/contact/actions";
import { initialContactState } from "@/app/(main)/contact/state";

const fieldClass =
  "w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20";
const labelClass = "mb-1.5 block text-sm font-medium text-stone-700";

function SubmitButton({ sent }: { sent: boolean }) {
  const { pending } = useFormStatus();

  const base =
    "glow-teal inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-all sm:w-auto";
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
          Sending…
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
          Message sent!
        </>
      ) : (
        "Send message"
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    sendContactMessage,
    initialContactState,
  );
  const sent = state.status === "success";

  return (
    <form
      action={formAction}
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
          <label className={labelClass} htmlFor="cf-name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-company">
            Company
          </label>
          <input
            id="cf-company"
            name="company"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Company name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-phone">
            Phone
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-subject">
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          className={fieldClass}
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us a bit about what you need…"
        />
      </div>

      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton sent={sent} />
        <p className="text-xs text-stone-500">
          B2B enquiries only. We reply within 1–2 business days.
        </p>
      </div>
    </form>
  );
}
