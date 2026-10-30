import { Avatar } from '@/components/ui/avatar/avatar.component';
import { Badge } from '@/components/ui/badge/badge.component';
import type { BadgeProps } from '@/components/ui/badge/badge.types';
import type { DataTableColumn } from '@/components/ui/data-table/data-table.types';
import type { TeamMember, TeamStatus } from '../../types/team.types';
import { teamPersonStyles } from './team-table.styles';

const STATUS_TONE: Record<TeamStatus, BadgeProps['tone']> = {
	Activa: 'success',
	Invitada: 'info',
	Suspendida: 'danger',
};

export const TEAM_COLUMNS: DataTableColumn<TeamMember>[] = [
	{
		key: 'name',
		header: 'Persona',
		sortValue: (row) => row.name,
		render: (row) => (
			<span className={teamPersonStyles()}>
				<Avatar name={row.name} hue={row.hue} />
				<span>
					<b>{row.name}</b>
					<small>{row.email}</small>
				</span>
			</span>
		),
	},
	{
		key: 'role',
		header: 'Rol',
		sortValue: (row) => row.role,
		render: (row) => row.role,
	},
	{
		key: 'status',
		header: 'Estado',
		render: (row) => (
			<Badge tone={STATUS_TONE[row.status]} dot>
				{row.status}
			</Badge>
		),
	},
];
