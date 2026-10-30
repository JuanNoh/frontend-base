import type {
	KanbanCard,
	KanbanColumn,
} from '@/components/ui/kanban-board/kanban-board.types';

export const BOARD_COLUMNS: KanbanColumn[] = [
	{ id: 'nuevos', title: 'Nuevos', hue: 'blue' },
	{ id: 'preparando', title: 'Preparando', hue: 'amber' },
	{ id: 'camino', title: 'En camino', hue: 'violet' },
	{ id: 'entregados', title: 'Entregados', hue: 'green' },
];

export const BOARD_CARDS: KanbanCard[] = [
	{
		id: 'p-2051',
		columnId: 'nuevos',
		title: 'Pedido 2051',
		subtitle: 'Hotel Caribe Azul',
		tag: { label: 'Urgente', tone: 'danger' },
		person: 'Ana Cetina',
		meta: '$12,400',
	},
	{
		id: 'p-2050',
		columnId: 'nuevos',
		title: 'Pedido 2050',
		subtitle: 'Constructora Itzamná',
		person: 'Luis Canul',
		meta: '$48,720',
	},
	{
		id: 'p-2049',
		columnId: 'nuevos',
		title: 'Pedido 2049',
		subtitle: 'Café Montejo',
		tag: { label: 'Mayoreo', tone: 'info' },
		person: 'Mariana Poot',
		meta: '$6,380',
	},
	{
		id: 'p-2047',
		columnId: 'preparando',
		title: 'Pedido 2047',
		subtitle: 'Clínica Altabrisa',
		person: 'Ana Cetina',
		meta: '$9,150',
	},
	{
		id: 'p-2046',
		columnId: 'preparando',
		title: 'Pedido 2046',
		subtitle: 'Transportes Kukulcán',
		tag: { label: 'Recoge', tone: 'warning' },
		person: 'Luis Canul',
		meta: '$21,900',
	},
	{
		id: 'p-2044',
		columnId: 'camino',
		title: 'Pedido 2044',
		subtitle: 'Comercial del Sureste',
		person: 'Mariana Poot',
		meta: '$15,600',
	},
	{
		id: 'p-2041',
		columnId: 'entregados',
		title: 'Pedido 2041',
		subtitle: 'Hotel Caribe Azul',
		person: 'Luis Canul',
		meta: '$33,275',
	},
	{
		id: 'p-2040',
		columnId: 'entregados',
		title: 'Pedido 2040',
		subtitle: 'Café Montejo',
		person: 'Ana Cetina',
		meta: '$4,920',
	},
];

export const BOARD_TEAM = [
	{ name: 'Ana Cetina', hue: 'blue' as const },
	{ name: 'Luis Canul', hue: 'green' as const },
	{ name: 'Mariana Poot', hue: 'violet' as const },
];
