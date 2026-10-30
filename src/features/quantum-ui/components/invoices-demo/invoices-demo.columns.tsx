import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge/badge.component';
import type { BadgeProps } from '@/components/ui/badge/badge.types';
import type { DataTableColumn } from '@/components/ui/data-table/data-table.types';
import { formatMoney } from '@/lib/format';
import type { Invoice, InvoiceStatus } from '../../types/invoice.types';
import {
	invoiceClientNameStyles,
	invoiceClientStyles,
	invoiceFolioStyles,
	invoiceRfcStyles,
	invoiceTotalStyles,
} from './invoices-demo.styles';

const STATUS_TONE: Record<InvoiceStatus, BadgeProps['tone']> = {
	Pagada: 'success',
	'Por cobrar': 'warning',
	Parcial: 'info',
	Cancelada: 'danger',
};

export const INVOICE_COLUMNS: DataTableColumn<Invoice>[] = [
	{
		key: 'folio',
		header: 'Folio',
		sortValue: (row) => row.folio,
		render: (row) => <span className={invoiceFolioStyles()}>{row.folio}</span>,
	},
	{
		key: 'client',
		header: 'Cliente',
		sortValue: (row) => row.client,
		render: (row) => (
			<span className={invoiceClientStyles()}>
				<span className={invoiceClientNameStyles()}>{row.client}</span>
				<span className={invoiceRfcStyles()}>{row.rfc}</span>
			</span>
		),
	},
	{
		key: 'issuedAt',
		header: 'Fecha',
		sortValue: (row) => row.issuedAt,
		render: (row) => format(parseISO(row.issuedAt), 'd MMM yyyy', { locale: es }),
	},
	{
		key: 'method',
		header: 'Método',
		render: (row) => (
			<Badge tone={row.method === 'PPD' ? 'info' : 'neutral'}>{row.method}</Badge>
		),
	},
	{
		key: 'status',
		header: 'Estado',
		render: (row) => (
			<Badge tone={STATUS_TONE[row.status]} dot>
				{row.status}
			</Badge>
		),
	},
	{
		key: 'total',
		header: 'Total',
		align: 'right',
		sortValue: (row) => row.total,
		render: (row) => (
			<span
				data-cancelled={row.status === 'Cancelada' || undefined}
				className={invoiceTotalStyles()}
			>
				{formatMoney(row.total)}
			</span>
		),
	},
];
