import {
	useNavigate,
	useRouter,
	useRouterState,
	type ErrorComponentProps,
} from '@tanstack/react-router';
import { toast } from 'sonner';
import { describeError } from '../system.utils';

export function useErrorScreen({ error, reset }: ErrorComponentProps) {
	const router = useRouter();
	const navigate = useNavigate();
	const path = useRouterState({ select: (state) => state.location.href });
	const copy = describeError(error, path);

	const retry = () => {
		reset();
		void router.invalidate();
	};

	const copyDetails = async () => {
		try {
			await navigator.clipboard.writeText(
				`${copy.details}\nFecha: ${new Date().toISOString()}`
			);
			toast.success('Detalles copiados');
		} catch {
			toast.error('No se pudieron copiar los detalles');
		}
	};

	return { ...copy, retry, copyDetails, goHome: () => navigate({ to: '/' }) };
}
