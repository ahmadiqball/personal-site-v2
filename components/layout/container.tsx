import type { ReactNode } from 'react';

/* Centered content shell. Bars and section backgrounds stay full-bleed; their
   inner content is wrapped in this to cap width at 1280px with responsive
   gutters — the design system's `.section-inner` pattern. */
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-shell px-6 sm:px-8 ${className}`}>
      { children }
    </div>
  );
}
