import { useEffect, useState } from 'react';
import { addWeeks, format, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import type { UseWeekAgendaOptions } from './week-agenda.types';
import {
	hourRange,
	placeDayEvents,
	timePosition,
	weekDays,
	weekTitle,
} from './week-agenda.utils';

const MINUTE_MS = 60_000;

export function useWeekAgenda({
	events,
	date,
	onDateChange,
	startHour,
	endHour,
}: UseWeekAgendaOptions) {
	const [now, setNow] = useState(() => new Date());

	useEffect(() => {
		const timer = window.setInterval(() => setNow(new Date()), MINUTE_MS);
		return () => window.clearInterval(timer);
	}, []);

	const days = weekDays(date);
	const nowTop = timePosition(now, startHour, endHour);

	return {
		title: weekTitle(days),
		hours: hourRange(startHour, endHour),
		nowTop: nowTop >= 0 && nowTop <= 100 ? nowTop : null,
		days: days.map((day) => ({
			date: day,
			key: day.toISOString(),
			weekday: format(day, 'EEE', { locale: es }),
			number: format(day, 'd'),
			fullLabel: format(day, "EEEE d 'de' MMMM", { locale: es }),
			isToday: isSameDay(day, now),
			isSelected: isSameDay(day, date),
			events: placeDayEvents(events, day, startHour, endHour),
		})),
		goToday: () => onDateChange(new Date()),
		previousWeek: () => onDateChange(addWeeks(date, -1)),
		nextWeek: () => onDateChange(addWeeks(date, 1)),
	};
}
