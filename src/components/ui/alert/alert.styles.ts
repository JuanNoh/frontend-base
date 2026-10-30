import { cva } from 'class-variance-authority';

export const alertStyles = cva(
	'rounded-card flex gap-3 border p-3.5 text-sm [&>svg]:mt-0.5 [&>svg]:size-4 [&>svg]:shrink-0',
	{
		variants: {
			tone: {
				info: 'border-info/25 bg-info-soft [&>svg]:text-info',
				success: 'border-success/25 bg-success-soft [&>svg]:text-success',
				warning: 'border-warning/25 bg-warning-soft [&>svg]:text-warning',
				danger: 'border-danger/25 bg-danger-soft [&>svg]:text-danger',
			},
		},
		defaultVariants: { tone: 'info' },
	}
);

export const alertTitleStyles = cva('font-semibold');

export const alertDescriptionStyles = cva('text-ink-muted mt-0.5 text-[13px]');
