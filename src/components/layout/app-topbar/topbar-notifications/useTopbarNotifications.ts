import type { ShellNotification } from '@/components/layout/app-shell/app-shell.types';

export function useTopbarNotifications(notifications: ShellNotification[]) {
	const unread = notifications.filter((item) => item.unread).length;
	const label = unread > 0 ? `Notificaciones, ${unread} sin leer` : 'Notificaciones';

	return { unread, label };
}
