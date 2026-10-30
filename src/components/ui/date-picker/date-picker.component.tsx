import { CalendarDays } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar/calendar.component';
import { PickerField } from '@/components/ui/picker-field/picker-field.component';
import type { DatePickerProps } from './date-picker.types';
import { formatDate } from './date-picker.utils';
import { useDatePicker } from './useDatePicker';

export function DatePicker({
	value,
	onValueChange,
	placeholder = 'Elige una fecha',
	...field
}: DatePickerProps) {
	const picker = useDatePicker(onValueChange);

	return (
		<PickerField
			{...field}
			icon={<CalendarDays />}
			value={value && formatDate(value)}
			placeholder={placeholder}
			open={picker.isOpen}
			onOpenChange={picker.setIsOpen}
		>
			<Calendar selected={value} onSelect={picker.select} />
		</PickerField>
	);
}
