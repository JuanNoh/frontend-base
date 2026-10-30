import {
	AppWindow,
	BellRing,
	CalendarDays,
	ChartColumn,
	FileStack,
	LayoutDashboard,
	LayoutGrid,
	ListTree,
	LogIn,
	MonitorX,
	Palette,
	ReceiptText,
	Server,
	Settings,
	Shapes,
	Sparkles,
	SquareKanban,
	SquareStack,
	Store,
	SwatchBook,
	TextCursorInput,
	WandSparkles,
} from 'lucide-react';
import type { NavGroup } from '@/components/layout/app-shell/app-shell.types';

export const QUANTUM_NAV: NavGroup[] = [
	{
		label: 'Pantallas',
		items: [
			{ label: 'Panel', icon: LayoutDashboard, to: '/ui' },
			{ label: 'Ventas', icon: ReceiptText, to: '/ui/ventas', count: 397 },
			{ label: 'Caja', icon: Store, to: '/ui/caja' },
			{ label: 'Agenda', icon: CalendarDays, to: '/ui/agenda' },
			{ label: 'Tablero', icon: SquareKanban, to: '/ui/tablero' },
			{ label: 'Ajustes', icon: Settings, to: '/ui/ajustes' },
		],
	},
	{
		label: 'Componentes',
		items: [
			{
				label: 'Fundamentos',
				icon: SwatchBook,
				children: [
					{
						label: 'Apariencia',
						icon: Palette,
						to: '/ui/fundamentos',
						hash: 'apariencia',
					},
					{
						label: 'Color y tipografía',
						icon: SwatchBook,
						to: '/ui/fundamentos',
						hash: 'fundamentos',
					},
				],
			},
			{
				label: 'Formularios',
				icon: TextCursorInput,
				children: [
					{ label: 'Botones', to: '/ui/formularios', hash: 'botones' },
					{
						label: 'Entrada de datos',
						children: [
							{ label: 'Campos', to: '/ui/formularios', hash: 'campos' },
							{
								label: 'Selección',
								to: '/ui/formularios',
								hash: 'seleccion',
							},
							{
								label: 'Datos fiscales',
								to: '/ui/formularios',
								hash: 'fiscales',
							},
							{
								label: 'Más campos',
								to: '/ui/formularios',
								hash: 'campos-extra',
							},
						],
					},
					{ label: 'Pestañas', to: '/ui/formularios', hash: 'pestanas' },
				],
			},
			{
				label: 'Superficies',
				icon: Shapes,
				children: [
					{
						label: 'Tarjetas',
						icon: SquareStack,
						to: '/ui/superficies',
						hash: 'tarjetas',
					},
					{
						label: 'Capas',
						icon: AppWindow,
						to: '/ui/superficies',
						hash: 'modal',
					},
					{
						label: 'Avisos',
						icon: BellRing,
						to: '/ui/superficies',
						hash: 'estados',
					},
					{
						label: 'Contenido',
						icon: ListTree,
						to: '/ui/superficies',
						hash: 'contenido',
					},
					{
						label: 'Pantallas del sistema',
						icon: MonitorX,
						to: '/ui/superficies',
						hash: 'pantallas',
					},
				],
			},
			{
				label: 'Datos',
				icon: ChartColumn,
				children: [
					{ label: 'Por giro', icon: Store, to: '/ui/datos', hash: 'giros' },
					{
						label: 'Módulos',
						icon: LayoutGrid,
						to: '/ui/datos',
						hash: 'modulos',
					},
					{
						label: 'Indicadores',
						icon: ChartColumn,
						to: '/ui/datos',
						hash: 'indicadores',
					},
					{
						label: 'Facturas',
						icon: FileStack,
						to: '/ui/datos',
						hash: 'facturas',
					},
					{
						label: 'Tabla con backend',
						icon: Server,
						to: '/ui/datos',
						hash: 'backend',
					},
				],
			},
			{
				label: 'Efectos',
				icon: Sparkles,
				children: [
					{
						label: 'Efectos nativos',
						icon: Sparkles,
						to: '/ui/efectos',
						hash: 'efectos',
					},
					{
						label: 'Animaciones',
						icon: WandSparkles,
						to: '/ui/efectos',
						hash: 'animaciones',
					},
				],
			},
		],
	},
	{
		label: 'Cuenta',
		items: [{ label: 'Ir al login', icon: LogIn, to: '/' }],
	},
];
