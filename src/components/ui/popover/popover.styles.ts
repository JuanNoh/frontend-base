import { cva } from 'class-variance-authority';

export const popoverContentStyles = cva(
	'glass-pop rounded-pop text-ink data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 outline-none',
	{
		variants: {
			padding: {
				sm: 'p-1.5',
				md: 'p-3',
			},
		},
		defaultVariants: { padding: 'md' },
	}
);
