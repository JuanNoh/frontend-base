import { CreditCard, FileStack, LayoutDashboard, ReceiptText } from 'lucide-react';
import { Card } from '@/components/ui/card/card.component';
import { Tabs } from '@/components/ui/tabs/tabs.component';
import { navigationGridStyles } from './navigation-demo.styles';

const CLIENT_TABS = [
	{
		value: 'resumen',
		label: (
			<>
				<LayoutDashboard />
				Resumen
			</>
		),
		content: '14 facturas en 2026, $612,880.00 facturado y 2 por cobrar.',
	},
	{
		value: 'facturas',
		label: (
			<>
				<FileStack />
				Facturas
			</>
		),
		content: '14 emitidas, 1 cancelada y 2 con método PPD esperando complemento.',
	},
	{
		value: 'pagos',
		label: (
			<>
				<CreditCard />
				Pagos
			</>
		),
		content: '12 cobros aplicados; el último el 27 oct 2026 por $63,200.00.',
	},
	{
		value: 'notas',
		label: (
			<>
				<ReceiptText />
				Notas de crédito
			</>
		),
		content: 'Ninguna en este ejercicio.',
	},
];

const PERIOD_TABS = ['Día', 'Semana', 'Mes', 'Año'].map((period) => ({
	value: period,
	label: period,
	content: `Ventas agrupadas por ${period.toLowerCase()}.`,
}));

export function NavigationDemo() {
	return (
		<div className={navigationGridStyles()}>
			<Card>
				<Tabs items={CLIENT_TABS} aria-label="Detalle del cliente" />
			</Card>
			<Card>
				<Tabs
					items={PERIOD_TABS}
					defaultValue="Mes"
					variant="pill"
					aria-label="Periodo"
				/>
			</Card>
		</div>
	);
}
