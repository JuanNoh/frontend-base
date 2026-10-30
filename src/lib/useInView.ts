import { useEffect, useState } from 'react';

export function useInView<T extends Element>() {
	const [node, setNode] = useState<T | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		if (!node) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setInView(true);
				observer.disconnect();
			},
			{ threshold: 0.25 }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, [node]);

	return { setNode, inView };
}
