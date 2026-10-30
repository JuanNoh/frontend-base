import { Columns3 } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { Checkbox } from '@/components/ui/checkbox/checkbox.component';
import { Popover } from '@/components/ui/popover/popover.component';
import { dataTableColumnOptionStyles, dataTableColumnsStyles } from './data-table.styles';
import type { DataTableColumnsProps } from './data-table.types';

export function DataTableColumns<T>({
	columns,
	hidden,
	onToggle,
}: DataTableColumnsProps<T>) {
	return (
		<Popover
			align="end"
			trigger={
				<Button variant="secondary" size="sm">
					<Columns3 />
					Columnas
				</Button>
			}
		>
			<div className={dataTableColumnsStyles()}>
				{columns.map((column) => (
					<label key={column.key} className={dataTableColumnOptionStyles()}>
						<Checkbox
							checked={!hidden.has(column.key)}
							onCheckedChange={() => onToggle(column.key)}
						/>
						{column.header}
					</label>
				))}
			</div>
		</Popover>
	);
}
