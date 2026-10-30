import { cva } from 'class-variance-authority';

export const dropzoneStyles = cva(
	'rounded-field bg-field shadow-field hover:bg-field-hover has-[:focus-visible]:shadow-field-focus flex cursor-pointer items-center gap-3 px-3 py-2.5 transition-[background-color,box-shadow] duration-150',
	{
		variants: {
			dragging: {
				true: 'bg-primary-soft shadow-field-focus hover:bg-primary-soft',
			},
			invalid: {
				true: 'bg-danger-soft shadow-field-invalid hover:bg-danger-soft',
			},
		},
	}
);

export const dropzoneIconStyles = cva(
	'rounded-field bg-ink/5 text-ink-muted grid size-9 shrink-0 place-items-center [&_svg]:size-4.5',
	{
		variants: {
			dragging: { true: 'bg-primary text-on-primary' },
		},
	}
);

export const dropzoneTextStyles = cva(
	'min-w-0 flex-1 [&_b]:block [&_b]:truncate [&_b]:text-sm [&_b]:font-medium [&_small]:text-ink-muted [&_small]:block [&_small]:truncate [&_small]:text-xs'
);

export const fileInputStyles = cva('sr-only');

export const fileListStyles = cva('flex flex-col gap-1.5');

export const fileRowStyles = cva(
	'rounded-field bg-field shadow-field flex items-center gap-3 py-1 pr-1 pl-3 text-sm'
);

export const fileTypeStyles = cva(
	'bg-ink/5 text-ink-muted rounded-chip shrink-0 px-1.5 py-0.5 font-mono text-[10.5px] font-semibold uppercase'
);

export const fileNameStyles = cva('min-w-0 flex-1 truncate');

export const fileSizeStyles = cva('text-ink-muted font-mono text-xs tabular-nums');
