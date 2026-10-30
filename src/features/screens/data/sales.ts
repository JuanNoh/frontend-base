import type { DataTableFilter } from '@/components/ui/data-table/data-table.types';
import type { Invoice } from '@/features/quantum-ui/types/invoice.types';

export const SALES_FILTERS: DataTableFilter<Invoice>[] = [
	{
		key: 'status',
		label: 'Estado',
		value: (row) => row.status,
		options: [
			{ value: 'Pagada', label: 'Pagada' },
			{ value: 'Por cobrar', label: 'Por cobrar' },
			{ value: 'Parcial', label: 'Parcial' },
			{ value: 'Cancelada', label: 'Cancelada' },
		],
	},
	{
		key: 'method',
		label: 'Método',
		value: (row) => row.method,
		options: [
			{ value: 'PUE', label: 'Una exhibición' },
			{ value: 'PPD', label: 'Parcialidades' },
		],
	},
];
