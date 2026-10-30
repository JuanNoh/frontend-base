import { useMemo, useState } from 'react';

const EMPLOYEES = [
	{ name: 'Ana Pech', time: '08:57' },
	{ name: 'Luis Canché', time: '07:52' },
	{ name: 'Karla Dzib', time: '09:04' },
	{ name: 'Beto Uc', time: '08:31' },
	{ name: 'Mónica Chan', time: '08:12' },
];

type ReorderKey = 'time' | 'name';

export function useReorderDemo() {
	const [sortBy, setSortBy] = useState<ReorderKey>('time');

	const employees = useMemo(
		() =>
			[...EMPLOYEES].sort((a, b) =>
				sortBy === 'time'
					? a.time.localeCompare(b.time)
					: a.name.localeCompare(b.name, 'es')
			),
		[sortBy]
	);

	return { employees, sortBy, setSortBy };
}
