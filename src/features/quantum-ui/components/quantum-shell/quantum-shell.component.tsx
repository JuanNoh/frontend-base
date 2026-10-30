import { Outlet } from '@tanstack/react-router';
import { AppShell } from '@/components/layout/app-shell/app-shell.component';
import { useQuantumCommands } from '../../hooks/useQuantumCommands';
import { useQuantumShell } from '../../hooks/useQuantumShell';
import { QUANTUM_NAV } from '../../quantum-nav';

export function QuantumShell() {
	const commands = useQuantumCommands();
	const shell = useQuantumShell();

	return (
		<AppShell
			nav={QUANTUM_NAV}
			commands={commands}
			{...shell}
			brand={{ name: 'Quantum UI', caption: 'Sistema de diseño' }}
		>
			<Outlet />
		</AppShell>
	);
}
