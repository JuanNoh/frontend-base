import {
	endOfMonth,
	endOfYear,
	isAfter,
	startOfMonth,
	startOfYear,
	subDays,
	subMonths,
} from 'date-fns';
import type { DateRange } from '@/components/ui/calendar/calendar.types';
import { formatDate } from '@/components/ui/date-picker/date-picker.utils';

export const RANGE_PRESETS = [
	{
		label: 'Este mes',
		range: (today: Date) => ({ from: startOfMonth(today), to: endOfMonth(today) }),
	},
	{
		label: 'Mes pasado',
		range: (today: Date) => {
			const month = subMonths(today, 1);
			return { from: startOfMonth(month), to: endOfMonth(month) };
		},
	},
	{
		label: 'Últimos 30 días',
		range: (today: Date) => ({ from: subDays(today, 29), to: today }),
	},
	{
		label: 'Este año',
		range: (today: Date) => ({ from: startOfYear(today), to: endOfYear(today) }),
	},
];

export function orderedRange(from: Date, to: Date): DateRange {
	return isAfter(from, to) ? { from: to, to: from } : { from, to };
}

export function formatRange({ from, to }: DateRange) {
	if (!from) return undefined;
	return to ? `${formatDate(from)} – ${formatDate(to)}` : formatDate(from);
}
