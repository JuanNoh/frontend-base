import { createFileRoute } from '@tanstack/react-router';
import { simulateServerError } from '@/features/quantum-ui/quantum-ui.utils';

export const Route = createFileRoute('/ui_/error')({
	loader: simulateServerError,
});
