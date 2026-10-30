import type { PickerFieldBaseProps } from '@/components/ui/picker-field/picker-field.types';

export interface TimePickerProps extends PickerFieldBaseProps {
	value?: string;
	onValueChange: (time: string) => void;
	step?: number;
}
