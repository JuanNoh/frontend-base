import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const entityCardStyles = cva(
	'rounded-card border-line-soft surface-card shadow-card flex flex-col gap-3 border p-4',
	{ variants: { hue: HUES }, defaultVariants: { hue: 'brand' } }
);

export const entityHeadStyles = cva('flex flex-wrap items-start gap-x-3 gap-y-1.5');

export const entityIconStyles = cva(
	'hue-tile rounded-field grid size-10 shrink-0 place-items-center [&_svg]:size-5'
);

export const entityTitleStyles = cva(
	'min-w-0 flex-1 basis-28 [&_b]:block [&_b]:text-sm [&_b]:leading-snug [&_b]:font-semibold [&_b]:text-pretty [&_small]:text-ink-muted [&_small]:block [&_small]:truncate [&_small]:text-xs'
);

export const entityMetaStyles = cva(
	'grid grid-cols-2 gap-x-3 gap-y-1 text-xs [&_dd]:truncate [&_dd]:font-medium [&_dt]:text-ink-muted'
);

export const entityFooterStyles = cva('mt-auto flex items-center justify-between gap-2');

export const entityAmountStyles = cva(
	'font-mono text-base font-semibold tracking-tight tabular-nums'
);
