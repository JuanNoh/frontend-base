import { Download, Plus, Send } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { DataTable } from '@/components/ui/data-table/data-table.component';
import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { StatCard } from '@/components/ui/stat-card/stat-card.component';
import { INVOICE_COLUMNS } from '@/features/quantum-ui/components/invoices-demo/invoices-demo.columns';
import { invoicesGrandTotalStyles } from '@/features/quantum-ui/components/invoices-demo/invoices-demo.styles';
import { statsGridStyles } from '@/features/quantum-ui/components/stats-demo/stats-demo.styles';
import { SAMPLE_INVOICES } from '@/features/quantum-ui/data/invoices';
import { SaleDetail } from './components/sale-detail/sale-detail.component';
import { SALES_FILTERS } from './data/sales';
import { useSales } from './hooks/useSales';
import { screenStyles } from './screens.styles';

export function SalesPage() {
	const sales = useSales();

	return (
		<div className={screenStyles()}>
			<PageHeader
				title="Ventas"
				description="Busca, filtra y abre cualquier venta para ver su detalle."
				actions={
					<>
						<Button variant="secondary" onClick={sales.exportAll}>
							<Download />
							Exportar
						</Button>
						<Button onClick={sales.createInvoice}>
							<Plus />
							Nueva venta
						</Button>
					</>
				}
			/>
			<div className={statsGridStyles()}>
				{sales.stats.map((stat) => (
					<StatCard key={stat.label} {...stat} />
				))}
			</div>
			<DataTable
				rows={SAMPLE_INVOICES}
				columns={INVOICE_COLUMNS}
				getRowId={(row) => row.folio}
				searchText={sales.searchText}
				searchPlaceholder="Buscar folio, cliente o RFC"
				filters={SALES_FILTERS}
				pageSize={6}
				onRowClick={sales.openDetail}
				selectionActions={(ids) => (
					<Button
						size="sm"
						variant="secondary"
						onClick={() => sales.sendToClients(ids)}
					>
						<Send />
						Enviar
					</Button>
				)}
				footer={(rows) => (
					<>
						<span>{rows.length} ventas</span>
						<span className={invoicesGrandTotalStyles()}>
							Total {sales.totalOf(rows)}
						</span>
					</>
				)}
			/>
			<SaleDetail
				invoice={sales.selected}
				open={sales.isDetailOpen}
				onClose={sales.closeDetail}
				onDownload={sales.downloadPdf}
			/>
		</div>
	);
}
