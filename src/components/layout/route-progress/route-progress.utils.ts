import type { Variants } from 'motion/react';

export const ROUTE_PROGRESS: Variants = {
	loading: {
		scaleX: [0, 0.82],
		opacity: 1,
		transition: {
			scaleX: { duration: 3.2, ease: [0.12, 0.7, 0.2, 1] },
			opacity: { duration: 0.15, delay: 0.12 },
		},
	},
	idle: {
		scaleX: 1,
		opacity: 0,
		transition: {
			scaleX: { duration: 0.22, ease: 'easeOut' },
			opacity: { duration: 0.3, delay: 0.18 },
		},
	},
};
