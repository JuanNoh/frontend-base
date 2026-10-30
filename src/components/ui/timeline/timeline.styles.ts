import { cva } from 'class-variance-authority';

export const timelineStyles = cva('flex flex-col');

export const timelineItemStyles = cva(
	'relative grid grid-cols-[18px_1fr] gap-3 pb-4 text-sm last:pb-0 [&:not(:last-child)]:before:bg-line-soft [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:top-5 [&:not(:last-child)]:before:bottom-0 [&:not(:last-child)]:before:left-2 [&:not(:last-child)]:before:w-0.5'
);

export const timelineDotStyles = cva(
	'border-surface mt-0.5 size-[18px] rounded-full border-4 shadow-[0_0_0_1px_var(--hairline-strong)]',
	{
		variants: {
			tone: {
				done: 'bg-success',
				next: 'bg-warning',
				danger: 'bg-danger',
				pending: 'bg-line',
			},
		},
		defaultVariants: { tone: 'pending' },
	}
);

export const timelineTitleStyles = cva('block font-medium');

export const timelineHintStyles = cva('text-ink-muted block text-xs');
