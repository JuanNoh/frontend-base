import type { PointerEvent } from 'react';

export function useSpotlight() {
	return {
		onPointerMove: (event: PointerEvent<HTMLElement>) => {
			const bounds = event.currentTarget.getBoundingClientRect();
			event.currentTarget.style.setProperty(
				'--mx',
				`${event.clientX - bounds.left}px`
			);
			event.currentTarget.style.setProperty(
				'--my',
				`${event.clientY - bounds.top}px`
			);
		},
	};
}
