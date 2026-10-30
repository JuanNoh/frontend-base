import { Link } from '@tanstack/react-router';
import { RotateCw } from 'lucide-react';
import { Alert } from '@/components/ui/alert/alert.component';
import { Button } from '@/components/ui/button/button.component';
import {
	resetLinkSentDemoStyles,
	resetLinkSentLinkStyles,
	resetLinkSentResendStyles,
	resetLinkSentStyles,
} from './reset-link-sent.styles';
import type { ResetLinkSentProps } from './reset-link-sent.types';

export function ResetLinkSent({ resend, onChangeEmail }: ResetLinkSentProps) {
	return (
		<div className={resetLinkSentStyles()}>
			<Alert
				title="Modo demo: no se manda ningún correo"
				className={resetLinkSentDemoStyles()}
			>
				Abre el{' '}
				<Link
					to="/restablecer"
					search={{ token: 'demo' }}
					className={resetLinkSentLinkStyles()}
				>
					enlace de prueba
				</Link>{' '}
				o uno{' '}
				<Link
					to="/restablecer"
					search={{ token: 'vencido' }}
					className={resetLinkSentLinkStyles()}
				>
					que ya venció
				</Link>
				.
			</Alert>
			<Button
				variant="secondary"
				block
				onClick={resend.onClick}
				isSubmitting={resend.isSubmitting}
				disabled={resend.disabled}
				className={resetLinkSentResendStyles()}
			>
				{!resend.isSubmitting && <RotateCw />}
				{resend.label}
			</Button>
			<Button variant="ghost" block onClick={onChangeEmail}>
				Usar otro correo
			</Button>
		</div>
	);
}
