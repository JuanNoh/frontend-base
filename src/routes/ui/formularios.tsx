import { createFileRoute } from '@tanstack/react-router';
import { FormsPage } from '@/features/quantum-ui/forms.page';

export const Route = createFileRoute('/ui/formularios')({
	component: FormsPage,
});
