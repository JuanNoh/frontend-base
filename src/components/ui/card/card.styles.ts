import { cva } from 'class-variance-authority';

export const cardStyles = cva('rounded-card border-line-soft text-ink border', {
	variants: {
		tone: {
			solid: 'surface-card shadow-card',
			glass: 'border-(--glass-line) bg-glass shadow-card backdrop-blur-[18px] backdrop-saturate-160',
			sunken: 'bg-surface-sunken',
		},
		padding: {
			none: '',
			sm: 'p-4',
			md: 'p-5',
			lg: 'p-6',
		},
		interactive: {
			true: 'hover:shadow-btn cursor-pointer transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5',
		},
	},
	defaultVariants: {
		tone: 'solid',
		padding: 'md',
	},
});
