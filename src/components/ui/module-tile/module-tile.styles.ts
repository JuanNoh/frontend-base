import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const moduleTileStyles = cva(
	'live-border group/tile rounded-card border-line-soft surface-card shadow-card ease-spring relative isolate flex flex-col gap-3.5 border p-4 text-ink no-underline transition-[translate,box-shadow,border-color] duration-500 outline-none hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--c)_18%,var(--hairline))] hover:shadow-tile focus-visible:-translate-y-0.5 focus-visible:shadow-tile',
	{
		variants: {
			hue: HUES,
		},
		defaultVariants: { hue: 'brand' },
	}
);

export const moduleTileIconStyles = cva(
	'hue-tile ease-spring grid size-11 place-items-center rounded-[calc(var(--r-field)+4px)] transition-[scale,background-color] duration-500 group-hover/tile:scale-106 group-hover/tile:bg-[color-mix(in_oklab,var(--c)_20%,var(--card))] group-focus-visible/tile:scale-106 group-focus-visible/tile:bg-[color-mix(in_oklab,var(--c)_20%,var(--card))] [&_svg]:size-5'
);

export const moduleTileTitleStyles = cva('block text-sm font-semibold');

export const moduleTileDescriptionStyles = cva('text-ink-muted mt-0.5 block text-xs');

export const moduleTileCountStyles = cva(
	'hue-tile rounded-chip absolute top-3.5 right-3.5 grid h-6 min-w-6 place-items-center px-2 font-mono text-xs font-medium'
);

export const moduleTileArrowStyles = cva(
	'text-hue ease-spring absolute right-3.5 bottom-4 size-4 translate-x-[-6px] translate-y-[6px] opacity-0 transition-[opacity,translate] duration-500 group-hover/tile:translate-0 group-hover/tile:opacity-100'
);
