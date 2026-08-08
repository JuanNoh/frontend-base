import { cva } from 'class-variance-authority';

export const spinnerStyles = cva(
	'inline-block animate-spin rounded-full border-2 border-t-transparent',
	{
		variants: {
			size: {
				sm: 'size-4',
				md: 'size-6',
				lg: 'size-8',
			},
			tone: {
				primary: 'border-primary',
				white: 'border-white',
				muted: 'border-ink-muted',
			},
		},
		defaultVariants: {
			size: 'sm',
			tone: 'primary',
		},
	}
);
