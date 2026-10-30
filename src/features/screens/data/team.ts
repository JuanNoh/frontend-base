import type { DataTableFilter } from '@/components/ui/data-table/data-table.types';
import type { TeamMember } from '../types/team.types';

export const TEAM_MEMBERS: TeamMember[] = [
	{
		id: 'ana',
		name: 'Ana Cetina',
		email: 'ana@empresa.mx',
		role: 'Administración',
		status: 'Activa',
		hue: 'blue',
	},
	{
		id: 'luis',
		name: 'Luis Canul',
		email: 'luis@empresa.mx',
		role: 'Ventas',
		status: 'Activa',
		hue: 'green',
	},
	{
		id: 'mariana',
		name: 'Mariana Poot',
		email: 'mariana@empresa.mx',
		role: 'Operación',
		status: 'Activa',
		hue: 'violet',
	},
	{
		id: 'hugo',
		name: 'Hugo Dzul',
		email: 'hugo@empresa.mx',
		role: 'Ventas',
		status: 'Invitada',
		hue: 'amber',
	},
	{
		id: 'renata',
		name: 'Renata Xool',
		email: 'renata@empresa.mx',
		role: 'Operación',
		status: 'Suspendida',
		hue: 'pink',
	},
];

export const TEAM_FILTERS: DataTableFilter<TeamMember>[] = [
	{
		key: 'role',
		label: 'Rol',
		value: (row) => row.role,
		options: [
			{ value: 'Administración', label: 'Administración' },
			{ value: 'Ventas', label: 'Ventas' },
			{ value: 'Operación', label: 'Operación' },
		],
	},
];
