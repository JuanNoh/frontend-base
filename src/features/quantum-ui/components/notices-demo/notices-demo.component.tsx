import { CloudDownload, Inbox } from 'lucide-react';
import { Alert } from '@/components/ui/alert/alert.component';
import { Badge } from '@/components/ui/badge/badge.component';
import { Button } from '@/components/ui/button/button.component';
import { Card } from '@/components/ui/card/card.component';
import { EmptyState } from '@/components/ui/empty-state/empty-state.component';
import { Progress } from '@/components/ui/progress/progress.component';
import { Skeleton } from '@/components/ui/skeleton/skeleton.component';
import { Spinner } from '@/components/ui/spinner/spinner.component';
import { useToastsDemo } from '../../hooks/useToastsDemo';
import { DemoCard } from '../demo-card/demo-card.component';
import {
	noticesBadgesStyles,
	noticesColumnStyles,
	noticesEmptyStyles,
	noticesGridStyles,
	noticesLoadingStyles,
	noticesSkeletonLinesStyles,
	noticesSkeletonRowStyles,
	skeletonLongStyles,
	skeletonNarrowStyles,
	skeletonWideStyles,
} from './notices-demo.styles';

export function NoticesDemo() {
	const toasts = useToastsDemo();

	return (
		<div className={noticesGridStyles()}>
			<DemoCard title="Alertas">
				<Alert tone="info" title="Nueva versión del catálogo SAT">
					Se actualizó el catálogo de productos y servicios el 1 de octubre.
				</Alert>
				<Alert tone="success" title="Septiembre cerrado">
					La declaración quedó presentada y pagada.
				</Alert>
				<Alert tone="warning" title="2 facturas PPD sin complemento">
					Emítelos antes del 5 de noviembre.
				</Alert>
				<Alert tone="danger" title="Proveedor en lista 69-B">
					Distribuidora Ficticia del Golfo aparece como EFOS definitivo.
				</Alert>
			</DemoCard>
			<div className={noticesColumnStyles()}>
				<DemoCard title="Chips de estado">
					<div className={noticesBadgesStyles()}>
						<Badge tone="success" dot>
							Pagada
						</Badge>
						<Badge tone="warning" dot>
							Por cobrar
						</Badge>
						<Badge tone="danger" dot>
							Cancelada
						</Badge>
						<Badge tone="info">PPD</Badge>
						<Badge>PUE</Badge>
						<Badge tone="primary">Nuevo</Badge>
					</div>
				</DemoCard>
				<DemoCard
					title="Cargando"
					aside={
						<span className={noticesLoadingStyles()}>
							<Spinner size="sm" />
							<Spinner size="md" />
						</span>
					}
				>
					<div className={noticesSkeletonRowStyles()}>
						<Skeleton shape="tile" />
						<div className={noticesSkeletonLinesStyles()}>
							<Skeleton className={skeletonWideStyles()} />
							<Skeleton className={skeletonNarrowStyles()} />
						</div>
					</div>
					<Skeleton />
					<Skeleton className={skeletonLongStyles()} />
					<Progress value={68} label="Descarga del SAT" />
					<Progress label="Calculando impuestos" />
				</DemoCard>
			</div>
			<Card padding="none" className={noticesEmptyStyles()}>
				<EmptyState
					icon={Inbox}
					title="Sin facturas recibidas en noviembre"
					description="Cuando el SAT entregue el paquete del mes, aparecerán aquí ya clasificadas."
					actions={
						<>
							<Button onClick={toasts.sync}>
								<CloudDownload />
								Sincronizar ahora
							</Button>
							<Button variant="ghost">Subir XML</Button>
						</>
					}
				/>
			</Card>
		</div>
	);
}
