import type { ShellNotification } from '@/components/layout/app-shell/app-shell.types';

export interface TopbarNotificationsProps {
	notifications: ShellNotification[];
	onReadAll?: () => void;
}
