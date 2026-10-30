import { cva } from 'class-variance-authority';

export const accordionStyles = cva('rounded-card border-line-soft border');

export const accordionItemStyles = cva('border-line-soft border-b last:border-b-0');

export const accordionTriggerStyles = cva(
	'hover:bg-ink/4 focus-visible:ring-primary/30 flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-inset [&>svg]:text-ink-muted [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:transition-transform data-[state=open]:[&>svg]:rotate-180 motion-reduce:[&>svg]:transition-none'
);

export const accordionContentStyles = cva(
	'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden motion-reduce:animate-none'
);

export const accordionBodyStyles = cva('text-ink-muted px-4 pb-3.5 text-sm text-pretty');
