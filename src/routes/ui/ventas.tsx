import { createFileRoute } from '@tanstack/react-router';
import { SalesPage } from '@/features/screens/sales.page';

export const Route = createFileRoute('/ui/ventas')({
	component: SalesPage,
});
