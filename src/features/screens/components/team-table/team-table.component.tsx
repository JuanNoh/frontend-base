import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { DataTable } from '@/components/ui/data-table/data-table.component';
import { TEAM_FILTERS, TEAM_MEMBERS } from '../../data/team';
import { useTeamSettings } from '../../hooks/useTeamSettings';
import { TEAM_COLUMNS } from './team-table.columns';

export function TeamTable() {
	const team = useTeamSettings();

	return (
		<DataTable
			rows={TEAM_MEMBERS}
			columns={TEAM_COLUMNS}
			getRowId={(row) => row.id}
			searchText={team.searchText}
			searchPlaceholder="Buscar persona"
			filters={TEAM_FILTERS}
			actions={
				<Button size="sm" onClick={team.invite}>
					<UserPlus />
					Invitar
				</Button>
			}
		/>
	);
}
