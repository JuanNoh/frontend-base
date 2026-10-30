import { createFileRoute } from '@tanstack/react-router';
import { AgendaPage } from '@/features/screens/agenda.page';

export const Route = createFileRoute('/ui/agenda')({
	component: AgendaPage,
});
