import { useState } from 'react';
import { useInView } from '@/lib/useInView';

export function useChartHover<T extends Element>() {
	const { setNode, inView } = useInView<T>();
	const [active, setActive] = useState<number | null>(null);

	return { setNode, inView, active, setActive, clear: () => setActive(null) };
}
