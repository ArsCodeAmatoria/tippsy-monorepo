import * as React from 'react';
import { cn } from './utils';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'lead' | 'large' | 'small' | 'muted';
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'p', as, ...props }, ref) => {
    const Component = as || 
      (variant === 'h1' ? 'h1' : 
       variant === 'h2' ? 'h2' : 
       variant === 'h3' ? 'h3' : 
       variant === 'h4' ? 'h4' : 
       variant === 'blockquote' ? 'blockquote' : 'p');

    return (
      <Component
        className={cn(
          variant === 'h1' && 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
          variant === 'h2' && 'scroll-m-20 text-3xl font-semibold tracking-tight',
          variant === 'h3' && 'scroll-m-20 text-2xl font-semibold tracking-tight',
          variant === 'h4' && 'scroll-m-20 text-xl font-semibold tracking-tight',
          variant === 'p' && 'leading-7 [&:not(:first-child)]:mt-6',
          variant === 'blockquote' && 'mt-6 border-l-2 pl-6 italic',
          variant === 'lead' && 'text-xl text-muted-foreground',
          variant === 'large' && 'text-lg font-semibold',
          variant === 'small' && 'text-sm font-medium leading-none',
          variant === 'muted' && 'text-sm text-muted-foreground',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';

export const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="h1"
    ref={ref}
    className={className}
    {...props}
  />
));
H1.displayName = 'H1';

export const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="h2"
    ref={ref}
    className={className}
    {...props}
  />
));
H2.displayName = 'H2';

export const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="h3"
    ref={ref}
    className={className}
    {...props}
  />
));
H3.displayName = 'H3';

export const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="h4"
    ref={ref}
    className={className}
    {...props}
  />
));
H4.displayName = 'H4';

export const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="p"
    ref={ref}
    className={className}
    {...props}
  />
));
P.displayName = 'P';

export const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="blockquote"
    ref={ref}
    className={className}
    {...props}
  />
));
Blockquote.displayName = 'Blockquote';

export const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="lead"
    ref={ref}
    className={className}
    {...props}
  />
));
Lead.displayName = 'Lead';

export const Large = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="large"
    ref={ref}
    className={className}
    {...props}
  />
));
Large.displayName = 'Large';

export const Small = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="small"
    ref={ref}
    className={className}
    {...props}
  />
));
Small.displayName = 'Small';

export const Muted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Typography
    variant="muted"
    ref={ref}
    className={className}
    {...props}
  />
));
Muted.displayName = 'Muted'; 