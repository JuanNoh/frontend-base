import type { ReactNode } from 'react';

export interface PickerFieldBaseProps {
	label?: string;
	hint?: string;
	error?: string;
	placeholder?: string;
	id?: string;
	className?: string;
}

export interface PickerFieldProps extends PickerFieldBaseProps {
	icon: ReactNode;
	value?: string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	children: ReactNode;
}
