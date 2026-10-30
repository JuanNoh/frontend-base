import {
	addDays,
	format,
	isAfter,
	isBefore,
	isSameDay,
	isSameMonth,
	isToday,
	startOfMonth,
	startOfWeek,
} from 'date-fns';
import { es } from 'date-fns/locale';
import type { DateRange } from './calendar.types';

export const WEEKDAYS = ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'];

export function buildMonthGrid(month: Date) {
	const start = startOfWeek(startOfMonth(month), { weekStartsOn: 1 });
	return Array.from({ length: 42 }, (_, index) => addDays(start, index));
}

export function monthTitle(month: Date) {
	return format(month, 'MMMM yyyy', { locale: es });
}

export function dayLabel(day: Date) {
	return format(day, "EEEE d 'de' MMMM 'de' yyyy", { locale: es });
}

export function dayState(day: Date, month: Date, selected?: Date, range?: DateRange) {
	const { from, to } = range ?? {};
	const isEdge = [from, to].some((edge) => !!edge && isSameDay(day, edge));

	return {
		outside: !isSameMonth(day, month),
		today: isToday(day),
		selected: isEdge || (!!selected && isSameDay(day, selected)),
		inRange: !isEdge && !!from && !!to && isAfter(day, from) && isBefore(day, to),
	};
}
