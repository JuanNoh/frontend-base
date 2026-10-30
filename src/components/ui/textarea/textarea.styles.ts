import { cva } from 'class-variance-authority';

export const textareaBoxStyles = cva(
	'rounded-field bg-field shadow-field text-ink hover:bg-field-hover focus-within:bg-surface focus-within:shadow-field-focus w-full px-3 py-2.5 text-sm transition-[background-color,box-shadow] duration-150',
	{
		variants: {
			invalid: {
				true: 'bg-danger-soft shadow-field-invalid hover:bg-danger-soft focus-within:shadow-field-invalid-focus',
			},
		},
	}
);

export const textareaControlStyles = cva(
	'placeholder:text-ink-muted/80 field-sizing-content block max-h-[12lh] min-h-[3lh] w-full resize-none bg-transparent leading-relaxed outline-none'
);
