import { cva } from 'class-variance-authority';

export const otpRowStyles = cva('flex gap-2');

export const otpBoxStyles = cva(
	'rounded-field bg-field shadow-field hover:bg-field-hover focus:bg-surface focus:shadow-field-focus aspect-square w-full max-w-12 min-w-0 text-center font-mono text-lg font-semibold tabular-nums transition-[background-color,box-shadow] duration-150 outline-none disabled:cursor-not-allowed disabled:opacity-55',
	{
		variants: {
			invalid: {
				true: 'bg-danger-soft shadow-field-invalid hover:bg-danger-soft focus:shadow-field-invalid-focus',
			},
		},
	}
);
