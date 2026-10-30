import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { useLoginMutation } from './useLoginMutation';
import { loginSchema, type LoginValues } from '../schemas/login.schema';

export function useLoginForm() {
	const navigate = useNavigate();
	const loginMutation = useLoginMutation();

	const form = useForm<LoginValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: '', password: '', remember: false },
	});

	const { field: rememberField } = useController({
		control: form.control,
		name: 'remember',
	});

	const onSubmit = form.handleSubmit((values) =>
		loginMutation.mutate(values, {
			onSuccess: ({ user }) => {
				toast.success(`Bienvenido, ${user.fullName}`);
				navigate({ to: '/ui' });
			},
		})
	);

	return {
		register: form.register,
		errors: form.formState.errors,
		remember: {
			checked: rememberField.value,
			onCheckedChange: (checked: boolean | 'indeterminate') =>
				rememberField.onChange(checked === true),
		},
		isSubmitting: loginMutation.isPending,
		errorMessage: loginMutation.isError
			? 'No se pudo iniciar sesión, inténtalo de nuevo.'
			: undefined,
		onSubmit,
	};
}
