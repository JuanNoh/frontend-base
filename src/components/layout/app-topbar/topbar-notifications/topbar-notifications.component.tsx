import {
	Bell,
	BellOff,
	CircleAlert,
	CircleCheck,
	Info,
	TriangleAlert,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { Button } from '@/components/ui/button/button.component';
import { EmptyState } from '@/components/ui/empty-state/empty-state.component';
import { Popover } from '@/components/ui/popover/popover.component';
import {
	notificationBodyStyles,
	notificationHiddenStyles,
	notificationIconStyles,
	notificationItemStyles,
	notificationsEmptyStyles,
	notificationsHeadStyles,
	notificationsListStyles,
	notificationsPanelStyles,
	notificationsReadAllStyles,
	notificationsTitleStyles,
	notificationUnreadStyles,
	topbarBellDotStyles,
	topbarBellStyles,
} from './topbar-notifications.styles';
import type { TopbarNotificationsProps } from './topbar-notifications.types';
import { useTopbarNotifications } from './useTopbarNotifications';

const TONE_ICON = {
	info: Info,
	success: CircleCheck,
	warning: TriangleAlert,
	danger: CircleAlert,
};

export function TopbarNotifications({
	notifications,
	onReadAll,
}: TopbarNotificationsProps) {
	const { unread, label } = useTopbarNotifications(notifications);

	return (
		<Popover
			align="end"
			className={notificationsPanelStyles()}
			trigger={
				<Button
					variant="ghost"
					size="icon"
					aria-label={label}
					className={topbarBellStyles()}
				>
					<Bell />
					{unread > 0 && <span className={topbarBellDotStyles()} />}
				</Button>
			}
		>
			<div className={notificationsHeadStyles()}>
				<span className={notificationsTitleStyles()}>Notificaciones</span>
				{unread > 0 && <Badge tone="primary">{unread} nuevas</Badge>}
				{unread > 0 && onReadAll && (
					<Button
						size="sm"
						variant="ghost"
						onClick={onReadAll}
						className={notificationsReadAllStyles()}
					>
						Marcar como leídas
					</Button>
				)}
			</div>
			{notifications.length === 0 ? (
				<EmptyState
					icon={BellOff}
					title="Todo al día"
					description="No tienes avisos nuevos."
					className={notificationsEmptyStyles()}
				/>
			) : (
				<ul className={notificationsListStyles()}>
					{notifications.map((item) => {
						const Icon = TONE_ICON[item.tone];
						return (
							<li
								key={item.id}
								data-unread={item.unread || undefined}
								className={notificationItemStyles()}
							>
								<span
									className={notificationIconStyles({
										tone: item.tone,
									})}
								>
									<Icon />
								</span>
								<span className={notificationBodyStyles()}>
									{item.unread && (
										<span className={notificationHiddenStyles()}>
											Sin leer:
										</span>
									)}
									<b>{item.title}</b>
									{item.description && (
										<small>{item.description}</small>
									)}
									<time>{item.time}</time>
								</span>
								{item.unread && (
									<span
										aria-hidden="true"
										className={notificationUnreadStyles()}
									/>
								)}
							</li>
						);
					})}
				</ul>
			)}
		</Popover>
	);
}
