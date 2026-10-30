import { CommandPalette } from '@/components/ui/command-palette/command-palette.component';
import { AppRail } from '@/components/layout/app-rail/app-rail.component';
import { AppTopbar } from '@/components/layout/app-topbar/app-topbar.component';
import {
	appShellContentStyles,
	appShellMainStyles,
	appShellStyles,
} from './app-shell.styles';
import type { AppShellProps } from './app-shell.types';
import { useAppShell } from './useAppShell';

export function AppShell({
	nav,
	crumbs,
	commands = [],
	brand,
	workspace,
	workspaces,
	workspaceId,
	onWorkspaceChange,
	notifications,
	onNotificationsRead,
	user,
	onLogout,
	children,
}: AppShellProps) {
	const shell = useAppShell(commands);

	return (
		<div className={appShellStyles({ collapsed: shell.isRailCollapsed })}>
			<AppRail
				nav={nav}
				brand={brand}
				workspace={workspace}
				workspaces={workspaces}
				workspaceId={workspaceId}
				onWorkspaceChange={onWorkspaceChange}
				user={user}
				onLogout={onLogout}
				isOpen={shell.isRailOpen}
				collapsed={shell.isRailCollapsed}
				onClose={shell.closeRail}
				onSearch={shell.palette.open}
			/>
			<div className={appShellMainStyles()}>
				<AppTopbar
					crumbs={crumbs}
					collapsed={shell.isRailCollapsed}
					onMenu={shell.openRail}
					onToggleCollapse={shell.toggleRailCollapsed}
					onSearch={shell.palette.open}
					notifications={notifications}
					onNotificationsRead={onNotificationsRead}
				/>
				<main className={appShellContentStyles()}>{children}</main>
			</div>
			<CommandPalette palette={shell.palette} />
		</div>
	);
}
