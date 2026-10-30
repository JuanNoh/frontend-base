import { cva } from 'class-variance-authority';

export const barChartStyles = cva('flex flex-col gap-3');

export const barChartLegendStyles = cva('text-ink-muted flex flex-wrap gap-4 text-xs');

export const barChartLegendItemStyles = cva(
	'inline-flex items-center gap-1.5 before:size-2.5 before:rounded-[3px]',
	{
		variants: {
			tone: {
				primary: 'before:bg-primary',
				muted: 'before:bg-ink/20',
			},
		},
	}
);

export const barChartScrollStyles = cva('overflow-x-auto');

export const barChartCanvasStyles = cva('group relative min-w-[420px]');

export const barChartSvgStyles = cva('block h-auto w-full');

export const barChartGridStyles = cva('stroke-line-soft');

export const barChartTextStyles = cva('fill-ink-muted font-mono text-[10.5px]');

export const barChartGroupStyles = cva('transition-opacity duration-200', {
	variants: {
		dimmed: { true: 'opacity-45' },
	},
});

export const barChartHitStyles = cva('fill-transparent transition-colors', {
	variants: {
		active: { true: 'fill-ink/5' },
	},
});

export const barChartBarStyles = cva(
	'ease-spring origin-bottom scale-y-0 transition-[scale] duration-900 [transform-box:fill-box] group-data-[visible]:scale-y-100 motion-reduce:transition-none',
	{
		variants: {
			tone: {
				primary: 'fill-primary',
				muted: 'fill-ink/20',
			},
		},
	}
);

export const barChartTipSwatchStyles = cva('', {
	variants: {
		tone: {
			primary: 'before:bg-primary',
			muted: 'before:bg-ink/20',
		},
	},
});
