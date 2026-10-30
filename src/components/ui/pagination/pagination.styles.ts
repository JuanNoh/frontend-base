import { cva } from 'class-variance-authority';

export const paginationStyles = cva('flex items-center gap-1');

export const paginationPageStyles = cva(
	'rounded-btn size-control hover:bg-ink/6 focus-visible:ring-primary/30 aria-[current=page]:bg-primary aria-[current=page]:text-on-primary cursor-pointer font-mono text-xs tabular-nums transition-colors outline-none focus-visible:ring-3 aria-[current=page]:font-semibold'
);

export const paginationGapStyles = cva(
	'text-ink-muted size-control grid place-items-center text-xs'
);
