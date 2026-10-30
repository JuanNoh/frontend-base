import { lazy, Suspense } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { MotionConfig } from 'motion/react';
import { Tooltip } from 'radix-ui';
import { Toaster } from '@/components/ui/toaster/toaster.component';

const RouteProgress = lazy(() =>
	import('@/components/layout/route-progress/route-progress.component').then(
		({ RouteProgress }) => ({ default: RouteProgress })
	)
);

export const Route = createRootRoute({
	component: () => (
		<MotionConfig reducedMotion="user">
			<Tooltip.Provider delayDuration={300}>
				<Suspense>
					<RouteProgress />
				</Suspense>
				<Outlet />
				<Toaster />
				{import.meta.env.DEV && (
					<TanStackRouterDevtools position="bottom-right" />
				)}
			</Tooltip.Provider>
		</MotionConfig>
	),
});
