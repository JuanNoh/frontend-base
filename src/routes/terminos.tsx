import { createFileRoute } from '@tanstack/react-router';
import { TermsPage } from '@/features/legal/legal.page';

export const Route = createFileRoute('/terminos')({
	component: TermsPage,
});
