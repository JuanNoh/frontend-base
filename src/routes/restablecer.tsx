import { createFileRoute } from '@tanstack/react-router';
import { ResetPasswordPage } from '@/features/auth/reset-password.page';
import { resetSearchSchema } from '@/features/auth/schemas/login-search.schema';

export const Route = createFileRoute('/restablecer')({
	validateSearch: resetSearchSchema,
	component: ResetPasswordPage,
});
