import type { ShellIdentity } from '@/components/layout/app-shell/app-shell.types';

export interface RailUserProps {
	user: ShellIdentity;
	collapsed: boolean;
	onLogout?: () => void;
}
