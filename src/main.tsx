import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorPage } from './features/system/error.page';
import { NotFoundPage } from './features/system/not-found.page';
import { PendingPage } from './features/system/pending.page';
import { queryClient } from './lib/query-client';
import { initAppearance } from './lib/appearance';
import { pageTransitionTypes } from './lib/page-transition';
import { routeTree } from './routeTree.gen';
import './index.css';

initAppearance();

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: NotFoundPage,
	defaultErrorComponent: ErrorPage,
	defaultPendingComponent: PendingPage,
	defaultPendingMs: 600,
	defaultViewTransition: { types: pageTransitionTypes },
	scrollRestoration: true,
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
