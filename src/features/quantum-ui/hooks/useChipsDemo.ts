import { useState } from 'react';

const SAMPLE = [
	'Pagada',
	'IVA 16%',
	'PPD',
	'Retención ISR',
	'Exportación',
	'Anticipo',
	'Nota de crédito',
];

export function useChipsDemo() {
	const [count, setCount] = useState(3);

	return {
		chips: Array.from({ length: count }, (_, index) => ({
			id: index,
			label: SAMPLE[index % SAMPLE.length],
		})),
		add: () => setCount((current) => current + 1),
		reset: () => setCount(3),
	};
}
