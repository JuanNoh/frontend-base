import { cva } from 'class-variance-authority';

export const colorPickerStyles = cva('flex w-72 max-w-full flex-col gap-3');

export const colorHeadStyles = cva('flex items-end gap-2');

export const colorPreviewStyles = cva(
	'rounded-field size-(--control-h) shrink-0 bg-(--swatch) shadow-[inset_0_0_0_1px_var(--hairline-strong)]'
);

export const colorHexStyles = cva(
	'min-w-0 flex-1 [&_input]:font-mono [&_input]:uppercase'
);

export const colorRowsStyles = cva(
	'grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1'
);

export const colorRowLabelStyles = cva('text-ink-muted text-xs');

export const colorShadesStyles = cva('flex overflow-hidden rounded-field');

export const colorShadeStyles = cva('relative h-6 flex-1 bg-(--swatch)', {
	variants: {
		base: {
			true: 'after:absolute after:top-1/2 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white after:shadow-[0_0_0_1px_rgb(0_0_0/0.25)]',
		},
	},
});

export const colorCaptionStyles = cva(
	'text-ink-muted text-xs [&_b]:text-ink [&_b]:font-medium'
);
