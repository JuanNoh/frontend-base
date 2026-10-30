import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const glassStageStyles = cva(
	'rounded-card border-line-soft bg-surface-sunken relative isolate grid min-h-44 place-items-center overflow-hidden border p-4'
);

export const orbStyles = cva('absolute -z-10 rounded-full bg-(--c) blur-[2px]', {
	variants: {
		hue: HUES,
		position: {
			a: 'top-2 left-[14%] size-28',
			b: 'right-[18%] -bottom-2.5 size-22',
			c: 'top-6 right-[10%] size-15',
		},
	},
});

export const glassCardStyles = cva(
	'border-(--edge) bg-glass-thin shadow-glass relative min-w-52 rounded-[calc(var(--r-card)+4px)] border px-4.5 py-3.5 backdrop-blur-[16px] backdrop-saturate-180'
);

export const cardLabelStyles = cva('text-ink-muted text-xs font-medium');

export const cardValueStyles = cva(
	'font-mono text-2xl font-semibold tracking-tight tabular-nums'
);

export const spotlightCardStyles = cva(
	'spotlight rounded-card border-line-soft flex min-h-44 cursor-crosshair flex-col justify-end gap-1 border p-4'
);

export const liveCardStyles = cva(
	'live-border rounded-card border-line-soft surface-card shadow-card flex min-h-44 flex-col justify-between gap-4 border p-4'
);

export const interactiveCardStyles = cva(
	'live-border flex min-h-44 flex-col justify-between gap-3'
);

export const liveStatusStyles = cva(
	'flex items-center gap-3 text-sm [&_b]:block [&_small]:text-ink-muted [&_small]:block [&_small]:text-xs'
);

export const cardsGridStyles = cva('grid gap-4 sm:grid-cols-2 xl:grid-cols-3');

export const sunkenCardStyles = cva('flex min-h-44 flex-col justify-between gap-3');

export const cardBadgeStyles = cva('self-start');

export const spotlightTitleStyles = cva('text-sm font-semibold');

export const spotlightTextStyles = cva('text-ink-muted text-xs');

export const interactiveTextStyles = cva('text-sm');
