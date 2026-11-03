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
  /** "list" = tips, "checklist" = tickable checkboxes, "text" = paragraphs. */
  kind: "list" | "checklist" | "text";
  /** Step number shown in the section badge, as in the PDF. */
  number?: number;
  /** Bullet items ("list" / "checklist") or paragraphs ("text"). */
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
    slug: "make-everyday-outings-easier",
    title: "Make Everyday Outings Easier",
    summary: "Practical options for planning visits, choosing spaces, and asking for support in busy environments.",
    intro: "Practical options for restaurants, appointments, gatherings, and other busy places.",
    sections: [
      {
        heading: "Why background noise can make conversation and focus harder",
        kind: "text",
        items: [
          {
            text: "Different places ask different things of us. A little planning\u2014and support from the people around you\u2014can create more options for comfort, communication, and connection. Choose what fits your needs today.",
          },
        ],
      },
      {
        heading: "Before you go checklist",
        kind: "checklist",
        items: [
          { text: "Check whether a quieter time or space is available." },
          { text: "Ask about seating, background music, or written information." },
          { text: "Plan where you could pause, step away, or change locations." },
          { text: "Bring the tools you already find helpful." },
        ],
      },
      {
        heading: "When you arrive",
        kind: "list",
        items: [
          { text: "Look for seating away from competing sounds." },
          { text: "Choose a position that supports your preferred listening side, if relevant." },
          { text: "Let companions know what would make communication easier." },
          { text: "Adjust the plan if the space does not work for you." },
        ],
      },
      {
        heading: "Words you can use",
        kind: "list",
        items: [
          { text: "Is there a quieter place we could sit?", quote: true },
          { text: "Could you face me while we talk?", quote: true },
          { text: "Could you say that another way?", quote: true },
          { text: "Could you write down the important details?", quote: true },
          { text: "I\u2019d like a break. Can we pause here?", quote: true },
        ],
      },
      {
        heading: "If you\u2019re going with someone",
        kind: "list",
        items: [
          { text: "Ask what would help." },
          { text: "Be flexible about seating, timing, and changes of plan." },
          { text: "Offer support without asking the person to explain their needs to everyone." },
        ],
      },
      {
        heading: "If the original plan isn\u2019t working",
        kind: "text",
        items: [
          {
            text: "You can take a break, switch locations, communicate another way, or leave. You do not have to push through to make the outing count.",
          },
          { text: "The goal is more choice\u2014not a perfect outing." },
        ],
      },
    ],
  },
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
