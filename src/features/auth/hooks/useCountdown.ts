import { useEffect, useState } from 'react';
import { formatClock } from '@/lib/format';

export function useCountdown() {
	const [remaining, setRemaining] = useState(0);

	useEffect(() => {
		if (remaining <= 0) return;
		const timer = window.setTimeout(() => setRemaining((value) => value - 1), 1000);
		return () => window.clearTimeout(timer);
	}, [remaining]);

	return {
		remaining,
		isRunning: remaining > 0,
		clock: formatClock(remaining),
		start: setRemaining,
	};
}
