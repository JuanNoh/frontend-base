import { createFileRoute } from '@tanstack/react-router';
import { FundamentalsPage } from '@/features/quantum-ui/fundamentals.page';

export const Route = createFileRoute('/ui/fundamentos')({
	component: FundamentalsPage,
});
