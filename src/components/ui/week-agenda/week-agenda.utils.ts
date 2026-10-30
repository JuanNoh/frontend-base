import {
	addDays,
	differenceInMinutes,
	format,
	isSameDay,
	setHours,
	startOfDay,
	startOfWeek,
} from 'date-fns';
import { es } from 'date-fns/locale';
import type { AgendaEvent, PlacedEvent } from './week-agenda.types';

const MINUTES_PER_HOUR = 60;
const DAYS_PER_WEEK = 7;
const SHORT_EVENT_MINUTES = 30;

export function weekDays(date: Date) {
	const first = startOfWeek(date, { weekStartsOn: 1 });
	return Array.from({ length: DAYS_PER_WEEK }, (_, index) => addDays(first, index));
}

export function hourRange(startHour: number, endHour: number) {
	return Array.from({ length: endHour - startHour }, (_, index) => startHour + index);
}

export function hourLabel(hour: number) {
	return `${String(hour).padStart(2, '0')}:00`;
}

export function slotStart(day: Date, hour: number) {
	return setHours(startOfDay(day), hour);
}

export function weekTitle(days: Date[]) {
	const first = days[0];
	const last = days[days.length - 1];
	const sameMonth = first.getMonth() === last.getMonth();

	return sameMonth
		? `${format(first, 'd')} al ${format(last, "d 'de' MMMM yyyy", { locale: es })}`
		: `${format(first, "d 'de' MMM", { locale: es })} al ${format(last, "d 'de' MMM yyyy", { locale: es })}`;
}

export function timePosition(date: Date, startHour: number, endHour: number) {
	const minutes =
		date.getHours() * MINUTES_PER_HOUR +
		date.getMinutes() -
		startHour * MINUTES_PER_HOUR;
	return (minutes / ((endHour - startHour) * MINUTES_PER_HOUR)) * 100;
}

function groupOverlaps(events: AgendaEvent[]) {
	const groups: AgendaEvent[][] = [];
	let groupEnd = 0;

	for (const event of events) {
		if (event.start.getTime() >= groupEnd) groups.push([]);
		groups[groups.length - 1].push(event);
		groupEnd = Math.max(groupEnd, event.end.getTime());
	}

	return groups;
}

function assignLanes(events: AgendaEvent[]) {
	const laneEnds: number[] = [];
	const placed = events.map((event) => {
		const free = laneEnds.findIndex((end) => end <= event.start.getTime());
		const lane = free === -1 ? laneEnds.length : free;
		laneEnds[lane] = event.end.getTime();
		return { event, lane };
	});

	return { placed, lanes: laneEnds.length };
}

export function placeDayEvents(
	events: AgendaEvent[],
	day: Date,
	startHour: number,
	endHour: number
): PlacedEvent[] {
	const sorted = events
		.filter((event) => isSameDay(event.start, day))
		.sort((a, b) => a.start.getTime() - b.start.getTime());

	return groupOverlaps(sorted).flatMap((group) => {
		const { placed, lanes } = assignLanes(group);
		const width = 100 / lanes;

		return placed.map(({ event, lane }) => {
			const top = timePosition(event.start, startHour, endHour);
			return {
				event,
				top,
				height: timePosition(event.end, startHour, endHour) - top,
				left: lane * width,
				width,
				isShort:
					differenceInMinutes(event.end, event.start) <= SHORT_EVENT_MINUTES,
			};
		});
	});
}
