import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { toast } from 'sonner';
import type { ChecklistItem } from '@/components/ui/checklist/checklist.types';
import {
	PASSWORD_RULES,
	resetPasswordSchema,
	type ResetPasswordValues,
} from '../schemas/password-reset.schema';
import { useResetPasswordMutation } from './useResetPasswordMutation';

export function useResetPasswordForm() {
	const { token } = useSearch({ from: '/restablecer' });
	const navigate = useNavigate();
	const mutation = useResetPasswordMutation();

	const form = useForm<ResetPasswordValues>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: { password: '', confirm: '' },
	});
	const password = useWatch({ control: form.control, name: 'password' });

	const rules: ChecklistItem[] = PASSWORD_RULES.map((rule) => ({
		label: rule.label,
		status: rule.pattern.test(password) ? 'done' : 'pending',
	}));

	const onSubmit = form.handleSubmit((values) =>
		mutation.mutate(
			{ token, password: values.password },
			{
				onSuccess: () => {
					toast.success('Contraseña actualizada', {
						description: 'Ya puedes entrar con tu contraseña nueva.',
					});
					navigate({ to: '/' });
				},
			}
		)
	);

	return {
		hasToken: token.length > 0,
		register: form.register,
		errors: form.formState.errors,
		rules,
		isSubmitting: mutation.isPending,
		isExpired: mutation.isError,
		onSubmit,
	};
}
