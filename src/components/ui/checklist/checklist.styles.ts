import { cva } from 'class-variance-authority';

export const checklistStyles = cva('flex flex-col gap-2.5 text-sm');

export const checklistItemStyles = cva(
	'flex items-center gap-2.5 [&>svg]:size-4 [&>svg]:shrink-0',
	{
		variants: {
			status: {
				done: '[&>svg]:text-success',
				running: 'text-ink',
				pending: 'text-ink-muted',
			},
		},
	}
);
