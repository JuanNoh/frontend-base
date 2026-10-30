import { createFileRoute, redirect } from '@tanstack/react-router';
import { simulateSlowLoad } from '@/features/quantum-ui/quantum-ui.utils';

export const Route = createFileRoute('/ui_/lento')({
	loader: async () => {
		await simulateSlowLoad();
		throw redirect({ to: '/ui/superficies', hash: 'pantallas' });
	},
});
