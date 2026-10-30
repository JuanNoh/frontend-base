import type {
	NavGroup,
	NavItem,
	ShellIdentity,
	ShellWorkspace,
} from '@/components/layout/app-shell/app-shell.types';

export interface AppRailProps {
	nav: NavGroup[];
	brand?: ShellIdentity;
	workspace?: ShellIdentity;
	workspaces?: ShellWorkspace[];
	workspaceId?: string;
	onWorkspaceChange?: (id: string) => void;
	user?: ShellIdentity;
	onLogout?: () => void;
	isOpen: boolean;
	collapsed: boolean;
	onClose: () => void;
	onSearch: () => void;
}

export interface NavLocation {
	pathname: string;
	hash: string;
}

export interface RailNode {
	key: string;
	item: NavItem;
	active: boolean;
	children: RailNode[];
}

export interface RailGroup {
	key: string;
	label?: string;
	nodes: RailNode[];
}
