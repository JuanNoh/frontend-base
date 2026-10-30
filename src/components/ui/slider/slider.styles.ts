import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
	'relative flex h-6 w-full touch-none items-center select-none data-[disabled]:opacity-50'
);

export const sliderTrackStyles = cva('relative grow overflow-hidden rounded-full', {
	variants: {
		gradient: {
			true: 'h-2.5 shadow-[inset_0_0_0_1px_var(--hairline-strong)]',
			false: 'bg-line h-1.5',
		},
	},
	defaultVariants: { gradient: false },
});

export const sliderRangeStyles = cva('bg-primary absolute h-full rounded-full', {
	variants: {
		gradient: {
			true: 'hidden',
		},
	},
});

export const sliderThumbStyles = cva(
	'bg-knob shadow-knob ease-spring focus-visible:ring-primary/30 block h-[22px] w-[34px] cursor-grab rounded-full transition-[scale] duration-300 outline-none focus-visible:ring-3 active:scale-110 active:cursor-grabbing'
);
