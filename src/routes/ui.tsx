import { createFileRoute } from '@tanstack/react-router';
import { QuantumUiPage } from '@/features/quantum-ui/quantum-ui.page';

export const Route = createFileRoute('/ui')({
	component: QuantumUiPage,
});
