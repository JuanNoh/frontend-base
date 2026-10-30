import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPage } from '@/features/legal/legal.page';

export const Route = createFileRoute('/privacidad')({
	component: PrivacyPage,
});
