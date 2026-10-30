import { useState } from 'react';

export function useReplay() {
	const [round, setRound] = useState(0);

	return { round, replay: () => setRound((current) => current + 1) };
}
