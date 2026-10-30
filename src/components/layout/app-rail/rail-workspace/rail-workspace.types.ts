import type {
	ShellIdentity,
	ShellWorkspace,
} from '@/components/layout/app-shell/app-shell.types';

export interface RailWorkspaceProps {
	workspace?: ShellIdentity;
	workspaces?: ShellWorkspace[];
	workspaceId?: string;
	onWorkspaceChange?: (id: string) => void;
	collapsed: boolean;
}
