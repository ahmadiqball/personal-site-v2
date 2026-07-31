'use client';

/* Triggers the browser print dialog for the CV (a print stylesheet lives in
   globals.css). */
export function ResumePrintButton() {
  return (
    <button
      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-stone-400 transition-colors duration-fast ease-ease hover:text-vellum print:hidden"
      onClick={() => window.print()}
      type="button"
    >
      <svg aria-hidden="true" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="0.8" viewBox="0 0 12 12">
        <rect height="3" width="6" x="3" y="1.5" />
        <rect height="4.5" width="9" x="1.5" y="4.5" />
        <rect fillOpacity="0.15" height="3.5" width="6" x="3" y="7" />
      </svg>
      PRINT · STYLESHEET READY
    </button>
  );
}
