import { AuthBackdrop } from '../auth-backdrop/auth-backdrop.component';
import { AuthBrand } from '../auth-brand/auth-brand.component';
import { LoginPanel } from '../login-panel/login-panel.component';
import { QuantumUiLink } from '../quantum-ui-link/quantum-ui-link.component';
import { authShellCardStyles } from '../auth-shell/auth-shell.styles';
import { glassLoginStyles } from './glass-login.styles';

export function GlassLogin() {
	return (
		<main className={glassLoginStyles()}>
			<AuthBackdrop />
			<div className={authShellCardStyles()}>
				<AuthBrand />
				<LoginPanel
					title="Bienvenido de vuelta"
					description="Entra para retomar donde te quedaste."
				/>
			</div>
			<QuantumUiLink />
		</main>
	);
}
