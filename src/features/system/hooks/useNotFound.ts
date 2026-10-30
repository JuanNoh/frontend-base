import { useNavigate, useRouter, useRouterState } from '@tanstack/react-router';

export function useNotFound() {
	const router = useRouter();
	const navigate = useNavigate();
	const path = useRouterState({ select: (state) => state.location.href });

	const goHome = () => navigate({ to: '/' });
	const goBack = () => {
		if (router.history.canGoBack()) router.history.back();
		else void goHome();
	};

	return { path, goBack, goHome };
}
