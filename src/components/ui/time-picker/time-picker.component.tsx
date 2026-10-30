import { Clock } from 'lucide-react';
import { PickerField } from '@/components/ui/picker-field/picker-field.component';
import {
	timeColumnStyles,
	timeOptionStyles,
	timePanelStyles,
} from './time-picker.styles';
import type { TimePickerProps } from './time-picker.types';
import { HOURS, minuteOptions } from './time-picker.utils';
import { useTimePicker } from './useTimePicker';

export function TimePicker({
	value,
	onValueChange,
	step = 15,
	placeholder = 'Elige una hora',
	...field
}: TimePickerProps) {
	const { revealSelected, ...picker } = useTimePicker(value, onValueChange);

	return (
		<PickerField
			{...field}
			icon={<Clock />}
			value={value}
			placeholder={placeholder}
			open={picker.isOpen}
			onOpenChange={picker.setIsOpen}
		>
			<div className={timePanelStyles()}>
				<div role="group" aria-label="Horas" className={timeColumnStyles()}>
					{HOURS.map((hour) => (
						<button
							key={hour}
							type="button"
							ref={hour === picker.hour ? revealSelected : undefined}
							aria-pressed={hour === picker.hour}
							onClick={() => picker.selectHour(hour)}
							className={timeOptionStyles()}
						>
							{hour}
						</button>
					))}
				</div>
				<div role="group" aria-label="Minutos" className={timeColumnStyles()}>
					{minuteOptions(step).map((minute) => (
						<button
							key={minute}
							type="button"
							ref={minute === picker.minute ? revealSelected : undefined}
							aria-pressed={minute === picker.minute}
							onClick={() => picker.selectMinute(minute)}
							className={timeOptionStyles()}
						>
							{minute}
						</button>
					))}
				</div>
			</div>
		</PickerField>
	);
}
