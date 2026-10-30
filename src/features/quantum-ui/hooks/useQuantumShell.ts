import { useState } from 'react';
import { useLocation } from '@tanstack/react-router';
import { toast } from 'sonner';
import { useLogout } from '@/features/auth/hooks/useLogout';
import { useAuthStore } from '@/stores/auth.store';
import { DEMO_USER, NOTIFICATIONS, WORKSPACES } from '../data/shell';
import { crumbsFor } from '../quantum-ui.utils';
import { useWorkspace } from './useWorkspace';

export function useQuantumShell() {
	const [notifications, setNotifications] = useState(NOTIFICATIONS);
	const { workspace, selectWorkspace } = useWorkspace();
	const { pathname, hash } = useLocation();
	const account = useAuthStore((state) => state.user);
	const logout = useLogout();

	const onWorkspaceChange = (id: string) => {
		selectWorkspace(id);
		const next = WORKSPACES.find((item) => item.id === id);
		if (next) toast.success(`Ahora trabajas en ${next.name}`);
	};

	const onNotificationsRead = () =>
		setNotifications((list) => list.map((item) => ({ ...item, unread: false })));

	return {
		crumbs: crumbsFor(pathname, hash),
		workspaces: WORKSPACES,
		workspaceId: workspace.id,
		onWorkspaceChange,
		notifications,
		onNotificationsRead,
		user: account ? { name: account.fullName, caption: account.email } : DEMO_USER,
		onLogout: account ? logout : undefined,
	};
}
