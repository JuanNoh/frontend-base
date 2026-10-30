import { DataTable } from '@/components/ui/data-table/data-table.component';
import type { DataTableColumn } from '@/components/ui/data-table/data-table.types';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import type { SegmentedOption } from '@/components/ui/segmented/segmented.types';
import { formatMoney } from '@/lib/format';
import { BACKENDS, type BackendStyle } from '../../data/backends';
import { useBackendDemo } from '../../hooks/useBackendDemo';
import type { Invoice } from '../../types/invoice.types';
import { DemoCard } from '../demo-card/demo-card.component';
import {
	backendTotalStyles,
	backendWireLabelStyles,
	backendWireStyles,
	backendWireValueStyles,
} from './backend-table-demo.styles';

const STYLES = Object.entries(BACKENDS).map(([value, backend]) => ({
	value,
	label: backend.label,
})) as SegmentedOption<BackendStyle>[];

const COLUMNS: DataTableColumn<Invoice>[] = [
	{ key: 'folio', header: 'Folio', sortable: true, render: (row) => row.folio },
	{ key: 'client', header: 'Cliente', sortable: true, render: (row) => row.client },
	{
		key: 'total',
		header: 'Total',
		align: 'right',
		sortable: true,
		render: (row) => formatMoney(row.total),
	},
];

export function BackendTableDemo() {
	const demo = useBackendDemo();

	return (
		<DemoCard
			title="Un hook, cualquier backend"
			aside={
				<Segmented
					aria-label="Formato del backend"
					value={demo.style}
					onValueChange={demo.setStyle}
					options={STYLES}
				/>
			}
		>
			<div className={backendWireStyles()}>
				<span className={backendWireLabelStyles()}>Pide</span>
				<span className={backendWireValueStyles()}>{demo.request}</span>
				<span className={backendWireLabelStyles()}>Recibe</span>
				<span className={backendWireValueStyles()}>{demo.response}</span>
			</div>
			<DataTable
				rows={demo.list.rows}
				columns={COLUMNS}
				getRowId={(row) => row.folio}
				searchPlaceholder="Buscar en el servidor"
				server={demo.list.table}
				emptyMessage={demo.list.isLoading ? 'Cargando…' : 'Sin resultados.'}
				footer={() => (
					<span className={backendTotalStyles()}>
						{demo.list.total} facturas en el servidor
					</span>
				)}
			/>
		</DemoCard>
	);
}
