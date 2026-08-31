import type { Metadata } from "next";
import { PageHero } from "@/components/replica/PageHero";
import { ContactSection } from "@/components/replica/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Global Distributer",
  description:
    "Get in touch with the Global Distributer team about wholesale sourcing, becoming a listed supplier, or questions about our B2B directory.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Questions about wholesale sourcing, becoming a listed supplier, or the directory itself? Send us a message and we'll get back to you."
      />
      <ContactSection
        id="contact-form"
        eyebrow={null}
        title="Send us a message"
        subtitle="Fill in the form below and your message goes straight to our team."
        className="border-t-0"
      />
    </div>
  );
}
