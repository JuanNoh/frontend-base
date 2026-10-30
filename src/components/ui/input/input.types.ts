import type { ComponentProps, ReactNode } from 'react';

export type InputProps = ComponentProps<'input'> & {
	label?: string;
	hint?: string;
	error?: string;
	leading?: ReactNode;
	trailing?: ReactNode;
	below?: ReactNode;
};

export interface FieldIdsOptions {
	id?: string;
	hint?: string;
	error?: string;
}
