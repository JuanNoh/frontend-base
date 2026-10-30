import type { ShellNotification } from '@/components/layout/app-shell/app-shell.types';
import type { DemoWorkspace } from '../types/vertical.types';

export const DEMO_USER = { name: 'Administrador', caption: 'Perfil de demostración' };

export const WORKSPACES: DemoWorkspace[] = [
	{
		id: 'cds',
		name: 'Comercial del Sureste',
		caption: 'Administración',
		accent: 'oklch(58% 0.13 40)',
		vertical: 'administracion',
	},
	{
		id: 'cmo',
		name: 'Café Montejo',
		caption: 'Punto de venta',
		accent: 'oklch(50% 0.08 70)',
		vertical: 'pos',
	},
	{
		id: 'hca',
		name: 'Hotel Caribe Azul',
		caption: 'Recursos humanos',
		accent: 'oklch(50% 0.1 245)',
		vertical: 'rh',
	},
	{
		id: 'cal',
		name: 'Clínica Altabrisa',
		caption: 'Citas',
		accent: 'oklch(58% 0.11 205)',
		vertical: 'citas',
	},
	{
		id: 'tku',
		name: 'Transportes Kukulcán',
		caption: 'Logística',
		accent: 'oklch(52% 0.09 150)',
		vertical: 'logistica',
	},
];

export const NOTIFICATIONS: ShellNotification[] = [
	{
		id: 'venta',
		title: 'Venta A-1043 registrada',
		description: 'Hotel Caribe Azul · $126,400.00',
		time: 'Hace 2 min',
		tone: 'success',
		unread: true,
	},
	{
		id: 'proveedor',
		title: 'Proveedor por revisar',
		description: 'Confirma los datos de Distribuidora Peninsular antes de pagarle.',
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
		id: 'pago-vencido',
		title: 'Pago vencido',
		description: 'La venta A-1037 lleva 12 días sin pago.',
		time: 'Hace 3 días',
		tone: 'danger',
		unread: false,
	},
];
