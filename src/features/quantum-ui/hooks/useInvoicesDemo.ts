import { toast } from 'sonner';
import { formatMoney } from '@/lib/format';
import type { Invoice } from '../types/invoice.types';

export function useInvoicesDemo() {
	return {
		searchText: (row: Invoice) => `${row.folio} ${row.client} ${row.rfc}`,
		exportAll: () =>
			toast.success('Exportando 397 facturas', {
				description: 'Te avisamos cuando el Excel esté listo.',
			}),
		createInvoice: () =>
			toast.success('Borrador creado', { description: 'Folio A-1043 reservado.' }),
		downloadXml: (ids: string[]) =>
			toast.success(`${ids.length} XML listos`, { description: ids.join(', ') }),
		sendToClients: (ids: string[]) =>
			toast.info('Correos en cola', {
				description: `Se enviarán ${ids.length} facturas a sus receptores.`,
			}),
		totalOf: (rows: Invoice[]) =>
			formatMoney(
				rows
					.filter((row) => row.status !== 'Cancelada')
					.reduce((sum, row) => sum + row.total, 0)
			),
	};
}
