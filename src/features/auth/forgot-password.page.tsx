import { KeyRound, MailCheck } from 'lucide-react';
import { AuthShell } from './components/auth-shell/auth-shell.component';
import { ForgotPasswordForm } from './components/forgot-password-form/forgot-password-form.component';
import { ResetLinkSent } from './components/reset-link-sent/reset-link-sent.component';
import { useForgotPasswordForm } from './hooks/useForgotPasswordForm';

export function ForgotPasswordPage() {
	const flow = useForgotPasswordForm();

	if (flow.sentTo) {
		return (
			<AuthShell
				icon={MailCheck}
				title="Revisa tu correo"
				description={
					<>
						Si <b>{flow.sentTo}</b> tiene una cuenta, te mandamos un enlace
						para crear una contraseña nueva. Vence en 30 minutos.
					</>
				}
			>
				<ResetLinkSent resend={flow.resend} onChangeEmail={flow.changeEmail} />
			</AuthShell>
		);
	}

	return (
		<AuthShell
			icon={KeyRound}
			title="Recupera tu contraseña"
			description="Escribe el correo de tu cuenta y te mandamos un enlace para crear una nueva."
		>
			<ForgotPasswordForm
				register={flow.register}
				errors={flow.errors}
				isSubmitting={flow.isSubmitting}
				errorMessage={flow.errorMessage}
				onSubmit={flow.onSubmit}
			/>
		</AuthShell>
	);
}
