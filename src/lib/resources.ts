// Educational guides shown on /resources. Wording is taken from the foundation's
// own revised PDFs; only formatting and punctuation are adjusted for the web.

export type GuideItem = {
  /** Short bold label shown before the text (for example "Location"). */
  label?: string;
  text: string;
  /** Render as a spoken phrase, in quotation marks. */
  quote?: boolean;
};

export type GuideSection = {
  heading: string;
  /** "list" = tips, "checklist" = tickable checkboxes. */
  kind: "list" | "checklist";
  /** Step number shown in the section badge, as in the PDF. */
  number?: number;
  items: GuideItem[];
};

export type Guide = {
  slug: string;
  title: string;
  /** One-line description for the Resources cards. */
  summary: string;
  /** Short introduction shown under the title. */
  intro: string;
  sections: GuideSection[];
  /** Closing line from the guide. */
  closing?: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "conversations-in-noisy-places",
    title: "Conversations in Noisy Places",
    summary: "A quick, shared checklist for clearer communication in noisy places.",
    intro: "A quick checklist for you and the people you\u2019re speaking with.",
    sections: [
      {
        heading: "Planning the conversation",
        kind: "list",
        number: 1,
        items: [
          { label: "Location", text: "Find a quieter spot when possible." },
          { label: "Timing", text: "Pick a time with less background noise." },
          { label: "Format", text: "Choose a format that works for everyone." },
        ],
      },
      {
        heading: "Set up a better listening environment",
        kind: "list",
        number: 2,
        items: [
          { text: "Face each other in good lighting." },
          { text: "Reduce competing sounds and include text as an option." },
          { text: "Ask one person to speak at a time." },
        ],
      },
      {
        heading: "Phrases you can use",
        kind: "list",
        number: 3,
        items: [
          { text: "Could you say that again?", quote: true },
          { text: "Could we speak one at a time?", quote: true },
          { text: "Could we pause or move somewhere quieter?", quote: true },
        ],
      },
      {
        heading: "Have backup options",
        kind: "list",
        number: 4,
        items: [
          { text: "Can I text you?", quote: true },
          { text: "Use captions or write it down." },
          { text: "Switch environments when needed." },
        ],
      },
      {
        heading: "Conversation prep checklist",
        kind: "checklist",
        items: [
          { text: "Choose the setup together" },
          { text: "Confirm the format" },
          { text: "Plan a backup" },
          { text: "Bring what helps" },
        ],
      },
    ],
    closing: "Ambient Thread Foundation\u2019s goal is connection, not perfect listening.",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
