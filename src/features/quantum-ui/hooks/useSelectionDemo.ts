import { useState } from 'react';
import { formatMoney } from '@/lib/format';

export function useSelectionDemo(total = 126400) {
	const [tolerance, setTolerance] = useState([5]);
	const [installments, setInstallments] = useState(3);

	return {
		tolerance,
		setTolerance,
		toleranceLabel: `±${formatMoney(tolerance[0] ?? 0)}`,
		installments,
		setInstallments,
		installmentLabel:
			installments === 1
				? `Un solo pago de ${formatMoney(total)}`
				: `${installments} pagos de ${formatMoney(total / installments)}`,
	};
}
