import { createFileRoute, redirect } from '@tanstack/react-router';
import { LoginPage } from '@/features/auth/login.page';
import { loginSearchSchema } from '@/features/auth/schemas/login-search.schema';
import { useAuthStore } from '@/stores/auth.store';

export const Route = createFileRoute('/')({
	validateSearch: loginSearchSchema,
	beforeLoad: () => {
		if (useAuthStore.getState().isAuthenticated) throw redirect({ to: '/ui' });
	},
	component: LoginPage,
});
