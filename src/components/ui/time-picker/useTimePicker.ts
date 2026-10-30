import { useState } from 'react';
import { splitTime } from './time-picker.utils';

export function useTimePicker(
	value: string | undefined,
	onValueChange: (time: string) => void
) {
	const [isOpen, setIsOpen] = useState(false);
	const { hour, minute } = splitTime(value);

	return {
		isOpen,
		setIsOpen,
		hour,
		minute,
		selectHour: (next: string) => onValueChange(`${next}:${minute || '00'}`),
		selectMinute: (next: string) => {
			onValueChange(`${hour || '09'}:${next}`);
			setIsOpen(false);
		},
		revealSelected: (node: HTMLButtonElement | null) =>
			node?.scrollIntoView({ block: 'center' }),
	};
}
