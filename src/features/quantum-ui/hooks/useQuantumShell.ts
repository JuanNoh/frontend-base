import { useState } from 'react';
import { toast } from 'sonner';
import { useLogout } from '@/features/auth/hooks/useLogout';
import { useAppearanceStore } from '@/stores/appearance.store';
import { useAuthStore } from '@/stores/auth.store';
import { DEMO_USER, NOTIFICATIONS, WORKSPACES } from '../data/shell';

export function useQuantumShell() {
	const [workspaceId, setWorkspaceId] = useState(WORKSPACES[0].id);
	const [notifications, setNotifications] = useState(NOTIFICATIONS);
	const setAccent = useAppearanceStore((state) => state.setAccent);
	const account = useAuthStore((state) => state.user);
	const logout = useLogout();

	const onWorkspaceChange = (id: string) => {
		setWorkspaceId(id);
		const next = WORKSPACES.find((item) => item.id === id);
		if (!next) return;
		if (next.accent) setAccent(next.accent);
		toast.success(`Ahora trabajas en ${next.name}`);
	};

	const onNotificationsRead = () =>
		setNotifications((list) => list.map((item) => ({ ...item, unread: false })));

	return {
		workspaces: WORKSPACES,
		workspaceId,
		onWorkspaceChange,
		notifications,
		onNotificationsRead,
		user: account ? { name: account.fullName, caption: account.email } : DEMO_USER,
		onLogout: account ? logout : undefined,
	};
}
