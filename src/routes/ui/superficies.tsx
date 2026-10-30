import { createFileRoute } from '@tanstack/react-router';
import { SurfacesPage } from '@/features/quantum-ui/surfaces.page';

export const Route = createFileRoute('/ui/superficies')({
	component: SurfacesPage,
});
