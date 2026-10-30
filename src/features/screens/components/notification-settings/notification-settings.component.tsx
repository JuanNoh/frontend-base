import { Switch } from '@/components/ui/switch/switch.component';
import { DemoCard } from '@/features/quantum-ui/components/demo-card/demo-card.component';
import { NOTIFICATION_OPTIONS } from '../../data/notifications';
import { useNotificationSettings } from '../../hooks/useNotificationSettings';
import {
	notificationListStyles,
	notificationRowStyles,
} from './notification-settings.styles';

export function NotificationSettings() {
	const settings = useNotificationSettings();

	return (
		<DemoCard title="Qué te avisamos">
			<ul className={notificationListStyles()}>
				{NOTIFICATION_OPTIONS.map((option) => (
					<li key={option.id} className={notificationRowStyles()}>
						<span>
							<b>{option.title}</b>
							<small>{option.description}</small>
						</span>
						<Switch
							aria-label={option.title}
							checked={settings.isEnabled(option.id)}
							onCheckedChange={() => settings.toggle(option.id)}
						/>
					</li>
				))}
			</ul>
		</DemoCard>
	);
}
