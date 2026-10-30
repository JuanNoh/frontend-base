import type { ChangeEventHandler, FocusEventHandler, Ref } from 'react';
import type { InputProps } from '@/components/ui/input/input.types';

export interface NumberFormat {
	decimals: number;
	fixed: boolean;
	thousands: boolean;
	negative: boolean;
	min?: number;
	max?: number;
}

export type NumberInputProps = Omit<InputProps, 'type' | 'inputMode'> &
	Partial<Omit<NumberFormat, 'min' | 'max'>>;

export interface UseNumberInputOptions extends NumberFormat {
	ref?: Ref<HTMLInputElement>;
	value?: InputProps['value'];
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}
