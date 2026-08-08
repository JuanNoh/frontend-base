import { createFileRoute, redirect } from '@tanstack/react-router';
import { LoginPage } from '@/features/auth/login.page';
import { useAuthStore } from '@/stores/auth.store';

export const Route = createFileRoute('/')({
	beforeLoad: () => {
		if (useAuthStore.getState().isAuthenticated) {
			throw redirect({ to: '/posts' });
		}
	},
	component: LoginPage,
});
