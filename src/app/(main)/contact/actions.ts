"use server";

import type { ContactFormState } from "./state";

// Where contact form submissions are delivered. Change CONTACT_TO_EMAIL in the
// environment to route messages somewhere else without touching code.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@globaldistributer.com";

// The "from" address on delivered emails. Resend's shared sender works for
// testing; use an address on a verified domain in production.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Global Distributer <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real users never fill a hidden field. Pretend it worked.
  if (String(formData.get("company_website") || "").trim() !== "") {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and message.",
    };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      status: "error",
      message: `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`,
    };
  }

  const body = [
    "New contact enquiry from the Global Distributer website.",
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone:   ${phone}` : null,
    subject ? `Subject: ${subject}` : null,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  // No email provider configured yet — log the submission so nothing is lost
  // and let the visitor through. Set RESEND_API_KEY to enable real delivery.
  if (!apiKey) {
    console.warn(
      `[contact] RESEND_API_KEY is not set — submission logged instead of emailed:\n${body}`,
    );
    return {
      status: "success",
      message: "Thanks! Your message has been received — we'll be in touch soon.",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: subject
          ? `Contact form: ${subject}`
          : `New contact form message from ${name}`,
        text: body,
      }),
    });

    if (!res.ok) {
      console.error(
        "[contact] Resend API error:",
        res.status,
        await res.text().catch(() => ""),
      );
      return {
        status: "error",
        message: `Something went wrong sending your message. Please email us directly at ${TO_EMAIL}.`,
      };
    }
  } catch (err) {
    console.error("[contact] Failed to send contact email:", err);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email us directly at ${TO_EMAIL}.`,
    };
  }

  return {
    status: "success",
    message: "Thanks! Your message has been sent — we'll get back to you shortly.",
  };
}
