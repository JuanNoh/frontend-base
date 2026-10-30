import type { ShellNotification } from '@/components/layout/app-shell/app-shell.types';

export interface AppTopbarProps {
	crumbs: string[];
	collapsed: boolean;
	onMenu: () => void;
	onToggleCollapse: () => void;
	onSearch: () => void;
	notifications?: ShellNotification[];
	onNotificationsRead?: () => void;
}
