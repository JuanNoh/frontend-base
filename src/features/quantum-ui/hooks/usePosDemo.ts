import { useState } from 'react';
import { toast } from 'sonner';
import { formatMoney } from '@/lib/format';
import { POS_PRODUCTS } from '../data/verticals/pos';
import type { PosPayment } from '../types/pos.types';

const TAX_DIVISOR = 1.16;

export function usePosDemo() {
	const [cart, setCart] = useState<Record<string, number>>({});
	const [payment, setPayment] = useState<PosPayment>('tarjeta');

	const lines = POS_PRODUCTS.filter((product) => cart[product.id]).map((product) => ({
		...product,
		quantity: cart[product.id],
		subtotal: product.price * cart[product.id],
	}));
	const total = lines.reduce((sum, line) => sum + line.subtotal, 0);
	const items = lines.reduce((sum, line) => sum + line.quantity, 0);

	const setQuantity = (id: string, quantity: number) =>
		setCart((current) => {
			const next = { ...current, [id]: quantity };
			if (quantity <= 0) delete next[id];
			return next;
		});

	return {
		lines,
		items,
		total: formatMoney(total),
		totalValue: total,
		tax: formatMoney(total - total / TAX_DIVISOR),
		isEmpty: lines.length === 0,
		payment,
		setPayment,
		setQuantity,
		quantityOf: (id: string) => cart[id] ?? 0,
		add: (id: string) => setQuantity(id, (cart[id] ?? 0) + 1),
		charge: () => {
			toast.success('Venta cobrada', {
				description: `${formatMoney(total)} · ${payment}`,
			});
			setCart({});
		},
	};
}
