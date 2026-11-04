import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { Nav, Footer } from "@/components/SiteChrome";
import { ResourceCards } from "@/components/ResourceCards";
import { SavePdfButton } from "@/components/SavePdfButton";
import { GUIDES, getGuide, type GuideSection } from "@/lib/resources";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  const title = `${guide.title} | Ambient Thread Foundation`;
  const url = `${SITE_URL}/resources/${guide.slug}`;
  return {
    title,
    description: guide.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, siteName: "Ambient Thread Foundation", title, description: guide.summary, locale: "en_US" },
  };
}

function Section({ section }: { section: GuideSection }) {
  const id = `section-${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  if (section.kind === "checklist") {
    return (
      <section aria-labelledby={id} className="rounded-lg border border-navy/15 bg-paper-dim p-6 sm:p-8 print:break-inside-avoid">
        <h2 id={id} className="font-display text-2xl font-semibold italic text-ink sm:text-3xl">
          {section.heading}
        </h2>
        <ul className="mt-6 space-y-4">
          {section.items.map((item) => (
            <li key={item.text}>
              <label className="flex cursor-pointer items-start gap-4 text-ink">
                <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[#0B132B]" />
                <span>{item.text}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section aria-labelledby={id} className="overflow-hidden rounded-lg border border-navy/15 bg-white/50 print:break-inside-avoid">
      <h2 id={id} className="flex items-center gap-3 bg-navy px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-paper">
        {section.number !== undefined && (
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-base italic text-navy">
            {section.number}
          </span>
        )}
        <span>{section.heading}</span>
      </h2>
      {section.kind === "groups" ? (
        <div className="grid grid-cols-1 gap-6 px-6 py-5 md:grid-cols-3 md:gap-8">
          {section.groups?.map((g) => (
            <div key={g.heading}>
              <h3 className="font-bold text-ink">{g.heading}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft marker:text-gold">
                {g.items.map((item) => (
                  <li key={item.text}>{item.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : section.columns === 2 ? (
        <ul className="list-disc space-y-2 py-5 pl-11 pr-6 text-ink-soft marker:text-gold sm:columns-2 sm:gap-10 [&>li]:break-inside-avoid">
          {section.items.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      ) : section.kind === "text" ? (
        <div className="space-y-4 px-6 py-5 leading-relaxed text-ink-soft">
          {section.items.map((item) => (
            <p key={item.text}>{item.text}</p>
          ))}
        </div>
      ) : (
        <ul className="divide-y divide-navy/10 px-6">
          {section.items.map((item) => (
            <li key={item.text} className="py-4 text-ink">
              {item.label && <span className="block font-bold uppercase tracking-[0.08em] text-ink">{item.label}</span>}
              {item.quote ? <q className="italic">{item.text}</q> : <span className="text-ink-soft">{item.text}</span>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const related = GUIDES.filter((g) => g.slug !== guide.slug);
  // The download button appears only once the guide's PDF has been added at public/downloads/<slug>.pdf
  const pdfHref = `/downloads/${guide.slug}.pdf`;
  const hasPdf = existsSync(join(process.cwd(), "public", "downloads", `${guide.slug}.pdf`));

  return (
    <>
      <div className="print:hidden">
        <Nav />
      </div>
      <main className="bg-navy pt-24 [-webkit-print-color-adjust:exact] [print-color-adjust:exact] print:pt-0">
        <header className="mx-auto max-w-4xl px-5 pb-14 pt-14 sm:px-8">
          <a href="/resources" className="text-sm font-bold text-gold-bright underline underline-offset-4 hover:text-gold print:hidden">
            <span aria-hidden="true">&larr; </span>All resources
          </a>
          <h1 className="font-display mt-8 text-5xl font-semibold text-paper sm:text-6xl">{guide.title}</h1>
          <p className="mt-6 max-w-2xl text-lg italic text-paper/80">{guide.intro}</p>
          {guide.tagline && <p className="mt-3 max-w-2xl text-paper/70">{guide.tagline}</p>}
          <p className="mt-6 text-sm text-paper/55">A guide from the Ambient Thread Foundation</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 print:hidden">
            {hasPdf && (
              <a
                href={pdfHref}
                download
                className="inline-block rounded-full bg-gold px-8 py-3.5 font-bold text-navy transition-colors duration-200 hover:bg-gold-bright"
              >
                Download PDF<span className="sr-only"> of {guide.title}</span>
              </a>
            )}
            <SavePdfButton title={guide.title} />
          </div>
        </header>

        <div className="bg-paper text-ink">
          <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
            <div className={`grid grid-cols-1 gap-6 ${guide.layout === "stack" ? "" : "md:grid-cols-2"}`}>
              {guide.sections.map((s) => (
                <Section key={s.heading} section={s} />
              ))}
            </div>
            {guide.closing && (
              <p className="font-display mt-14 text-center text-2xl italic text-ink sm:text-3xl">{guide.closing}</p>
            )}
            {guide.closingNote && (
              <p className="mt-4 text-center text-ink-soft">
                {guide.closingNote.text}{" "}
                <a href={guide.closingNote.href} className="font-bold text-ink underline underline-offset-4 hover:text-ink-soft">
                  {guide.closingNote.linkText}
                </a>
                .
              </p>
            )}
          </article>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20 print:hidden">
          {related.length > 0 && (
            <section aria-labelledby="related-heading" className="mb-12">
              <h2 id="related-heading" className="eyebrow mb-8 text-gold-bright">
                Related resources
              </h2>
              <ResourceCards guides={related} headingLevel="h3" />
            </section>
          )}
          <a href="/resources" className="font-bold text-gold-bright underline underline-offset-4 hover:text-gold">
            <span aria-hidden="true">&larr; </span>Back to all resources
          </a>
        </div>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
