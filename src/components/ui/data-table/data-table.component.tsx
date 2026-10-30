import { ArrowUpDown, Search } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox/checkbox.component';
import { Input } from '@/components/ui/input/input.component';
import { Pagination } from '@/components/ui/pagination/pagination.component';
import { DataTableColumns } from './data-table-columns.component';
import { DataTableFilters } from './data-table-filters.component';
import {
	dataTableActionsStyles,
	dataTableBodyStyles,
	dataTableCellStyles,
	dataTableEmptyStyles,
	dataTableFooterStyles,
	dataTableHeaderStyles,
	dataTableHeadStyles,
	dataTablePagerStyles,
	dataTableRowStyles,
	dataTableScrollStyles,
	dataTableSearchStyles,
	dataTableSelectionStyles,
	dataTableSortStyles,
	dataTableStyles,
	dataTableTableStyles,
	dataTableToolbarStyles,
} from './data-table.styles';
import type { DataTableProps } from './data-table.types';
import { useDataTable } from './useDataTable';

export function DataTable<T>({
	rows,
	columns,
	getRowId,
	searchText,
	searchPlaceholder = 'Buscar…',
	actions,
	selectionActions,
	footer,
	emptyMessage = 'Nada coincide con la búsqueda.',
	pageSize,
	server,
	filters,
	onRowClick,
}: DataTableProps<T>) {
	const table = useDataTable({
		rows,
		columns,
		getRowId,
		searchText,
		pageSize,
		server,
		filters,
		onRowClick,
	});

	return (
		<div className={dataTableStyles()}>
			<div className={dataTableToolbarStyles()}>
				{(searchText || server) && (
					<Input
						aria-label={searchPlaceholder}
						placeholder={searchPlaceholder}
						leading={<Search />}
						value={table.query}
						onChange={(event) => table.setQuery(event.target.value)}
						className={dataTableSearchStyles()}
					/>
				)}
				{filters && (
					<DataTableFilters
						filters={filters}
						values={table.filterValues}
						onChange={table.setFilter}
						onClear={table.clearFilters}
					/>
				)}
				<div className={dataTableActionsStyles()}>
					{table.hideableColumns.length > 0 && (
						<DataTableColumns
							columns={table.hideableColumns}
							hidden={table.hiddenColumns}
							onToggle={table.toggleColumn}
						/>
					)}
					{actions}
				</div>
			</div>
			{table.selectedIds.length > 0 && (
				<div className={dataTableSelectionStyles()}>
					<span>
						{table.selectedIds.length}{' '}
						{table.selectedIds.length === 1
							? 'seleccionada'
							: 'seleccionadas'}
					</span>
					<div className={dataTableActionsStyles()}>
						{selectionActions?.(table.selectedIds)}
					</div>
				</div>
			)}
			<div className={dataTableScrollStyles()}>
				<table aria-busy={table.isBusy} className={dataTableTableStyles()}>
					<thead className={dataTableHeaderStyles()}>
						<tr>
							<th className={dataTableHeadStyles({ select: true })}>
								<Checkbox
									checked={table.allChecked}
									onCheckedChange={table.toggleAll}
									aria-label="Seleccionar todas"
								/>
							</th>
							{table.shownColumns.map((column) => (
								<th
									key={column.key}
									className={dataTableHeadStyles({
										align: column.align,
									})}
								>
									{column.sortValue || column.sortable ? (
										<button
											type="button"
											onClick={() => table.sortBy(column.key)}
											className={dataTableSortStyles()}
										>
											{column.header}
											<ArrowUpDown />
										</button>
									) : (
										column.header
									)}
								</th>
							))}
						</tr>
					</thead>
					<tbody className={dataTableBodyStyles()}>
						{table.visibleRows.length === 0 && (
							<tr>
								<td
									colSpan={table.shownColumns.length + 1}
									className={dataTableEmptyStyles()}
								>
									{emptyMessage}
								</td>
							</tr>
						)}
						{table.pageRows.map((row) => {
							const id = getRowId(row);
							const isSelected = table.isSelected(id);

							return (
								<tr
									key={id}
									data-selected={isSelected || undefined}
									className={dataTableRowStyles()}
									{...table.rowProps(row)}
								>
									<td
										onClick={(event) => event.stopPropagation()}
										className={dataTableCellStyles({ select: true })}
									>
										<Checkbox
											checked={isSelected}
											onCheckedChange={() => table.toggleRow(id)}
											aria-label={`Seleccionar ${id}`}
										/>
									</td>
									{table.shownColumns.map((column) => (
										<td
											key={column.key}
											data-label={column.header}
											className={dataTableCellStyles({
												align: column.align,
												hideOnMobile: column.hideOnMobile,
											})}
										>
											{column.render(row)}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{footer && (
				<div className={dataTableFooterStyles()}>{footer(table.visibleRows)}</div>
			)}
			<Pagination
				page={table.page}
				pageCount={table.pageCount}
				onPageChange={table.setPage}
				className={dataTablePagerStyles()}
			/>
		</div>
	);
}
