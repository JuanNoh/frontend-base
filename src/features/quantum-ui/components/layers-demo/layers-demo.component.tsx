import {
	Banknote,
	CircleCheck,
	Command,
	Download,
	Info,
	PanelRight,
	SlidersHorizontal,
	TriangleAlert,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { Button } from '@/components/ui/button/button.component';
import { Checkbox } from '@/components/ui/checkbox/checkbox.component';
import { Drawer } from '@/components/ui/drawer/drawer.component';
import { Popover } from '@/components/ui/popover/popover.component';
import { useDrawerDemo } from '../../hooks/useDrawerDemo';
import { STATUS_FILTERS, useFiltersDemo } from '../../hooks/useFiltersDemo';
import { useToastsDemo } from '../../hooks/useToastsDemo';
import { DemoCard } from '../demo-card/demo-card.component';
import { InvoiceDetail } from '../invoice-detail/invoice-detail.component';
import { ModalDemo } from '../modal-demo/modal-demo.component';
import {
	layersActionsStyles,
	layersFilterActionsStyles,
	layersFilterListStyles,
	layersFilterRowStyles,
	layersFilterTitleStyles,
	layersFiltersStyles,
	layersGridStyles,
	layersHintIconStyles,
	layersHintStyles,
	layersTextStyles,
	layersTriggerStyles,
} from './layers-demo.styles';

export function LayersDemo() {
	const drawer = useDrawerDemo();
	const filters = useFiltersDemo();
	const toasts = useToastsDemo();

	return (
		<div className={layersGridStyles()}>
			<DemoCard title="Modal de confirmación" aside={<Badge>Radix Dialog</Badge>}>
				<ModalDemo />
			</DemoCard>
			<DemoCard title="Panel lateral" aside={<Badge>Radix Dialog</Badge>}>
				<p className={layersTextStyles()}>
					Detalle sin perder la tabla de vista: ancho fijo y alto completo.
				</p>
				<Button
					variant="secondary"
					onClick={drawer.open}
					className={layersTriggerStyles()}
				>
					<PanelRight />
					Ver A-1041
				</Button>
				<Drawer
					open={drawer.isOpen}
					onClose={drawer.close}
					eyebrow="Factura · PPD"
					title="A-1041 · Hotel Caribe Azul"
					footer={
						<>
							<Button variant="secondary" onClick={toasts.downloadPdf}>
								<Download />
								PDF
							</Button>
							<Button onClick={drawer.registerPayment}>
								<Banknote />
								Registrar pago
							</Button>
						</>
					}
				>
					<InvoiceDetail />
				</Drawer>
			</DemoCard>
			<DemoCard title="Filtros" aside={<Badge>Radix Popover</Badge>}>
				<p className={layersTextStyles()}>Filtra sin salir de la pantalla.</p>
				<Popover
					open={filters.isOpen}
					onOpenChange={filters.setIsOpen}
					className={layersFiltersStyles()}
					trigger={
						<Button variant="secondary" className={layersTriggerStyles()}>
							<SlidersHorizontal />
							Filtros
							<Badge tone="primary">{filters.selected.length}</Badge>
						</Button>
					}
				>
					<p className={layersFilterTitleStyles()}>Estado</p>
					<div className={layersFilterListStyles()}>
						{STATUS_FILTERS.map((status) => (
							<label key={status} className={layersFilterRowStyles()}>
								<Checkbox
									checked={filters.isChecked(status)}
									onCheckedChange={() => filters.toggle(status)}
								/>
								{status}
							</label>
						))}
					</div>
					<div className={layersFilterActionsStyles()}>
						<Button variant="ghost" size="sm" onClick={filters.clear}>
							Limpiar
						</Button>
						<Button size="sm" onClick={filters.apply}>
							Aplicar
						</Button>
					</div>
				</Popover>
			</DemoCard>
			<DemoCard title="Paleta de comandos" aside={<Badge>⌘K</Badge>}>
				<p className={layersTextStyles()}>
					Navega o ejecuta sin soltar el teclado: ir a una sección, cambiar el
					modo o aplicar una mezcla.
				</p>
				<p className={layersHintStyles()}>
					<Command className={layersHintIconStyles()} />
					Prueba ⌘K o Ctrl K
				</p>
			</DemoCard>
			<DemoCard title="Avisos flotantes" aside={<Badge>sonner</Badge>}>
				<div className={layersActionsStyles()}>
					<Button size="sm" variant="secondary" onClick={toasts.success}>
						<CircleCheck />
						Éxito
					</Button>
					<Button size="sm" variant="secondary" onClick={toasts.error}>
						<TriangleAlert />
						Error
					</Button>
					<Button size="sm" variant="secondary" onClick={toasts.info}>
						<Info />
						Info
					</Button>
				</div>
			</DemoCard>
		</div>
	);
}
