import { useState } from 'react';
import { NOTIFICATION_OPTIONS } from '../data/notifications';

export function useNotificationSettings() {
	const [enabled, setEnabled] = useState(
		() =>
			new Set(
				NOTIFICATION_OPTIONS.filter((option) => option.defaultOn).map(
					(option) => option.id
				)
			)
	);

	return {
		isEnabled: (id: string) => enabled.has(id),
		toggle: (id: string) =>
			setEnabled((current) => {
				const next = new Set(current);
				if (next.has(id)) next.delete(id);
				else next.add(id);
				return next;
			}),
	};
}
