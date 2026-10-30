import { useAppearanceStore } from '@/stores/appearance.store';
import { WORKSPACES } from '../data/shell';
import { VERTICALS } from '../data/verticals/verticals';
import { useWorkspaceStore } from '../stores/workspace.store';
import type { Vertical, VerticalId } from '../types/vertical.types';

export function useWorkspace() {
	const workspaceId = useWorkspaceStore((state) => state.workspaceId);
	const setWorkspaceId = useWorkspaceStore((state) => state.setWorkspaceId);
	const setAccent = useAppearanceStore((state) => state.setAccent);
	const workspace = WORKSPACES.find((item) => item.id === workspaceId) ?? WORKSPACES[0];
	const vertical: Vertical = VERTICALS[workspace.vertical];

	const selectWorkspace = (id: string) => {
		const next = WORKSPACES.find((item) => item.id === id);
		if (!next) return;
		setWorkspaceId(next.id);
		setAccent(next.accent);
	};

	const selectVertical = (id: VerticalId) => {
		const next = WORKSPACES.find((item) => item.vertical === id);
		if (next) selectWorkspace(next.id);
	};

	return { workspace, vertical, selectWorkspace, selectVertical };
}
