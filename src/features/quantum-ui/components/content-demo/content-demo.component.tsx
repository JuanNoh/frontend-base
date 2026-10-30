import { Banknote, Landmark, Scale, Wallet } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion/accordion.component';
import { Avatar, AvatarGroup } from '@/components/ui/avatar/avatar.component';
import { Breadcrumbs } from '@/components/ui/breadcrumbs/breadcrumbs.component';
import { ErrorBoundary } from '@/components/ui/error-boundary/error-boundary.component';
import { Timeline } from '@/components/ui/timeline/timeline.component';
import { TreeView } from '@/components/ui/tree-view/tree-view.component';
import { useContentDemo } from '../../hooks/useContentDemo';
import { DemoCard } from '../demo-card/demo-card.component';
import { contentGridStyles, contentPeopleStyles } from './content-demo.styles';
import { FragileCard } from './fragile-card.component';

const ACCOUNTS = [
	{
		id: '100',
		label: 'Activo',
		icon: Wallet,
		meta: '$1,284,560',
		children: [
			{
				id: '101',
				label: 'Caja',
				icon: Banknote,
				meta: '$12,400',
			},
			{
				id: '102',
				label: 'Bancos',
				icon: Landmark,
				meta: '$918,220',
				children: [
					{ id: '102-1', label: 'Cuenta de cheques', meta: '$802,100' },
					{ id: '102-2', label: 'Inversiones', meta: '$116,120' },
				],
			},
		],
	},
	{
		id: '200',
		label: 'Pasivo',
		icon: Scale,
		meta: '$412,900',
		children: [{ id: '201', label: 'Proveedores', meta: '$180,688' }],
	},
];

const QUESTIONS = [
	{
		value: 'timbrar',
		title: '¿Cuándo se timbra una factura?',
		content: 'Al guardarla, salvo que elijas dejarla como borrador.',
	},
	{
		value: 'cancelar',
		title: '¿Puedo cancelar una factura ya timbrada?',
		content: 'Sí, siempre que el receptor la acepte cuando la regla del SAT lo pida.',
	},
	{
		value: 'complementos',
		title: '¿Qué es un complemento de pago?',
		content: 'El comprobante que emites al cobrar una factura en parcialidades.',
	},
];

const HISTORY = [
	{ title: 'Pedido recibido', hint: '12 oct, 09:14', tone: 'done' as const },
	{ title: 'Autorizado por compras', hint: '12 oct, 11:02', tone: 'done' as const },
	{ title: 'En tránsito', hint: 'Llega el 31 oct', tone: 'next' as const },
	{ title: 'Recibido en almacén', hint: 'Pendiente', tone: 'pending' as const },
];

const TEAM = [
	{ name: 'Ana Pech', hue: 'teal' as const },
	{ name: 'Luis Canché', hue: 'violet' as const },
	{ name: 'Mónica Chan', hue: 'orange' as const },
	{ name: 'Beto Uc', hue: 'blue' as const },
	{ name: 'Karla Dzib', hue: 'pink' as const },
	{ name: 'Raúl Poot', hue: 'green' as const },
];

const TRAIL = [
	{ label: 'Inicio', to: '/' as const },
	{ label: 'Ventas', to: '/ui' as const },
	{ label: 'Factura A-1043' },
];

export function ContentDemo() {
	const demo = useContentDemo();

	return (
		<div className={contentGridStyles()}>
			<DemoCard title="Árbol">
				<TreeView
					label="Catálogo de cuentas"
					nodes={ACCOUNTS}
					selectedId={demo.account}
					onSelect={demo.setAccount}
					defaultExpanded={['100', '102']}
				/>
			</DemoCard>
			<DemoCard title="Acordeón">
				<Accordion items={QUESTIONS} defaultOpen={['timbrar']} />
			</DemoCard>
			<DemoCard title="Línea de tiempo">
				<Timeline items={HISTORY} />
			</DemoCard>
			<DemoCard title="Personas y ruta">
				<div className={contentPeopleStyles()}>
					<Avatar name="Ana Pech" size="lg" hue="teal" status="online" />
					<Avatar name="Luis Canché" size="md" hue="violet" status="busy" />
					<Avatar name="Sin Foto" src="/no-existe.png" hue="orange" />
					<AvatarGroup people={TEAM} max={4} />
				</div>
				<Breadcrumbs items={TRAIL} />
			</DemoCard>
			<DemoCard title="Error por sección">
				<ErrorBoundary>
					<FragileCard />
				</ErrorBoundary>
			</DemoCard>
		</div>
	);
}
