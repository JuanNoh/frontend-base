import { createFileRoute } from '@tanstack/react-router';
import { CheckoutPage } from '@/features/screens/checkout.page';

export const Route = createFileRoute('/ui/caja')({
	component: CheckoutPage,
});
