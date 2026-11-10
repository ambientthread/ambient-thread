import type { Metadata } from "next";
import { Nav, Footer } from "@/components/SiteChrome";
import { ResourceCards } from "@/components/ResourceCards";
import { SITE_URL } from "@/lib/site";

// Confirmation page for form submissions (Google Ad Grants conversion page).
// Kept out of search results and the sitemap so only real submissions land here
// and count as conversions in Google Analytics.
const TITLE = "Thank You | Ambient Thread Foundation";
const DESCRIPTION = "Thank you for reaching out to the Ambient Thread Foundation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/thank-you` },
  robots: { index: false, follow: true },
};

const NEXT_STEPS = [
  "Melissa, our founder, reads every message personally and will reply to the email address you shared.",
  "If you asked about volunteering, partnering, or sharing your story, she will follow up with next steps.",
  "Thought of something else? Email AmbientThread@gmail.com anytime.",
];

const RETURN_LINKS = [
  { href: "/#mission", label: "Our mission" },
  { href: "/#story", label: "Our story" },
  { href: "/#app", label: "The app" },
  { href: "/#involved", label: "Get involved" },
];

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Confirmation */}
        <section className="bg-navy">
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 lg:pb-20">
            <span
              aria-hidden="true"
              className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            </span>
            <p className="eyebrow mb-5 text-gold-bright">Thank you</p>
            <h1 className="font-display max-w-3xl text-5xl font-semibold text-paper sm:text-6xl">
              We received your message.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-paper/80">
              Thank you for reaching out. We are so glad you are here. Every message helps us
              make everyday listening easier, more accessible, and more inclusive for people with
              different hearing and auditory needs.
            </p>
          </div>
        </section>

        {/* What happens next */}
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">What happens next</h2>
            <ul className="mt-8 max-w-3xl space-y-5">
              {NEXT_STEPS.map((step) => (
                <li key={step} className="flex items-start gap-4 text-lg text-ink-soft">
                  <span aria-hidden="true" className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Engagement hub */}
        <section className="bg-navy-deep">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <p className="eyebrow mb-5 text-gold-bright">While you are here</p>
            <h2 className="font-display text-4xl font-semibold text-paper sm:text-5xl">
              Explore our free guides.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-paper/80">
              Practical guides for everyday listening and communication, to use on your own or
              share with the people around you.
            </p>
            <div className="mt-12">
              <ResourceCards headingLevel="h3" />
            </div>

            <div className="mt-12 rounded-lg border border-gold/40 p-8">
              <h3 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                Learn why we started Ambient Thread
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-paper/80">
                Read about our mission, the story behind the foundation, and the accessible audio
                app we are building.
              </p>
              <a
                href="/#mission"
                className="mt-6 inline-flex font-bold text-gold-bright underline underline-offset-4 hover:text-gold"
              >
                Read our mission
              </a>
            </div>
          </div>
        </section>

        {/* Return navigation */}
        <section className="bg-navy">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 className="font-display text-3xl font-semibold text-paper">Keep exploring</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/"
                className="rounded-full bg-gold px-7 py-3.5 font-bold text-navy transition-colors duration-200 hover:bg-gold-bright"
              >
                Back to the homepage
              </a>
              <a
                href="/resources"
                className="rounded-full border border-gold/60 px-7 py-3.5 font-bold text-paper transition-colors duration-200 hover:border-gold-bright hover:text-gold-bright"
              >
                All resources
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {RETURN_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-paper/85 underline underline-offset-4 hover:text-gold-bright">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
