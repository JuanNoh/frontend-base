import { cva } from 'class-variance-authority';

export const fieldStyles = cva('flex w-full flex-col gap-1.5');

export const inputBoxStyles = cva(
	'flex h-control w-full items-center gap-2 rounded-field bg-field px-3 text-sm text-ink shadow-field transition-[background-color,box-shadow] duration-150 hover:bg-field-hover focus-within:bg-surface focus-within:shadow-field-focus has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-55',
	{
		variants: {
			invalid: {
				true: 'bg-danger-soft shadow-field-invalid hover:bg-danger-soft focus-within:shadow-field-invalid-focus',
			},
		},
	}
);

export const inputControlStyles = cva(
	'placeholder:text-ink-muted/80 h-full min-w-0 flex-1 bg-transparent outline-none disabled:cursor-not-allowed'
);

export const inputAdornmentStyles = cva(
	'text-ink-muted flex shrink-0 items-center font-mono text-xs [&_svg]:size-4'
);
