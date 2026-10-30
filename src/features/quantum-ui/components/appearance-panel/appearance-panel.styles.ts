import { cva } from 'class-variance-authority';

export const panelStyles = cva('flex flex-col gap-4');

export const panelRowStyles = cva('grid items-center gap-2 sm:grid-cols-[6.5rem_1fr]');

export const panelLabelStyles = cva('text-ink-muted text-xs font-semibold');

export const panelSwatchesStyles = cva('flex flex-wrap items-center gap-2.5');

export const panelCustomSwatchStyles = cva(
	'border-surface focus-visible:ring-primary/30 size-8 cursor-pointer rounded-full border-2 shadow-[0_0_0_1px_var(--hairline-strong)] transition-shadow outline-none focus-visible:ring-3 aria-pressed:shadow-[0_0_0_2px_var(--card),0_0_0_4px_var(--swatch)]',
	{
		variants: {
			filled: {
				true: 'bg-(--swatch)',
				false: 'bg-[conic-gradient(oklch(70%_0.13_0),oklch(70%_0.13_60),oklch(70%_0.13_120),oklch(70%_0.13_180),oklch(70%_0.13_240),oklch(70%_0.13_300),oklch(70%_0.13_360))]',
			},
		},
		defaultVariants: { filled: false },
	}
);

export const panelSwatchStyles = cva(
	'border-surface focus-visible:ring-primary/30 size-8 cursor-pointer rounded-full border-2 bg-(--swatch) shadow-[0_0_0_1px_var(--hairline-strong)] transition-shadow outline-none focus-visible:ring-3 aria-pressed:shadow-[0_0_0_2px_var(--card),0_0_0_4px_var(--swatch)]'
);

export const panelCodeStyles = cva('text-ink-muted font-mono text-xs');

export const panelSliderStyles = cva('flex max-w-72 items-center gap-3');
