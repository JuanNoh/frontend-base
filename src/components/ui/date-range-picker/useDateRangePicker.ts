import { useState } from 'react';
import type { DateRange } from '@/components/ui/calendar/calendar.types';
import { orderedRange } from './date-range-picker.utils';

export function useDateRangePicker(onValueChange: (range: DateRange) => void) {
	const [isOpen, setIsOpen] = useState(false);
	const [anchor, setAnchor] = useState<Date | null>(null);
	const [hovered, setHovered] = useState<Date | undefined>();

	const choose = (range: DateRange) => {
		onValueChange(range);
		setAnchor(null);
		setHovered(undefined);
		setIsOpen(false);
	};

	return {
		isOpen,
		setIsOpen,
		setHovered,
		select: (day: Date) => {
			if (anchor) choose(orderedRange(anchor, day));
			else setAnchor(day);
		},
		choose,
		preview: (value?: DateRange) => {
			if (!anchor) return value;
			return hovered ? orderedRange(anchor, hovered) : { from: anchor };
		},
	};
}
