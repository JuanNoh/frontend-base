import type { AgendaPerson, Appointment } from '../../types/agenda.types';

export interface AgendaSidebarProps {
	date: Date;
	onDateChange: (date: Date) => void;
	people: AgendaPerson[];
	hiddenPeople: Set<string>;
	onTogglePerson: (id: string) => void;
	dayAppointments: Appointment[];
	onOpenAppointment: (appointment: Appointment) => void;
}
