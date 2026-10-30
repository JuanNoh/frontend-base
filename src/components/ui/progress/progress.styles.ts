import { cva } from 'class-variance-authority';

export const progressStyles = cva(
	'bg-surface-sunken h-2 w-full overflow-hidden rounded-full'
);

export const progressBarStyles = cva('bg-primary block h-full rounded-full', {
	variants: {
		indeterminate: {
			true: 'animate-indeterminate w-1/3',
			false: 'transition-[width] duration-500',
		},
	},
	defaultVariants: { indeterminate: false },
});
