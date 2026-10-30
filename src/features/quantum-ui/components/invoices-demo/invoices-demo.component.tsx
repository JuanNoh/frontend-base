import { Download, Plus, Send } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { DataTable } from '@/components/ui/data-table/data-table.component';
import { SAMPLE_INVOICES } from '../../data/invoices';
import { useInvoicesDemo } from '../../hooks/useInvoicesDemo';
import { INVOICE_COLUMNS } from './invoices-demo.columns';
import { invoicesGrandTotalStyles } from './invoices-demo.styles';

export function InvoicesDemo() {
	const demo = useInvoicesDemo();

	return (
		<DataTable
			rows={SAMPLE_INVOICES}
			columns={INVOICE_COLUMNS}
			getRowId={(row) => row.folio}
			searchText={demo.searchText}
			searchPlaceholder="Buscar folio, cliente o RFC"
			pageSize={5}
			actions={
				<>
					<Button size="sm" variant="secondary" onClick={demo.exportAll}>
						<Download />
						Exportar
					</Button>
					<Button size="sm" onClick={demo.createInvoice}>
						<Plus />
						Nueva
					</Button>
				</>
			}
			selectionActions={(ids) => (
				<>
					<Button
						size="sm"
						variant="secondary"
						onClick={() => demo.downloadXml(ids)}
					>
						<Download />
						XML
					</Button>
					<Button
						size="sm"
						variant="secondary"
						onClick={() => demo.sendToClients(ids)}
					>
						<Send />
						Enviar
					</Button>
				</>
			)}
			footer={(rows) => (
				<>
					<span>{rows.length} de 397 · datos de ejemplo</span>
					<span className={invoicesGrandTotalStyles()}>
						Total {demo.totalOf(rows)}
					</span>
				</>
			)}
		/>
	);
}
