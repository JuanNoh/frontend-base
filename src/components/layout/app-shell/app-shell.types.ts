import type { ReactNode } from 'react';
import type { LinkProps } from '@tanstack/react-router';
import type { LucideIcon } from 'lucide-react';
import type { Command } from '@/components/ui/command-palette/command-palette.types';

interface NavEntry {
	label: string;
	icon?: LucideIcon;
	count?: number;
}

export interface NavLeaf extends NavEntry {
	to: LinkProps['to'];
	hash?: string;
	children?: never;
}

export interface NavBranch extends NavEntry {
	children: NavItem[];
	to?: never;
	hash?: never;
}

export type NavItem = NavLeaf | NavBranch;

export type NavRootItem = NavItem & { icon: LucideIcon };

export interface NavGroup {
	label?: string;
	items: NavRootItem[];
}

export interface FlatNavLeaf {
	key: string;
	leaf: NavLeaf;
	trail: string[];
	icon?: LucideIcon;
}

export interface ShellIdentity {
	name: string;
	caption: string;
}

export interface ShellWorkspace extends ShellIdentity {
	id: string;
	accent?: string;
}

export type ShellNotificationTone = 'info' | 'success' | 'warning' | 'danger';

export interface ShellNotification {
	id: string;
	title: string;
	description?: string;
	time: string;
	tone: ShellNotificationTone;
	unread: boolean;
}

export interface AppShellProps {
	nav: NavGroup[];
	crumbs: string[];
	commands?: Command[];
	brand?: ShellIdentity;
	workspace?: ShellIdentity;
	workspaces?: ShellWorkspace[];
	workspaceId?: string;
	onWorkspaceChange?: (id: string) => void;
	notifications?: ShellNotification[];
	onNotificationsRead?: () => void;
	user?: ShellIdentity;
	onLogout?: () => void;
	children: ReactNode;
}
