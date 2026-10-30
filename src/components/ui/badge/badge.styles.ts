import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
	'rounded-chip inline-flex h-6 items-center gap-1.5 px-2.5 text-xs font-medium whitespace-nowrap',
	{
		variants: {
			tone: {
				neutral: 'bg-surface-sunken text-ink-muted',
				primary: 'bg-primary-soft text-primary-strong',
				success: 'bg-success-soft text-success',
				warning: 'bg-warning-soft text-warning',
				danger: 'bg-danger-soft text-danger',
				info: 'bg-info-soft text-info',
			},
			dot: {
				true: 'before:size-1.5 before:rounded-full before:bg-current',
			},
		},
		defaultVariants: {
			tone: 'neutral',
		},
	}
);
