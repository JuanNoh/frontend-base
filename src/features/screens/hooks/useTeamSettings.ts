import { toast } from 'sonner';
import type { TeamMember } from '../types/team.types';

export function useTeamSettings() {
	return {
		searchText: (row: TeamMember) => `${row.name} ${row.email}`,
		invite: () =>
			toast.success('Invitación lista', {
				description: 'Comparte el enlace con la persona.',
			}),
	};
}
