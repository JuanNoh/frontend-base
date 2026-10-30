import { Link } from '@tanstack/react-router';
import { Lock } from 'lucide-react';
import { Alert } from '@/components/ui/alert/alert.component';
import { Button } from '@/components/ui/button/button.component';
import { Checklist } from '@/components/ui/checklist/checklist.component';
import { PasswordInput } from '@/components/ui/password-input/password-input.component';
import {
	resetPasswordFormStyles,
	resetPasswordLinkStyles,
	resetPasswordRulesStyles,
} from './reset-password-form.styles';
import type { ResetPasswordFormProps } from './reset-password-form.types';

export function ResetPasswordForm({
	register,
	errors,
	rules,
	isSubmitting,
	isExpired,
	onSubmit,
}: ResetPasswordFormProps) {
	return (
		<form onSubmit={onSubmit} className={resetPasswordFormStyles()} noValidate>
			{isExpired && (
				<Alert tone="danger" title="El enlace ya venció">
					Por seguridad cada enlace dura 30 minutos.{' '}
					<Link to="/recuperar" className={resetPasswordLinkStyles()}>
						Pide uno nuevo
					</Link>
					.
				</Alert>
			)}
			<PasswordInput
				label="Contraseña nueva"
				autoComplete="new-password"
				placeholder="••••••••"
				leading={<Lock />}
				error={errors.password?.message}
				autoFocus
				{...register('password')}
			/>
			<Checklist items={rules} className={resetPasswordRulesStyles()} />
			<PasswordInput
				label="Confírmala"
				autoComplete="new-password"
				placeholder="••••••••"
				leading={<Lock />}
				error={errors.confirm?.message}
				{...register('confirm')}
			/>
			<Button type="submit" block isSubmitting={isSubmitting}>
				Guardar contraseña
			</Button>
		</form>
	);
}
