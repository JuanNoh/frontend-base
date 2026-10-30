import type { DateRange } from '@/components/ui/calendar/calendar.types';
import type { PickerFieldBaseProps } from '@/components/ui/picker-field/picker-field.types';

export interface DateRangePickerProps extends PickerFieldBaseProps {
	value?: DateRange;
	onValueChange: (range: DateRange) => void;
}
