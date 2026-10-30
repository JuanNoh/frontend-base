import { useId, useState } from 'react';
import type { TabItem } from './tabs.types';

export function useTabs(items: TabItem[], defaultValue?: string) {
	const [value, setValue] = useState(defaultValue ?? items[0]?.value);
	const indicatorId = useId();

	return { value, setValue, indicatorId };
}
