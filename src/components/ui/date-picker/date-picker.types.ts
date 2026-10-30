import type { PickerFieldBaseProps } from '@/components/ui/picker-field/picker-field.types';

export interface DatePickerProps extends PickerFieldBaseProps {
	value?: Date;
	onValueChange: (date: Date) => void;
}
