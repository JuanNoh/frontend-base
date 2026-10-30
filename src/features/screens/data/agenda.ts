import { addDays, addMinutes, setHours, startOfWeek } from 'date-fns';
import type { AgendaPerson, Appointment } from '../types/agenda.types';

export const AGENDA_PEOPLE: AgendaPerson[] = [
	{ id: 'ana', name: 'Ana Cetina', hue: 'blue' },
	{ id: 'luis', name: 'Luis Canul', hue: 'green' },
	{ id: 'mariana', name: 'Mariana Poot', hue: 'violet' },
];

export const AGENDA_SERVICES = [
	{ value: 'Primera visita', label: 'Primera visita' },
	{ value: 'Seguimiento', label: 'Seguimiento' },
	{ value: 'Revisión', label: 'Revisión' },
	{ value: 'Videollamada', label: 'Videollamada' },
];

export const AGENDA_DURATIONS = [
	{ value: '30', label: '30 minutos' },
	{ value: '45', label: '45 minutos' },
	{ value: '60', label: '1 hora' },
	{ value: '90', label: '1 hora y media' },
];

const SEEDS = [
	{
		day: 0,
		hour: 9,
		minute: 0,
		length: 60,
		title: 'Sofía Pech',
		service: 'Primera visita',
		personId: 'ana',
	},
	{
		day: 0,
		hour: 11,
		minute: 30,
		length: 45,
		title: 'Carlos Uc',
		service: 'Seguimiento',
		personId: 'luis',
	},
	{
		day: 1,
		hour: 10,
		minute: 0,
		length: 30,
		title: 'Lucía Tun',
		service: 'Revisión',
		personId: 'mariana',
	},
	{
		day: 1,
		hour: 10,
		minute: 15,
		length: 60,
		title: 'Diego May',
		service: 'Primera visita',
		personId: 'ana',
	},
	{
		day: 1,
		hour: 16,
		minute: 0,
		length: 45,
		title: 'Elena Chi',
		service: 'Videollamada',
		personId: 'luis',
	},
	{
		day: 2,
		hour: 9,
		minute: 30,
		length: 45,
		title: 'Marcos Ek',
		service: 'Seguimiento',
		personId: 'mariana',
	},
	{
		day: 2,
		hour: 13,
		minute: 0,
		length: 60,
		title: 'Paula Noh',
		service: 'Primera visita',
		personId: 'ana',
	},
	{
		day: 3,
		hour: 12,
		minute: 0,
		length: 30,
		title: 'Hugo Dzul',
		service: 'Revisión',
		personId: 'luis',
	},
	{
		day: 3,
		hour: 17,
		minute: 0,
		length: 60,
		title: 'Valeria Can',
		service: 'Videollamada',
		personId: 'mariana',
	},
	{
		day: 4,
		hour: 9,
		minute: 0,
		length: 90,
		title: 'Iván Puc',
		service: 'Primera visita',
		personId: 'luis',
	},
	{
		day: 4,
		hour: 15,
		minute: 30,
		length: 45,
		title: 'Renata Xool',
		service: 'Seguimiento',
		personId: 'ana',
	},
	{
		day: 5,
		hour: 10,
		minute: 0,
		length: 60,
		title: 'Tomás Balam',
		service: 'Revisión',
		personId: 'mariana',
	},
];

export function personOf(id: string) {
	return AGENDA_PEOPLE.find((person) => person.id === id) ?? AGENDA_PEOPLE[0];
}

export function buildAppointments(today: Date): Appointment[] {
	const monday = startOfWeek(today, { weekStartsOn: 1 });

	return SEEDS.map((seed) => {
		const start = addMinutes(
			setHours(addDays(monday, seed.day), seed.hour),
			seed.minute
		);

		return {
			id: `${seed.day}-${seed.hour}-${seed.personId}`,
			title: seed.title,
			subtitle: seed.service,
			start,
			end: addMinutes(start, seed.length),
			hue: personOf(seed.personId).hue,
			personId: seed.personId,
		};
	});
}
