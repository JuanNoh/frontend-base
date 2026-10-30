import { AuthBackdrop } from '../auth-backdrop/auth-backdrop.component';
import { AuthBrand } from '../auth-brand/auth-brand.component';
import { BackToLogin } from '../back-to-login/back-to-login.component';
import {
	authShellBodyStyles,
	authShellCardStyles,
	authShellDescriptionStyles,
	authShellHeaderStyles,
	authShellIconStyles,
	authShellStyles,
	authShellTitleStyles,
} from './auth-shell.styles';
import type { AuthShellProps } from './auth-shell.types';

export function AuthShell({ icon: Icon, title, description, children }: AuthShellProps) {
	return (
		<main className={authShellStyles()}>
			<AuthBackdrop />
			<div className={authShellCardStyles()}>
				<AuthBrand />
				<div key={title} className={authShellBodyStyles()}>
					<header className={authShellHeaderStyles()}>
						<span aria-hidden="true" className={authShellIconStyles()}>
							<Icon />
						</span>
						<h1 className={authShellTitleStyles()}>{title}</h1>
						<p className={authShellDescriptionStyles()}>{description}</p>
					</header>
					{children}
				</div>
			</div>
			<BackToLogin />
		</main>
	);
}
