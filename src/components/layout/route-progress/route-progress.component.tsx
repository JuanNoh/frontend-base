import { useRouterState } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { routeProgressStyles } from './route-progress.styles';
import { ROUTE_PROGRESS } from './route-progress.utils';

export function RouteProgress() {
	const isLoading = useRouterState({ select: (state) => state.isLoading });

	return (
		<motion.div
			aria-hidden="true"
			className={routeProgressStyles()}
			variants={ROUTE_PROGRESS}
			initial={{ scaleX: 0, opacity: 0 }}
			animate={isLoading ? 'loading' : 'idle'}
		/>
	);
}
