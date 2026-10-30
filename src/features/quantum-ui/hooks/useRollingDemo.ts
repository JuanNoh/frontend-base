import { useState } from 'react';
import { formatMoney } from '@/lib/format';

export function useRollingDemo() {
	const [amount, setAmount] = useState(48720);

	return {
		value: formatMoney(amount),
		charge: () => setAmount((current) => current + 12300 + ((current * 7) % 900)),
		refund: () => setAmount((current) => Math.max(0, current - 9860)),
	};
}
