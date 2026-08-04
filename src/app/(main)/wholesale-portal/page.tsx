import type { Metadata } from "next";
import { PageHero } from "@/components/replica/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale Portal | Global Distributer",
  description:
    "Access exclusive wholesale pricing, manage bulk orders, and grow your business with our comprehensive B2B platform.",
};

const features = [
  { t: "Secure Access", d: "Protected portal with advanced security measures" },
  { t: "Real-time Analytics", d: "Track orders, inventory, and sales performance" },
  { t: "Volume Pricing", d: "Access exclusive wholesale pricing tiers" },
  { t: "24/7 Support", d: "Dedicated support team for wholesale partners" },
] as const;

const benefits = [
  { t: "Bulk Order Management", d: "Streamlined ordering process for large quantities" },
  { t: "Credit Terms Available", d: "Flexible payment options for qualified businesses" },
  { t: "Priority Shipping", d: "Fast-track delivery for wholesale orders" },
  { t: "Dedicated Account Manager", d: "Personal support for your business needs" },
] as const;

const reqs = [
  "Valid business license and tax identification",
  "Commitment to minimum monthly purchase amounts",
  "Trade references and credit history verification",
  "Detailed information about your business model",
] as const;

const faq = [
  {
    q: "How long does the approval process take?",
    a: "Typically 3-5 business days after we receive all required documentation.",
  },
  {
    q: "What are the minimum order requirements?",
    a: "Minimum orders vary by category, generally starting at $500 per order.",
  },
  {
    q: "Do you offer credit terms?",
    a: "Yes, qualified businesses can access NET 30 payment terms after credit approval.",
  },
  {
    q: "Can I access the portal on mobile devices?",
    a: "Absolutely! Our portal is fully responsive and works on all devices.",
  },
] as const;

export default function WholesalePortalPage() {
  return (
    <div>
      <PageHero
        eyebrow="B2B portal"
        title="Wholesale Portal"
        subtitle="Access exclusive wholesale pricing, manage bulk orders, and grow your business with our comprehensive B2B platform."
      />
      <section className="border-b border-gray-100 py-6">
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3 px-4">
          <Link
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white"
            href="#apply"
          >
            Request Access
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-xl font-bold text-gray-900">Portal Features</h2>
          <p className="text-center text-gray-600">Everything you need to manage your wholesale business efficiently</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.t} className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="font-bold text-gray-900">{f.t}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-center text-xl font-bold text-gray-900">Wholesale Benefits</h2>
        <p className="text-center text-gray-600">Unlock exclusive advantages when you join our wholesale program</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900">{b.t}</h3>
              <p className="mt-1 text-sm text-gray-600">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-50/50 py-10" id="apply">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-xl font-bold text-gray-900">Qualification Requirements</h2>
          <p className="mt-1 text-gray-600">
            To ensure quality partnerships, we have specific requirements for wholesale portal access.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
            {["Business Registration", "Minimum Order Volume", "Credit References", "Business Profile"].map(
              (h, i) => (
                <li key={h}>
                  <span className="font-medium text-gray-900">{h}:</span> {reqs[i]}
                </li>
              )
            )}
          </ul>
          <h3 className="mt-8 text-lg font-bold text-gray-900">Apply for Wholesale Access</h3>
          <form className="mt-4 space-y-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <input
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              name="company"
              placeholder="Company Name"
            />
            <input
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              name="contact"
              placeholder="Contact Person"
            />
            <input
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              name="email"
              placeholder="Email Address"
              type="email"
            />
            <input
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              name="phone"
              placeholder="Phone Number"
            />
            <div>
              <label className="text-sm text-gray-700" htmlFor="btype">
                Business Type
              </label>
              <select
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                id="btype"
                name="business"
              >
                <option value="">Select business type</option>
                <option>Retailer</option>
                <option>Distributor</option>
                <option>E-commerce</option>
                <option>Marketplace Seller</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-700" htmlFor="vol">
                Expected Monthly Volume
              </label>
              <select className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm" id="vol" name="vol">
                <option value="">Select volume range</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $15,000</option>
                <option>$15,000 - $50,000</option>
                <option>$50,000+</option>
              </select>
            </div>
            <button
              className="w-full rounded-md bg-teal-600 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
              type="submit"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-10">
        <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="text-sm text-gray-500">Common questions about our wholesale portal</p>
        <dl className="mt-6 space-y-4">
          {faq.map((f) => (
            <div key={f.q}>
              <dt className="font-medium text-gray-900">{f.q}</dt>
              <dd className="mt-1 text-sm text-gray-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
