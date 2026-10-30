import { useNavigate, useRouter } from '@tanstack/react-router';

export function useSystemDemo() {
	const router = useRouter();
	const navigate = useNavigate();

	return {
		openNotFound: () => router.history.push('/ui/esta-pagina-no-existe'),
		openError: () => navigate({ to: '/ui/error' }),
		openSlow: () => navigate({ to: '/ui/lento' }),
	};
}
