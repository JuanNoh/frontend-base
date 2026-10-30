import type { PointerEvent } from 'react';
import { useMotionValue, useSpring, useTransform } from 'motion/react';

export function useTilt(strength = 16) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { stiffness: 220, damping: 18 });
	const springY = useSpring(y, { stiffness: 220, damping: 18 });

	return {
		rotateX: useTransform(springY, (value) => value * -strength),
		rotateY: useTransform(springX, (value) => value * strength),
		onPointerMove: (event: PointerEvent<HTMLElement>) => {
			const bounds = event.currentTarget.getBoundingClientRect();
			x.set((event.clientX - bounds.left) / bounds.width - 0.5);
			y.set((event.clientY - bounds.top) / bounds.height - 0.5);
		},
		onPointerLeave: () => {
			x.set(0);
			y.set(0);
		},
	};
}
