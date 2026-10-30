import { createFileRoute } from '@tanstack/react-router';
import { BusinessPage } from '@/features/quantum-ui/business.page';

export const Route = createFileRoute('/ui/datos')({
	component: BusinessPage,
});
