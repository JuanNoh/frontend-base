import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WORKSPACES } from '../data/shell';

interface WorkspaceState {
	workspaceId: string;
	setWorkspaceId: (workspaceId: string) => void;
}

export const useWorkspaceStore = create<WorkspaceState>()(
	persist(
		(set) => ({
			workspaceId: WORKSPACES[0].id,
			setWorkspaceId: (workspaceId) => set({ workspaceId }),
		}),
		{ name: 'workspace' }
	)
);
