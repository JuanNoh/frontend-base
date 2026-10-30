import { useCanGoBack, useRouter } from '@tanstack/react-router';

export function useGoBack() {
	const router = useRouter();
	const canGoBack = useCanGoBack();

	return () => (canGoBack ? router.history.back() : router.navigate({ to: '/' }));
}
