import { BrandShowcase } from '../brand-showcase/brand-showcase.component';
import { LoginPanel } from '../login-panel/login-panel.component';
import { QuantumUiLink } from '../quantum-ui-link/quantum-ui-link.component';
import {
	splitLoginBodyStyles,
	splitLoginFormColumnStyles,
	splitLoginStyles,
} from './split-login.styles';

export function SplitLogin() {
	return (
		<main className={splitLoginStyles()}>
			<BrandShowcase />
			<section className={splitLoginFormColumnStyles()}>
				<div className={splitLoginBodyStyles()}>
					<LoginPanel
						title="Inicia sesión"
						description="Usa tu cuenta de trabajo o tu correo para continuar."
					/>
				</div>
				<QuantumUiLink />
			</section>
		</main>
	);
}
