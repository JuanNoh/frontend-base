import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const lineChartStyles = cva('flex flex-col gap-3');

export const lineLegendStyles = cva('text-ink-muted flex flex-wrap gap-4 text-xs');

export const lineLegendItemStyles = cva(
	'inline-flex items-center gap-1.5 before:size-2.5 before:rounded-[3px] before:bg-(--c)',
	{ variants: { hue: HUES }, defaultVariants: { hue: 'brand' } }
);

export const lineScrollStyles = cva('overflow-x-auto');

export const lineCanvasStyles = cva('group relative min-w-[420px]');

export const lineSvgStyles = cva('block h-auto w-full');

export const lineGridStyles = cva('stroke-line-soft');

export const lineTextStyles = cva('fill-ink-muted font-mono text-[10.5px]');

export const lineSeriesStyles = cva('', {
	variants: { hue: HUES },
	defaultVariants: { hue: 'brand' },
});

export const lineAreaStyles = cva(
	'fill-[color-mix(in_oklab,var(--c)_14%,transparent)] opacity-0 transition-opacity delay-500 duration-700 group-data-[visible]:opacity-100 motion-reduce:transition-none'
);

export const lineStrokeStyles = cva(
	'fill-none stroke-(--c) opacity-0 [stroke-dasharray:1] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.5] group-data-[visible]:animate-draw group-data-[visible]:opacity-100 motion-reduce:animate-none'
);

export const lineGuideStyles = cva('stroke-line [stroke-dasharray:3_3]');

export const lineDotStyles = cva('fill-surface stroke-(--c) [stroke-width:2.5]');

export const lineHitStyles = cva('fill-transparent');

export const lineTipSwatchStyles = cva('before:bg-(--c)', {
	variants: { hue: HUES },
	defaultVariants: { hue: 'brand' },
});
