import { useState } from 'react';
import { addMonths, startOfMonth, subMonths } from 'date-fns';
import { buildMonthGrid, monthTitle } from './calendar.utils';

export function useCalendar(selected?: Date) {
	const [month, setMonth] = useState(() => startOfMonth(selected ?? new Date()));

	return {
		month,
		days: buildMonthGrid(month),
		title: monthTitle(month),
		previous: () => setMonth((current) => subMonths(current, 1)),
		next: () => setMonth((current) => addMonths(current, 1)),
		goToToday: () => setMonth(startOfMonth(new Date())),
	};
}
