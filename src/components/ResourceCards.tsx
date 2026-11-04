import { GUIDES, type Guide } from "@/lib/resources";

// Guide cards used on the Resources page and the home page Resources section.
// Same raised-navy card as the Partners page.
export function ResourceCards({ guides = GUIDES, headingLevel = "h2" }: { guides?: Guide[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {guides.map((g) => (
        <li key={g.slug} className="flex">
          <article className="flex w-full flex-col rounded-lg bg-navy-raise p-8">
            <Heading className="font-display text-2xl font-semibold text-paper sm:text-3xl">{g.title}</Heading>
            <p className="mt-4 flex-1 leading-relaxed text-paper/80">{g.summary}</p>
            <a
              href={`/resources/${g.slug}`}
              className="mt-6 self-start font-bold text-gold-bright underline underline-offset-4 hover:text-gold"
            >
              Read the guide<span className="sr-only">: {g.title}</span>
            </a>
          </article>
        </li>
      ))}
    </ul>
  );
}
