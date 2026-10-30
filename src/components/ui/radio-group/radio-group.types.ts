import type { ComponentProps } from 'react';
import type { RadioGroup as RadioGroupPrimitive } from 'radix-ui';

export interface RadioCardOption {
	value: string;
	label: string;
	description?: string;
	disabled?: boolean;
}

export type RadioGroupProps = Omit<
	ComponentProps<typeof RadioGroupPrimitive.Root>,
	'children'
> & {
	options: RadioCardOption[];
};
