import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
	forgotPasswordSchema,
	type ForgotPasswordValues,
} from '../schemas/password-reset.schema';
import { useCountdown } from './useCountdown';
import { useForgotPasswordMutation } from './useForgotPasswordMutation';

const RESEND_SECONDS = 60;

export function useForgotPasswordForm() {
	const mutation = useForgotPasswordMutation();
	const countdown = useCountdown();
	const [sentTo, setSentTo] = useState<string | null>(null);

	const form = useForm<ForgotPasswordValues>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: { email: '' },
	});

	const send = (email: string, onSent?: () => void) =>
		mutation.mutate(
			{ email },
			{
				onSuccess: () => {
					setSentTo(email);
					countdown.start(RESEND_SECONDS);
					onSent?.();
				},
			}
		);

	const onSubmit = form.handleSubmit(({ email }) => send(email));

	const resend = () => {
		if (!sentTo) return;
		send(sentTo, () =>
			toast.success('Te mandamos otro enlace', {
				description: 'Puede tardar un par de minutos en llegar.',
			})
		);
	};

	const changeEmail = () => {
		setSentTo(null);
		mutation.reset();
	};

	return {
		register: form.register,
		errors: form.formState.errors,
		isSubmitting: mutation.isPending,
		errorMessage: mutation.isError
			? 'No pudimos mandar el enlace, inténtalo de nuevo.'
			: undefined,
		onSubmit,
		sentTo,
		resend: {
			onClick: resend,
			isSubmitting: mutation.isPending,
			disabled: countdown.isRunning,
			label: countdown.isRunning
				? `Reenviar en ${countdown.clock}`
				: 'Reenviar enlace',
		},
		changeEmail,
	};
}
