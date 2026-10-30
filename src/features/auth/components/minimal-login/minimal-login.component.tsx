import { AuthBrand } from '../auth-brand/auth-brand.component';
import { LoginPanel } from '../login-panel/login-panel.component';
import { QuantumUiLink } from '../quantum-ui-link/quantum-ui-link.component';
import { minimalLoginBodyStyles, minimalLoginStyles } from './minimal-login.styles';

export function MinimalLogin() {
	return (
		<main className={minimalLoginStyles()}>
			<div className={minimalLoginBodyStyles()}>
				<AuthBrand size="lg" showName={false} />
				<LoginPanel
					align="center"
					title="Entra a tu cuenta"
					description="Qué gusto verte de nuevo."
				/>
			</div>
			<QuantumUiLink />
		</main>
	);
}
