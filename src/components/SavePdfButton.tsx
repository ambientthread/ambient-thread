"use client";

// Opens the browser's print dialog, where visitors can choose "Save as PDF".
export function SavePdfButton({ title }: { title: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-block rounded-full border-2 border-gold px-8 py-3 font-bold text-gold-bright transition-colors duration-200 hover:bg-gold hover:text-navy print:hidden"
    >
      Save as PDF<span className="sr-only"> of {title}</span>
    </button>
  );
}
