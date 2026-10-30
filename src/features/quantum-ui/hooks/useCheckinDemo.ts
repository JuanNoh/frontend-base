import { useEffect, useState } from 'react';
import { celebrate } from '@/lib/confetti';

type CheckinState = 'idle' | 'ok' | 'birthday' | 'rejected';

export function useCheckinDemo() {
	const [state, setState] = useState<CheckinState>('idle');
	const [attempt, setAttempt] = useState(0);
	const [anchor, setAnchor] = useState<HTMLElement | null>(null);

	useEffect(() => {
		if (state === 'idle') return;
		const timer = window.setTimeout(() => setState('idle'), 4200);
		return () => window.clearTimeout(timer);
	}, [state, attempt]);

	const check = (next: CheckinState) => {
		setState(next);
		setAttempt((current) => current + 1);
		if (next === 'birthday') celebrate(anchor);
	};

	return { state, attempt, check, setAnchor };
}
