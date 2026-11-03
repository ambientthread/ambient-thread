import type { Metadata } from "next";
import { Nav, Footer } from "@/components/SiteChrome";
import { ResourceCards } from "@/components/ResourceCards";
import { SITE_URL } from "@/lib/site";

const TITLE = "Resources | Ambient Thread Foundation";
const DESCRIPTION =
  "Practical guides from the Ambient Thread Foundation on sound accessibility and everyday listening and communication.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/resources` },
  openGraph: { type: "website", url: `${SITE_URL}/resources`, siteName: "Ambient Thread Foundation", title: TITLE, description: DESCRIPTION, locale: "en_US" },
};

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <main className="bg-navy pt-24">
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 lg:pb-28">
          <p className="eyebrow mb-5 text-gold-bright">Resources</p>
          <h1 className="font-display max-w-3xl text-5xl font-semibold text-paper sm:text-6xl">
            Guides for everyday listening.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            Practical guides for everyday listening and communication, to use on your own or share
            with the people around you.
          </p>
          <div className="mt-14">
            <ResourceCards />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
