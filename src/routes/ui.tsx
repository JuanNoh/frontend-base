import { createFileRoute } from '@tanstack/react-router';
import { QuantumShell } from '@/features/quantum-ui/components/quantum-shell/quantum-shell.component';

export const Route = createFileRoute('/ui')({
	component: QuantumShell,
});
