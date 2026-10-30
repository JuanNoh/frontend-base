import {
	AppWindow,
	BellRing,
	ChartColumn,
	FileStack,
	LayoutGrid,
	ListTree,
	LogIn,
	MonitorX,
	Palette,
	Server,
	ShoppingCart,
	Shapes,
	Sparkles,
	SquareStack,
	Store,
	SwatchBook,
	TextCursorInput,
	WandSparkles,
} from 'lucide-react';
import type { NavGroup } from '@/components/layout/app-shell/app-shell.types';

export const QUANTUM_NAV: NavGroup[] = [
	{
		label: 'Quantum UI',
		items: [
			{ label: 'Apariencia', icon: Palette, to: '/ui', hash: 'apariencia' },
			{
				label: 'Fundamentos',
				icon: SwatchBook,
				to: '/ui',
				hash: 'fundamentos',
			},
			{ label: 'Ir al login', icon: LogIn, to: '/' },
		],
	},
	{
		label: 'Negocio',
		items: [
			{ label: 'Por giro', icon: Store, to: '/ui', hash: 'giros' },
			{ label: 'Módulos', icon: LayoutGrid, to: '/ui', hash: 'modulos' },
			{ label: 'Datos', icon: ChartColumn, to: '/ui', hash: 'indicadores' },
			{ label: 'Tabla con backend', icon: Server, to: '/ui', hash: 'backend' },
			{
				label: 'Ventas',
				icon: ShoppingCart,
				children: [
					{
						label: 'Facturas',
						icon: FileStack,
						to: '/ui',
						hash: 'facturas',
						count: 397,
					},
				],
			},
		],
	},
	{
		label: 'Componentes',
		items: [
			{
				label: 'Formularios',
				icon: TextCursorInput,
				children: [
					{ label: 'Botones', to: '/ui', hash: 'botones' },
					{
						label: 'Entrada de datos',
						children: [
							{ label: 'Campos', to: '/ui', hash: 'campos' },
							{ label: 'Selección', to: '/ui', hash: 'seleccion' },
							{ label: 'Datos fiscales', to: '/ui', hash: 'fiscales' },
							{ label: 'Más campos', to: '/ui', hash: 'campos-extra' },
						],
					},
					{ label: 'Pestañas', to: '/ui', hash: 'pestanas' },
				],
			},
			{
				label: 'Superficies',
				icon: Shapes,
				children: [
					{
						label: 'Tarjetas',
						icon: SquareStack,
						to: '/ui',
						hash: 'tarjetas',
					},
					{ label: 'Capas', icon: AppWindow, to: '/ui', hash: 'modal' },
					{ label: 'Avisos', icon: BellRing, to: '/ui', hash: 'estados' },
					{ label: 'Contenido', icon: ListTree, to: '/ui', hash: 'contenido' },
					{
						label: 'Pantallas del sistema',
						icon: MonitorX,
						to: '/ui',
						hash: 'pantallas',
					},
				],
			},
		],
	},
	{
		label: 'Efectos',
		items: [
			{ label: 'Efectos nativos', icon: Sparkles, to: '/ui', hash: 'efectos' },
			{
				label: 'Animaciones',
				icon: WandSparkles,
				to: '/ui',
				hash: 'animaciones',
			},
		],
	},
];
