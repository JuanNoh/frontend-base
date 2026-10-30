import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage } from '@/features/screens/dashboard.page';

export const Route = createFileRoute('/ui/')({
	component: DashboardPage,
});
