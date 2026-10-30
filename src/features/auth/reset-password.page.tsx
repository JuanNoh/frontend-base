import { Link } from '@tanstack/react-router';
import { ShieldCheck, Unlink } from 'lucide-react';
import { buttonStyles } from '@/components/ui/button/button.styles';
import { AuthShell } from './components/auth-shell/auth-shell.component';
import { ResetPasswordForm } from './components/reset-password-form/reset-password-form.component';
import { useResetPasswordForm } from './hooks/useResetPasswordForm';

export function ResetPasswordPage() {
	const reset = useResetPasswordForm();

	if (!reset.hasToken) {
		return (
			<AuthShell
				icon={Unlink}
				title="Este enlace está incompleto"
				description="Le falta el código de seguridad. Ábrelo directo desde tu correo o pide uno nuevo."
			>
				<Link to="/recuperar" className={buttonStyles({ block: true })}>
					Pedir un enlace nuevo
				</Link>
			</AuthShell>
		);
	}

	return (
		<AuthShell
			icon={ShieldCheck}
			title="Crea una contraseña nueva"
			description="Elige una que no uses en otros sitios."
		>
			<ResetPasswordForm
				register={reset.register}
				errors={reset.errors}
				rules={reset.rules}
				isSubmitting={reset.isSubmitting}
				isExpired={reset.isExpired}
				onSubmit={reset.onSubmit}
			/>
		</AuthShell>
	);
}
