import { CalendarRange } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar/calendar.component';
import { PickerField } from '@/components/ui/picker-field/picker-field.component';
import {
	rangePanelStyles,
	rangePresetsStyles,
	rangePresetStyles,
} from './date-range-picker.styles';
import type { DateRangePickerProps } from './date-range-picker.types';
import { formatRange, RANGE_PRESETS } from './date-range-picker.utils';
import { useDateRangePicker } from './useDateRangePicker';

export function DateRangePicker({
	value,
	onValueChange,
	placeholder = 'Elige un periodo',
	...field
}: DateRangePickerProps) {
	const picker = useDateRangePicker(onValueChange);

	return (
		<PickerField
			{...field}
			icon={<CalendarRange />}
			value={value && formatRange(value)}
			placeholder={placeholder}
			open={picker.isOpen}
			onOpenChange={picker.setIsOpen}
		>
			<div className={rangePanelStyles()}>
				<div className={rangePresetsStyles()}>
					{RANGE_PRESETS.map((preset) => (
						<button
							key={preset.label}
							type="button"
							onClick={() => picker.choose(preset.range(new Date()))}
							className={rangePresetStyles()}
						>
							{preset.label}
						</button>
					))}
				</div>
				<Calendar
					range={picker.preview(value)}
					onSelect={picker.select}
					onDayHover={picker.setHovered}
				/>
			</div>
		</PickerField>
	);
}
