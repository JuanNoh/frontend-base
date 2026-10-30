import type { ComponentProps } from 'react';

export type TextareaProps = ComponentProps<'textarea'> & {
	label?: string;
	hint?: string;
	error?: string;
};
