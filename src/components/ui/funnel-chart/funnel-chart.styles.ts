import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const funnelStyles = cva('flex flex-col gap-3.5');

export const funnelRowStyles = cva(
	'grid grid-cols-[24px_minmax(0,1fr)_auto] items-center gap-x-2.5 gap-y-1.5 text-sm',
	{ variants: { hue: HUES } }
);

export const funnelStepStyles = cva(
	'hue-tile grid size-6 place-items-center rounded-[calc(var(--r-field)*0.75)] font-mono text-[11px] font-semibold'
);

export const funnelLabelStyles = cva('truncate [&_b]:font-mono [&_b]:tabular-nums');

export const funnelShareStyles = cva('text-ink-muted font-mono text-xs tabular-nums');

export const funnelTrackStyles = cva(
	'bg-surface-sunken col-span-2 col-start-2 h-1.5 overflow-hidden rounded-full'
);

export const funnelBarStyles = cva(
	'block h-full rounded-full bg-[linear-gradient(90deg,color-mix(in_oklab,var(--c)_60%,var(--card)),var(--c))] transition-[width] duration-900 ease-out motion-reduce:transition-none'
);
