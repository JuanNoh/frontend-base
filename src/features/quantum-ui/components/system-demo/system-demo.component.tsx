import { ArrowUpRight, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { Skeleton } from '@/components/ui/skeleton/skeleton.component';
import { useSystemDemo } from '../../hooks/useSystemDemo';
import { DemoCard } from '../demo-card/demo-card.component';
import { effectDescriptionStyles } from '../effects-demo/effects-demo.styles';
import {
	miniBarStyles,
	miniBarTrackStyles,
	miniCaptionStyles,
	miniCodeStyles,
	miniErrorIconStyles,
	miniSkeletonStyles,
	systemDemoGridStyles,
	systemStageStyles,
} from './system-demo.styles';

export function SystemDemo() {
	const demo = useSystemDemo();

	return (
		<div className={systemDemoGridStyles()}>
			<DemoCard title="Página no encontrada">
				<div className={systemStageStyles()}>
					<span className={miniCodeStyles()}>404</span>
					<span className={miniCaptionStyles()}>Esta página no existe</span>
				</div>
				<p className={effectDescriptionStyles()}>
					Para cualquier ruta que no exista: muestra la dirección, regresa o
					lleva al inicio.
				</p>
				<Button size="sm" variant="secondary" onClick={demo.openNotFound}>
					Abrir una ruta que no existe
					<ArrowUpRight />
				</Button>
			</DemoCard>
			<DemoCard title="Pantalla de error">
				<div className={systemStageStyles()}>
					<span className={miniErrorIconStyles()}>
						<TriangleAlert />
					</span>
					<span className={miniCaptionStyles()}>
						El servidor tuvo un problema
					</span>
				</div>
				<p className={effectDescriptionStyles()}>
					Mensaje según el error (sin conexión, sin permiso, 404, 500),
					reintentar y detalles técnicos para copiarle a soporte.
				</p>
				<Button size="sm" variant="secondary" onClick={demo.openError}>
					Provocar un error
					<ArrowUpRight />
				</Button>
			</DemoCard>
			<DemoCard title="Carga entre páginas">
				<div className={systemStageStyles()}>
					<span className={miniBarTrackStyles()}>
						<span className={miniBarStyles()} />
					</span>
					<div className={miniSkeletonStyles()}>
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</div>
				</div>
				<p className={effectDescriptionStyles()}>
					Barra arriba en cuanto algo tarda, esqueleto si pasa de 0.6 s y
					transición suave al cambiar de página.
				</p>
				<Button size="sm" variant="secondary" onClick={demo.openSlow}>
					Simular una carga lenta
					<ArrowUpRight />
				</Button>
			</DemoCard>
		</div>
	);
}
