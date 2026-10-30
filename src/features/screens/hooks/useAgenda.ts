import { useState } from 'react';
import { addMinutes, format, isSameDay, setHours, setMinutes } from 'date-fns';
import { es } from 'date-fns/locale';
import { toast } from 'sonner';
import type { AgendaEvent } from '@/components/ui/week-agenda/week-agenda.types';
import { AGENDA_PEOPLE, buildAppointments, personOf } from '../data/agenda';
import type { AppointmentValues } from '../schemas/appointment.schema';
import type { Appointment } from '../types/agenda.types';

type AgendaPanel = 'none' | 'detail' | 'new';

export function useAgenda() {
	const [date, setDate] = useState(() => new Date());
	const [appointments, setAppointments] = useState(() => buildAppointments(new Date()));
	const [hiddenPeople, setHiddenPeople] = useState<Set<string>>(() => new Set());
	const [panel, setPanel] = useState<AgendaPanel>('none');
	const [selected, setSelected] = useState<Appointment>(appointments[0]);
	const [draftStart, setDraftStart] = useState(() => new Date());

	const visible = appointments.filter(
		(appointment) => !hiddenPeople.has(appointment.personId)
	);

	const openAppointment = (event: AgendaEvent) => {
		const appointment = appointments.find((item) => item.id === event.id);
		if (!appointment) return;
		setSelected(appointment);
		setPanel('detail');
	};

	const openNew = (start: Date) => {
		setDraftStart(start);
		setPanel('new');
	};

	const create = (values: AppointmentValues) => {
		const [hour, minute] = values.time.split(':').map(Number);
		const start = setMinutes(setHours(draftStart, hour), minute);
		const person = personOf(values.personId);

		setAppointments((current) => [
			...current,
			{
				id: `${values.client}-${start.getTime()}`,
				title: values.client,
				subtitle: values.service,
				start,
				end: addMinutes(start, Number(values.duration)),
				hue: person.hue,
				personId: person.id,
			},
		]);
		setPanel('none');
		setDate(start);
		toast.success('Cita agendada', {
			description: `${values.client} · ${format(start, "EEEE d 'a las' HH:mm", { locale: es })}`,
		});
	};

	const cancelSelected = () => {
		setAppointments((current) => current.filter((item) => item.id !== selected.id));
		setPanel('none');
		toast.info('Cita cancelada', { description: selected.title });
	};

	return {
		date,
		setDate,
		people: AGENDA_PEOPLE,
		hiddenPeople,
		togglePerson: (id: string) =>
			setHiddenPeople((current) => {
				const next = new Set(current);
				if (next.has(id)) next.delete(id);
				else next.add(id);
				return next;
			}),
		events: visible,
		dayAppointments: visible
			.filter((appointment) => isSameDay(appointment.start, date))
			.sort((a, b) => a.start.getTime() - b.start.getTime()),
		selected,
		draftStart,
		isDetailOpen: panel === 'detail',
		isNewOpen: panel === 'new',
		closePanel: () => setPanel('none'),
		openAppointment,
		openNew,
		openNewNow: () => openNew(setMinutes(setHours(date, 10), 0)),
		create,
		cancelSelected,
	};
}
