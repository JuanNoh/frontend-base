import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const donutStyles = cva('@container');

export const donutLayoutStyles = cva('flex flex-col items-center gap-4 @md:flex-row');

export const donutFigureStyles = cva('relative size-44 shrink-0');

export const donutSvgStyles = cva('block size-full -rotate-90');

export const donutArcStyles = cva(
	'fill-none stroke-(--c) transition-[stroke-dasharray,stroke-width,opacity] duration-700 ease-out motion-reduce:transition-none',
	{
		variants: {
			hue: HUES,
			state: {
				rest: '[stroke-width:13]',
				active: '[stroke-width:16]',
				dimmed: 'opacity-40 [stroke-width:13]',
			},
		},
		defaultVariants: { hue: 'brand', state: 'rest' },
	}
);

export const donutCenterStyles = cva(
	'pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center'
);

export const donutValueStyles = cva(
	'font-mono text-lg font-semibold tracking-tight tabular-nums'
);

export const donutCaptionStyles = cva('text-ink-muted max-w-24 truncate text-xs');

export const donutLegendStyles = cva('flex w-full min-w-0 flex-col gap-1');

export const donutLegendRowStyles = cva(
	'rounded-field data-[active]:bg-ink/6 flex items-center gap-2 px-2 py-1.5 text-sm transition-colors before:size-2.5 before:shrink-0 before:rounded-[3px] before:bg-(--c)',
	{ variants: { hue: HUES }, defaultVariants: { hue: 'brand' } }
);

export const donutLegendLabelStyles = cva('min-w-0 flex-1 truncate');

export const donutLegendShareStyles = cva(
	'text-ink-muted font-mono text-xs tabular-nums'
);
