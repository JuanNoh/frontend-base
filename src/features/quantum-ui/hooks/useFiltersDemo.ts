import { useState } from 'react';
import { toast } from 'sonner';

export const STATUS_FILTERS = ['Pagada', 'Por cobrar', 'Parcial', 'Cancelada'];

export function useFiltersDemo() {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState<string[]>(['Por cobrar']);

	return {
		isOpen,
		setIsOpen,
		selected,
		isChecked: (status: string) => selected.includes(status),
		toggle: (status: string) =>
			setSelected((current) =>
				current.includes(status)
					? current.filter((item) => item !== status)
					: [...current, status]
			),
		clear: () => setSelected([]),
		apply: () => {
			setIsOpen(false);
			toast.info(`${selected.length} filtros aplicados`, {
				description: selected.join(', ') || 'Sin filtros',
			});
		},
	};
}
