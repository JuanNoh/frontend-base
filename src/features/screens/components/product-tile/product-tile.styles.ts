import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const productTileStyles = cva(
	'rounded-card border-line-soft surface-card shadow-card hover:border-primary/40 focus-visible:ring-primary/30 flex cursor-pointer flex-col gap-2.5 border p-3 text-left outline-none transition-[border-color,translate] hover:-translate-y-0.5 focus-visible:ring-2 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-55 motion-reduce:transition-none'
);

export const productTileIconStyles = cva(
	'hue-tile rounded-field grid size-9 place-items-center [&_svg]:size-4.5',
	{ variants: { hue: HUES }, defaultVariants: { hue: 'brand' } }
);

export const productTileNameStyles = cva('min-h-10 text-sm leading-snug font-medium');

export const productTileFootStyles = cva(
	'flex items-center justify-between gap-2 [&_b]:font-mono [&_b]:text-sm [&_b]:font-medium [&_b]:tabular-nums'
);
