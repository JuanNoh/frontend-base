import type { useCheckout } from '../../hooks/useCheckout';

export interface PaymentModalProps {
	checkout: ReturnType<typeof useCheckout>;
}
