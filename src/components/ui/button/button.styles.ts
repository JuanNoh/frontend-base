import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
	'flex w-full cursor-pointer items-center justify-center gap-2 rounded-3xl border-2 font-medium transition-colors disabled:cursor-not-allowed disabled:border-line disabled:bg-line disabled:text-white',
	{
		variants: {
			variant: {
				primary:
					'border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover',
				secondary:
					'border-primary bg-transparent text-primary hover:bg-primary-soft',
			},
			size: {
				md: 'px-2 py-1 text-xs',
				lg: 'px-4 py-2 text-sm',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'lg',
		},
	}
);
