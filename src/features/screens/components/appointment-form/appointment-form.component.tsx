import { Button } from '@/components/ui/button/button.component';
import { Input } from '@/components/ui/input/input.component';
import { Select } from '@/components/ui/select/select.component';
import { TimePicker } from '@/components/ui/time-picker/time-picker.component';
import { AGENDA_DURATIONS, AGENDA_PEOPLE, AGENDA_SERVICES } from '../../data/agenda';
import { useAppointmentForm } from '../../hooks/useAppointmentForm';
import {
	appointmentFormActionsStyles,
	appointmentFormStyles,
	appointmentFormWideStyles,
} from './appointment-form.styles';
import type { AppointmentFormProps } from './appointment-form.types';

const PERSON_OPTIONS = AGENDA_PEOPLE.map((person) => ({
	value: person.id,
	label: person.name,
}));

export function AppointmentForm({ start, onCreate, onCancel }: AppointmentFormProps) {
	const form = useAppointmentForm(start, onCreate);

	return (
		<form onSubmit={form.onSubmit} noValidate className={appointmentFormStyles()}>
			<Input
				label="Nombre"
				placeholder="Quién viene"
				autoComplete="off"
				error={form.errors.client?.message}
				className={appointmentFormWideStyles()}
				{...form.register('client')}
			/>
			<Select
				label="Servicio"
				options={AGENDA_SERVICES}
				error={form.errors.service?.message}
				{...form.service}
			/>
			<Select
				label="Atiende"
				options={PERSON_OPTIONS}
				error={form.errors.personId?.message}
				{...form.person}
			/>
			<TimePicker
				label="Hora"
				step={15}
				error={form.errors.time?.message}
				{...form.time}
			/>
			<Select
				label="Duración"
				options={AGENDA_DURATIONS}
				error={form.errors.duration?.message}
				{...form.duration}
			/>
			<div className={appointmentFormActionsStyles()}>
				<Button type="button" variant="secondary" onClick={onCancel}>
					Cancelar
				</Button>
				<Button type="submit">Agendar</Button>
			</div>
		</form>
	);
}
