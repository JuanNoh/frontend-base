import { useState } from 'react';
import { CircleDollarSign, Clock3, FileX, ReceiptText } from 'lucide-react';
import { toast } from 'sonner';
import type { StatCardProps } from '@/components/ui/stat-card/stat-card.types';
import { SAMPLE_INVOICES } from '@/features/quantum-ui/data/invoices';
import { useInvoicesDemo } from '@/features/quantum-ui/hooks/useInvoicesDemo';
import type { Invoice } from '@/features/quantum-ui/types/invoice.types';
import { formatMoney } from '@/lib/format';
import { sumInvoices } from '../screens.utils';

const STATS: StatCardProps[] = [
	{
		label: 'Cobrado',
		value: formatMoney(sumInvoices(SAMPLE_INVOICES, ['Pagada'])),
		icon: CircleDollarSign,
		hue: 'green',
		series: [12, 14, 13, 17, 19, 18, 22, 24],
	},
	{
		label: 'Por cobrar',
		value: formatMoney(sumInvoices(SAMPLE_INVOICES, ['Por cobrar', 'Parcial'])),
		icon: Clock3,
		hue: 'orange',
		series: [20, 18, 21, 17, 16, 18, 15, 14],
	},
	{
		label: 'Emitidas',
		value: String(SAMPLE_INVOICES.length),
		icon: ReceiptText,
		hue: 'blue',
		series: [4, 6, 5, 7, 8, 7, 9, 8],
	},
	{
		label: 'Canceladas',
		value: String(
			SAMPLE_INVOICES.filter((invoice) => invoice.status === 'Cancelada').length
		),
		icon: FileX,
		hue: 'pink',
		series: [2, 1, 1, 2, 1, 0, 1, 1],
	},
];

export function useSales() {
	const invoices = useInvoicesDemo();
	const [selected, setSelected] = useState<Invoice>(SAMPLE_INVOICES[0]);
	const [isDetailOpen, setIsDetailOpen] = useState(false);

	return {
		...invoices,
		stats: STATS,
		selected,
		isDetailOpen,
		openDetail: (invoice: Invoice) => {
			setSelected(invoice);
			setIsDetailOpen(true);
		},
		closeDetail: () => setIsDetailOpen(false),
		downloadPdf: () =>
			toast.success('PDF listo', { description: `${selected.folio}.pdf` }),
	};
}
