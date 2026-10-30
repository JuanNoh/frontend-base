import { cva } from 'class-variance-authority';

export const mxIdFieldStyles = cva('[&_input]:font-mono [&_input]:tracking-[0.06em]');

export const mxIdTrailStyles = cva('flex items-center gap-2 tabular-nums');

export const mxIdKindStyles = cva(
	'bg-primary-soft text-primary-strong rounded-chip px-1.5 py-0.5 font-sans text-[11px] font-medium'
);

export const mxIdStatusStyles = cva('', {
	variants: {
		status: {
			valid: 'text-success',
			invalid: 'text-danger',
		},
	},
});

export const mxIdPartsStyles = cva('flex gap-1 px-0.5');

export const mxIdPartStyles = cva('flex min-w-0 basis-0 flex-col gap-1');

export const mxIdTrackStyles = cva('bg-line-soft h-1 overflow-hidden rounded-full');

export const mxIdFillStyles = cva(
	'block h-full rounded-full transition-[width,background-color] duration-200 ease-out motion-reduce:transition-none',
	{
		variants: {
			state: {
				idle: 'bg-primary',
				current: 'bg-primary',
				done: 'bg-primary',
				valid: 'bg-success',
				invalid: 'bg-danger',
			},
		},
	}
);

export const mxIdPartLabelStyles = cva(
	'truncate text-[10.5px] leading-none transition-colors duration-200 motion-reduce:transition-none',
	{
		variants: {
			state: {
				idle: 'text-ink-muted/70',
				current: 'text-ink font-medium',
				done: 'text-ink-muted',
				valid: 'text-success',
				invalid: 'text-danger font-medium',
			},
		},
	}
);
