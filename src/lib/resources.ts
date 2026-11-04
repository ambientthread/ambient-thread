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
  /** "list" = tips, "checklist" = tickable checkboxes, "text" = paragraphs,
   *  "groups" = side-by-side sub-lists (see `groups`). */
  kind: "list" | "checklist" | "text" | "groups";
  /** Step number shown in the section badge, as in the PDF. */
  number?: number;
  /** Bullet items ("list" / "checklist") or paragraphs ("text"). */
  items: GuideItem[];
  /** Short bullets shown in two columns on wider screens. */
  columns?: 2;
  /** Sub-lists for "groups" sections. */
  groups?: { heading: string; items: GuideItem[] }[];
};

export type Guide = {
  slug: string;
  title: string;
  /** One-line description for the Resources cards. */
  summary: string;
  /** Short introduction shown under the title. */
  intro: string;
  /** Optional second line under the introduction. */
  tagline?: string;
  /** "stack" = one full-width section per row (default: two-column grid). */
  layout?: "stack";
  sections: GuideSection[];
  /** Closing line from the guide. */
  closing?: string;
  /** Optional line under the closing, ending in a link. */
  closingNote?: { text: string; linkText: string; href: string };
};

export const GUIDES: Guide[] = [
  {
    slug: "what-is-sound-accessibility",
    title: "What is Sound Accessibility?",
    summary:
      "An introduction to sound accessibility, common barriers, and practical ways to support more inclusive participation.",
    intro: "A beginner\u2019s guide to more accessible everyday listening and communication.",
    tagline: "A practical starting point for making everyday sound, communication, and participation more welcoming.",
    layout: "stack",
    sections: [
      {
        heading: "What sound accessibility means",
        kind: "text",
        number: 1,
        items: [
          {
            text: "Sound accessibility means offering choices in how people experience sound, receive information, and communicate. Participation with sound accessibility in mind does not depend on hearing or processing sound in a particular way.",
          },
          {
            text: "At Ambient Thread Foundation, we focus on everyday comfort, awareness, communication, and connection for people with different hearing and auditory preferences and needs.",
          },
        ],
      },
      {
        heading: "Common barriers",
        kind: "list",
        number: 2,
        columns: 2,
        items: [
          { text: "Loud or overlapping sounds" },
          { text: "Fast-paced speech" },
          { text: "Unclear announcements" },
          { text: "Unexpected sounds" },
          { text: "Poor acoustics and echoes" },
          { text: "Audio-only instructions" },
          { text: "Pressure to respond before someone is ready" },
          { text: "Sounds without a clear source" },
        ],
      },
      {
        heading: "Small adjustments that help",
        kind: "groups",
        number: 3,
        items: [],
        groups: [
          {
            heading: "Individuals",
            items: [
              { text: "Choose the communication options that work for you." },
              { text: "Ask what to expect before an event or visit." },
              { text: "Request written information, a pause, or a quieter option." },
            ],
          },
          {
            heading: "Friends and peers",
            items: [
              { text: "Ask what helps rather than assuming." },
              { text: "Speak one at a time and allow time to respond." },
              { text: "Offer to repeat, rephrase, or write down key details." },
            ],
          },
          {
            heading: "Workplaces and hosts",
            items: [
              { text: "Share schedules and instructions ahead of time." },
              { text: "Provide captions and written alternatives." },
              { text: "Offer quieter spaces and flexible ways to participate." },
            ],
          },
        ],
      },
      {
        heading: "Questions worth asking",
        kind: "list",
        number: 4,
        items: [
          { text: "Is information available in writing?" },
          { text: "Is there a quiet option?" },
          { text: "Are materials and instructions available ahead of time?" },
          { text: "Can I participate without speaking or listening continuously?" },
          { text: "Who can I contact about accessibility?" },
        ],
      },
      {
        heading: "Our approach: Choice. Clarity. Everyday participation.",
        kind: "text",
        number: 5,
        items: [
          {
            text: "There is no single right way to listen. We\u2019re working toward a world where people have more choice in how they participate\u2014and less pressure to hide or repeatedly explain their needs.",
          },
          { text: "Start with one small change. Notice how participation can change when it becomes easier." },
        ],
      },
    ],
    closing: "One small change to start. Endless possibilities.",
    closingNote: {
      text: "Learn about Ambient Thread\u2019s mission and what we\u2019re building at",
      linkText: "AmbientThread.org",
      href: "/#mission",
    },
  },
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
