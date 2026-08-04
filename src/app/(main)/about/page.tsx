import type { Metadata } from "next";
import { PageHero } from "@/components/replica/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Global Distributer",
  description:
    "Since our founding, Global Distributer has been dedicated to connecting retailers with verified suppliers from around the globe.",
};

const values = [
  {
    title: "Trust & Reliability",
    text: "We verify every supplier and ensure all transactions are secure and transparent.",
  },
  {
    title: "Innovation",
    text: "Continuously improving our platform with cutting-edge technology and user-focused features.",
  },
  {
    title: "Customer Success",
    text: "Your success is our success. We are committed to helping every business achieve their goals.",
  },
] as const;

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="About Global Distributer"
        subtitle="Your trusted partner in wholesale sourcing, connecting retailers with quality suppliers worldwide."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Story</h2>
        <p className="mt-4 max-w-3xl text-pretty text-gray-600">
          Since our founding, Global Distributer has been dedicated to revolutionizing the wholesale
          industry by connecting retailers with verified suppliers from around the globe. We
          understand the challenges businesses face in finding reliable, cost-effective sourcing
          solutions.
        </p>
        <p className="mt-4 max-w-3xl text-pretty text-gray-600">
          Our platform serves as a bridge between ambition and achievement, providing the tools,
          resources, and connections necessary for businesses to thrive in today&apos;s competitive
          marketplace.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["15+", "Years Experience"],
            ["10K+", "Verified Suppliers"],
          ].map(([n, t]) => (
            <div key={t} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-teal-600 md:text-4xl">{n}</p>
              <p className="mt-1 font-medium text-gray-800">{t}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To empower businesses worldwide by providing seamless access to quality wholesale
              products and reliable suppliers, fostering growth and success through innovative
              sourcing solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To become the world&apos;s leading wholesale marketplace, where every business finds
              the perfect supplier match and every transaction builds lasting partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Our Core Values
          </h2>
          <p className="mt-2 text-center text-gray-600">The principles that guide everything we do</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Leadership Team
        </h2>
        <p className="mt-2 text-center text-gray-600">Meet the experts driving our vision forward</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Operations", "Technology", "Partnerships"].map((dept) => (
            <div
              key={dept}
              className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-teal-100" />
              <h3 className="mt-4 text-center text-lg font-bold text-gray-900">John Smith</h3>
              <p className="text-center text-sm text-gray-500">Chief Executive Officer · {dept}</p>
              <p className="mt-2 text-center text-sm text-gray-600">
                Leading the company with 15+ years of experience in wholesale and e-commerce.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <p className="text-gray-600">Ready to source with confidence?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
              href="/catalogs"
            >
              Browse Catalogs
            </Link>
            <Link
              className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              href="/"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
