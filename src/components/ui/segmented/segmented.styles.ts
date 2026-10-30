import { cva } from 'class-variance-authority';

export const segmentedStyles = cva(
	'rounded-seg bg-seg-track shadow-seg inline-flex w-fit max-w-full gap-0.5 p-[3px]'
);

export const segmentedItemStyles = cva(
	'rounded-btn text-ink-muted hover:text-ink data-[state=on]:text-ink focus-visible:ring-primary/30 relative inline-flex h-[calc(var(--control-h)-6px)] cursor-pointer items-center px-3 text-xs font-medium transition-colors outline-none focus-visible:ring-3 [&_svg]:size-3.5'
);

export const segmentedIndicatorStyles = cva(
	'bg-seg-thumb shadow-thumb rounded-btn absolute inset-0'
);

export const segmentedLabelStyles = cva('relative inline-flex items-center gap-1.5');
