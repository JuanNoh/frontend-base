import { createFileRoute } from '@tanstack/react-router';
import { EffectsPage } from '@/features/quantum-ui/effects.page';

export const Route = createFileRoute('/ui/efectos')({
	component: EffectsPage,
});
