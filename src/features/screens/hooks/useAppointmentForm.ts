import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { AGENDA_DURATIONS, AGENDA_PEOPLE, AGENDA_SERVICES } from '../data/agenda';
import { appointmentSchema, type AppointmentValues } from '../schemas/appointment.schema';

export function useAppointmentForm(
	start: Date,
	onCreate: (values: AppointmentValues) => void
) {
	const form = useForm<AppointmentValues>({
		resolver: zodResolver(appointmentSchema),
		defaultValues: {
			client: '',
			service: AGENDA_SERVICES[0].value,
			personId: AGENDA_PEOPLE[0].id,
			time: format(start, 'HH:mm'),
			duration: AGENDA_DURATIONS[0].value,
		},
	});
	const { control } = form;
	const { field: service } = useController({ control, name: 'service' });
	const { field: person } = useController({ control, name: 'personId' });
	const { field: time } = useController({ control, name: 'time' });
	const { field: duration } = useController({ control, name: 'duration' });

	return {
		register: form.register,
		errors: form.formState.errors,
		service: { value: service.value, onValueChange: service.onChange },
		person: { value: person.value, onValueChange: person.onChange },
		time: { value: time.value, onValueChange: time.onChange },
		duration: { value: duration.value, onValueChange: duration.onChange },
		onSubmit: form.handleSubmit(onCreate),
	};
}
