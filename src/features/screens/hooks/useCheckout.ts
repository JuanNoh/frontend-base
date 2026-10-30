import { useState, type ChangeEvent, type MouseEvent } from 'react';
import { parseNumber } from '@/components/ui/number-input/number-input.utils';
import { POS_PRODUCTS } from '@/features/quantum-ui/data/verticals/pos';
import { usePosDemo } from '@/features/quantum-ui/hooks/usePosDemo';
import { celebrate } from '@/lib/confetti';
import { ALL_CATEGORIES, categoryOptions, filterProducts } from '../screens.utils';

export function useCheckout() {
	const pos = usePosDemo();
	const [query, setQuery] = useState('');
	const [category, setCategory] = useState(ALL_CATEGORIES);
	const [isPaying, setIsPaying] = useState(false);
	const [received, setReceived] = useState('');

	const receivedAmount = parseNumber(received) ?? 0;
	const isCash = pos.payment === 'efectivo';

	return {
		pos,
		query,
		category,
		setCategory,
		changeQuery: (event: ChangeEvent<HTMLInputElement>) =>
			setQuery(event.target.value),
		categories: categoryOptions(POS_PRODUCTS),
		products: filterProducts(POS_PRODUCTS, query, category),
		isPaying,
		isCash,
		received,
		change: Math.max(receivedAmount - pos.totalValue, 0),
		canConfirm: !isCash || receivedAmount >= pos.totalValue,
		openPayment: () => setIsPaying(true),
		closePayment: () => setIsPaying(false),
		changeReceived: (event: ChangeEvent<HTMLInputElement>) =>
			setReceived(event.target.value),
		pickBill: (amount: number) => setReceived(String(amount)),
		confirm: (event: MouseEvent<HTMLButtonElement>) => {
			celebrate(event.currentTarget);
			pos.charge();
			setIsPaying(false);
			setReceived('');
		},
	};
}
