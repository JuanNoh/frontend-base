import { useState, type ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { formatMoney } from '@/lib/format';
import {
	fiscalDemoSchema,
	type FiscalDemoValues,
	type Persona,
} from '../schemas/fiscal-demo.schema';

export function useFiscalDemo() {
	const form = useForm<FiscalDemoValues>({
		resolver: zodResolver(fiscalDemoSchema),
		defaultValues: { persona: 'fisica', rfc: '', curp: '', cp: '', clabe: '' },
	});
	const { field: personaField } = useController({
		control: form.control,
		name: 'persona',
	});
	const [freeRfc, setFreeRfc] = useState('');

	const setPersona = (persona: Persona) => {
		personaField.onChange(persona);
		form.setValue('rfc', '');
		form.clearErrors(['rfc', 'curp']);
	};

	const onSubmit = form.handleSubmit((values) =>
		toast.success('Datos fiscales válidos', {
			description: `${values.rfc} · crédito ${formatMoney(values.credito ?? 0)}`,
		})
	);

	return {
		register: form.register,
		errors: form.formState.errors,
		persona: personaField.value,
		setPersona,
		onSubmit,
		freeRfc: {
			value: freeRfc,
			onChange: (event: ChangeEvent<HTMLInputElement>) =>
				setFreeRfc(event.target.value),
		},
		pickSample: setFreeRfc,
	};
}
