import type { AnchorHTMLAttributes } from 'react';

type Variant = 'join' | 'trial' | 'outline';
type Size = 'lg' | 'md';

const variants: Record<Variant, string> = {
  // Green is the club's "Join" colour, blue is its "Free trial" colour.
  join: 'border-green bg-green text-on-green hover:bg-green/15 hover:text-fg',
  trial: 'border-blue bg-blue text-on-blue hover:bg-blue/15 hover:text-fg',
  outline: 'border-blue bg-transparent text-fg hover:bg-blue/20',
};

const sizes: Record<Size, string> = {
  lg: 'h-[68px] px-11 text-[22px] max-[479px]:h-14 max-[479px]:px-8 max-[479px]:text-xl',
  md: 'h-[54px] px-8 text-xl',
};

export function Button({
  variant = 'join',
  size = 'md',
  className = '',
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size }) {
  return (
    <a
      {...rest}
      className={`inline-flex items-center justify-center whitespace-nowrap border font-medium no-underline transition-colors duration-[400ms] ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
