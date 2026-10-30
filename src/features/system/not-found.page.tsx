import { ArrowLeft, House } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { useNotFound } from './hooks/useNotFound';
import {
	notFoundCodeStyles,
	systemActionsStyles,
	systemPageStyles,
	systemPanelStyles,
	systemPathStyles,
	systemTextStyles,
	systemTitleStyles,
} from './system.styles';

export function NotFoundPage() {
	const { path, goBack, goHome } = useNotFound();

	return (
		<main className={systemPageStyles()}>
			<div className={systemPanelStyles()}>
				<p aria-hidden="true" className={notFoundCodeStyles()}>
					404
				</p>
				<h1 className={systemTitleStyles()}>Esta página no existe</h1>
				<p className={systemTextStyles()}>
					Puede que el enlace esté mal escrito o que la página se haya movido.
				</p>
				<code className={systemPathStyles()}>{path}</code>
				<div className={systemActionsStyles()}>
					<Button variant="secondary" onClick={goBack}>
						<ArrowLeft />
						Regresar
					</Button>
					<Button onClick={goHome}>
						<House />
						Ir al inicio
					</Button>
				</div>
			</div>
		</main>
	);
}
