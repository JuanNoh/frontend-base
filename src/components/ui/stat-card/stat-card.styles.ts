import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const statCardStyles = cva(
	'rounded-card border-line-soft surface-card shadow-card flex flex-col gap-3 border p-4',
	{
		variants: {
			hue: HUES,
		},
		defaultVariants: { hue: 'brand' },
	}
);

export const statCardHeaderStyles = cva('flex items-center gap-2.5');

export const statCardIconStyles = cva(
	'hue-tile grid size-8 shrink-0 place-items-center rounded-field [&_svg]:size-4'
);

export const statCardLabelStyles = cva('text-ink-muted text-xs font-medium');

export const statCardValueStyles = cva(
	'font-mono text-2xl font-semibold tracking-tight tabular-nums'
);

export const statCardFooterStyles = cva('flex items-end justify-between gap-3');

export const statCardSparklineStyles = cva('min-w-0 shrink');

export const statCardDeltaStyles = cva(
	'inline-flex shrink-0 items-center gap-0.5 font-mono text-xs font-semibold whitespace-nowrap [&_svg]:size-3.5',
	{
		variants: {
			trend: {
				up: 'text-success',
				down: 'text-danger',
				flat: 'text-ink-muted',
			},
		},
		defaultVariants: { trend: 'flat' },
	}
);
