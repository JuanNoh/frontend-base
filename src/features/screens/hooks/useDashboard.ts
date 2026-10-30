import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { toast } from 'sonner';
import { DEMO_USER } from '@/features/quantum-ui/data/shell';
import { useWorkspace } from '@/features/quantum-ui/hooks/useWorkspace';
import { useAuthStore } from '@/stores/auth.store';
import { greetingFor } from '../screens.utils';

export function useDashboard() {
	const { workspace, vertical } = useWorkspace();
	const fullName = useAuthStore((state) => state.user?.fullName);
	const now = new Date();

	return {
		vertical,
		today: format(now, "EEEE d 'de' MMMM", { locale: es }),
		greeting: `${greetingFor(now.getHours())}, ${fullName ?? DEMO_USER.name}`,
		summary: `Así va ${workspace.name} hoy.`,
		exportReport: () =>
			toast.success('Reporte en camino', {
				description: 'Te avisamos cuando esté listo para descargar.',
			}),
		createRecord: () =>
			toast.success('Borrador creado', {
				description: 'Puedes terminarlo cuando quieras.',
			}),
	};
}
