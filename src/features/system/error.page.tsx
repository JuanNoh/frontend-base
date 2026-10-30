import type { ErrorComponentProps } from '@tanstack/react-router';
import { ChevronDown, Copy, House, RotateCw, TriangleAlert } from 'lucide-react';
import { Collapsible } from 'radix-ui';
import { Button } from '@/components/ui/button/button.component';
import { useErrorScreen } from './hooks/useErrorScreen';
import {
	errorCodeStyles,
	errorCopyStyles,
	errorDetailsBodyStyles,
	errorDetailsBoxStyles,
	errorDetailsStyles,
	errorDetailsTextStyles,
	errorDetailsTriggerStyles,
	errorIconStyles,
	systemActionsStyles,
	systemPageStyles,
	systemPanelStyles,
	systemTextStyles,
	systemTitleStyles,
} from './system.styles';

export function ErrorPage(props: ErrorComponentProps) {
	const screen = useErrorScreen(props);

	return (
		<main role="alert" className={systemPageStyles()}>
			<div className={systemPanelStyles()}>
				<span className={errorIconStyles()}>
					<TriangleAlert />
				</span>
				{screen.code && <span className={errorCodeStyles()}>{screen.code}</span>}
				<h1 className={systemTitleStyles()}>{screen.title}</h1>
				<p className={systemTextStyles()}>{screen.text}</p>
				<div className={systemActionsStyles()}>
					<Button variant="secondary" onClick={screen.goHome}>
						<House />
						Ir al inicio
					</Button>
					<Button onClick={screen.retry}>
						<RotateCw />
						Reintentar
					</Button>
				</div>
				<Collapsible.Root className={errorDetailsStyles()}>
					<Collapsible.Trigger className={errorDetailsTriggerStyles()}>
						Detalles técnicos
						<ChevronDown />
					</Collapsible.Trigger>
					<Collapsible.Content className={errorDetailsBodyStyles()}>
						<div className={errorDetailsBoxStyles()}>
							<pre className={errorDetailsTextStyles()}>
								{screen.details}
							</pre>
							<Button
								size="sm"
								variant="ghost"
								onClick={screen.copyDetails}
								className={errorCopyStyles()}
							>
								<Copy />
								Copiar para soporte
							</Button>
						</div>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>
		</main>
	);
}
