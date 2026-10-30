import { cva } from 'class-variance-authority';

export const chartTipStyles = cva(
	'glass-pop rounded-pop text-ink animate-in fade-in-0 zoom-in-95 pointer-events-none absolute top-1 z-10 flex w-36 -translate-x-1/2 flex-col gap-1 p-2.5 text-xs'
);

export const chartTipTitleStyles = cva('font-medium capitalize');

export const chartTipRowStyles = cva(
	'text-ink-muted flex items-center gap-1.5 before:size-2 before:rounded-[3px] [&_b]:text-ink [&_b]:ml-auto [&_b]:font-mono [&_b]:font-medium [&_b]:tabular-nums'
);
