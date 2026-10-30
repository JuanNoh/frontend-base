import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils/cn';
import { LoginForm } from '../login-form/login-form.component';
import { SocialLogin } from '../social-login/social-login.component';
import {
	loginPanelDescriptionStyles,
	loginPanelDividerStyles,
	loginPanelHeaderStyles,
	loginPanelStyles,
	loginPanelTermsStyles,
	loginPanelTitleStyles,
} from './login-panel.styles';
import type { LoginPanelProps } from './login-panel.types';

export function LoginPanel({ title, description, align, className }: LoginPanelProps) {
	return (
		<div className={cn(loginPanelStyles(), className)}>
			<header className={loginPanelHeaderStyles({ align })}>
				<h1 className={loginPanelTitleStyles()}>{title}</h1>
				<p className={loginPanelDescriptionStyles()}>{description}</p>
			</header>
			<SocialLogin />
			<p className={loginPanelDividerStyles()}>o con tu correo</p>
			<LoginForm />
			<p className={loginPanelTermsStyles({ align })}>
				Al continuar aceptas los <Link to="/terminos">Términos del servicio</Link>{' '}
				y el <Link to="/privacidad">Aviso de privacidad</Link>.
			</p>
		</div>
	);
}
