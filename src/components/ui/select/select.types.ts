import type { ComponentProps } from 'react';
import type { Select as SelectPrimitive } from 'radix-ui';

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export type SelectProps = Omit<
	ComponentProps<typeof SelectPrimitive.Root>,
	'children'
> & {
	options: SelectOption[];
	label?: string;
	hint?: string;
	error?: string;
	placeholder?: string;
	id?: string;
	className?: string;
};
