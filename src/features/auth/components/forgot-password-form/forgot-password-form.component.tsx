import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { FieldError } from '@/components/ui/field-error/field-error.component';
import { Input } from '@/components/ui/input/input.component';
import { forgotPasswordFormStyles } from './forgot-password-form.styles';
import type { ForgotPasswordFormProps } from './forgot-password-form.types';

export function ForgotPasswordForm({
	register,
	errors,
	isSubmitting,
	errorMessage,
	onSubmit,
}: ForgotPasswordFormProps) {
	return (
		<form onSubmit={onSubmit} className={forgotPasswordFormStyles()} noValidate>
			<Input
				label="Correo electrónico"
				type="email"
				autoComplete="email"
				placeholder="tu@empresa.com"
				leading={<Mail />}
				error={errors.email?.message}
				autoFocus
				{...register('email')}
			/>
			<FieldError error={errorMessage} />
			<Button type="submit" block isSubmitting={isSubmitting}>
				{!isSubmitting && <Send />}
				Mandar enlace
			</Button>
		</form>
	);
}
