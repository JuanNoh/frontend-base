import type { AgendaEvent } from '@/components/ui/week-agenda/week-agenda.types';
import type { Hue } from '@/lib/hues';

export interface AgendaPerson {
	id: string;
	name: string;
	hue: Hue;
}

export interface Appointment extends AgendaEvent {
	personId: string;
}
