import type { Hue } from '@/lib/hues';

export interface AgendaEvent {
	id: string;
	title: string;
	subtitle?: string;
	start: Date;
	end: Date;
	hue?: Hue;
}

export interface PlacedEvent {
	event: AgendaEvent;
	top: number;
	height: number;
	left: number;
	width: number;
	isShort: boolean;
}

export interface WeekAgendaProps {
	events: AgendaEvent[];
	date: Date;
	onDateChange: (date: Date) => void;
	onEventClick?: (event: AgendaEvent) => void;
	onSlotClick?: (start: Date) => void;
	startHour?: number;
	endHour?: number;
	className?: string;
}

export type UseWeekAgendaOptions = Required<
	Pick<WeekAgendaProps, 'events' | 'date' | 'onDateChange' | 'startHour' | 'endHour'>
>;
