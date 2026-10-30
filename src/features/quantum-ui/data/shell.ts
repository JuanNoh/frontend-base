import type {
	ShellNotification,
	ShellWorkspace,
} from '@/components/layout/app-shell/app-shell.types';

export const DEMO_USER = { name: 'Administrador', caption: 'Perfil de demostración' };

export const WORKSPACES: ShellWorkspace[] = [
	{
		id: 'cds',
		name: 'Comercial del Sureste',
		caption: 'CDS120501AB8',
		accent: '#0f8b6d',
	},
	{
		id: 'hca',
		name: 'Hotel Caribe Azul',
		caption: 'HCA150902K28',
		accent: '#1d6fa5',
	},
	{
		id: 'tmo',
		name: 'Taller Montejo',
		caption: 'TMO190301TT9',
		accent: '#b4532a',
	},
];

export const NOTIFICATIONS: ShellNotification[] = [
	{
		id: 'timbrada',
		title: 'Factura A-1043 timbrada',
		description: 'Hotel Caribe Azul · $126,400.00',
		time: 'Hace 2 min',
		tone: 'success',
		unread: true,
	},
	{
		id: 'lista-69b',
		title: 'Proveedor en lista 69-B',
		description: 'Revisa a Distribuidora Peninsular antes de deducir sus facturas.',
		time: 'Hace 1 h',
		tone: 'warning',
		unread: true,
	},
	{
		id: 'catalogo',
		title: 'Nuevo catálogo disponible',
		description: 'Se actualizaron productos y servicios el 1 de noviembre.',
		time: 'Ayer',
		tone: 'info',
		unread: true,
	},
	{
		id: 'complemento',
		title: 'Complemento de pago vencido',
		description: 'La A-1037 lleva 12 días sin complemento.',
		time: 'Hace 3 días',
		tone: 'danger',
		unread: false,
	},
];
