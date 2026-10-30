import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { backToLoginArrowStyles, backToLoginStyles } from './back-to-login.styles';

export function BackToLogin() {
	return (
		<Link to="/" className={backToLoginStyles()}>
			<ArrowLeft className={backToLoginArrowStyles()} />
			Volver a iniciar sesión
		</Link>
	);
}
