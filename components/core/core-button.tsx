import type { AnchorHTMLAttributes, ReactNode } from 'react';

/* Link-style action used across the site: a mono, letter-spaced label with an
   optional arrow. 'primary' is gold and 'ghost' is muted stone — both are
   borderless links that brighten to vellum on hover (the base design system has
   no filled buttons). 'outline' is an extension: a hairline-bordered box that
   supports `size` (sm/md/lg) and `shape` (square/rounded); on hover its border
   goes candleflame gold over a faint gold wash, matching the card/plate language. */
type ButtonShape = 'rounded' | 'square';
type ButtonSize = 'lg' | 'md' | 'sm';
type ButtonVariant = 'ghost' | 'outline' | 'primary';

interface CoreButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  arrow?: boolean;
  children: ReactNode;
  href?: string;
  shape?: ButtonShape;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

// Link variants have no box; outline gets padding. Both scale font + gap by size.
const sizes: Record<ButtonSize, { boxed: string; link: string }> = {
  sm: { boxed: 'px-3 py-1.5 text-[10px] gap-1.5', link: 'text-[10px] gap-1' },
  md: { boxed: 'px-4 py-2 text-[11px] gap-2', link: 'text-[11px] gap-1.5' },
  lg: { boxed: 'px-6 py-3 text-[13px] gap-2.5', link: 'text-[13px] gap-2' },
};

const shapes: Record<ButtonShape, string> = {
  rounded: 'rounded-full',
  square: 'rounded-[2px]',
};

const variants: Record<ButtonVariant, string> = {
  primary: 'text-candleflame hover:text-vellum',
  ghost: 'text-stone-600 hover:text-vellum',
  outline: 'border border-gold-line text-candleflame hover:border-candleflame hover:bg-gold-wash hover:text-vellum',
};

export function CoreButton({
  arrow = true,
  children,
  className = '',
  href = '#',
  shape = 'square',
  size = 'md',
  variant = 'primary',
  ...rest
}: CoreButtonProps) {
  const boxed = variant === 'outline';

  return (
    <a
      className={`inline-flex items-center justify-center font-mono tracking-[0.1em] no-underline transition-colors duration-fast ease-ease ${
        boxed ? sizes[size].boxed : sizes[size].link
      } ${variants[variant]} ${boxed ? shapes[shape] : ''} ${className}`}
      href={href}
      {...rest}
    >
      { children }

      { arrow && <span aria-hidden="true">→</span> }
    </a>
  );
}
