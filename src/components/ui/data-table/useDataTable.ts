import { useMemo, useState, type KeyboardEvent } from 'react';
import type { DataTableOptions, SortState } from './data-table.types';
import { applyFilters, filterRows, nextSort, sortRows } from './data-table.utils';

export function useDataTable<T>({
	rows,
	columns,
	getRowId,
	searchText,
	pageSize,
	server,
	filters = [],
	onRowClick,
}: DataTableOptions<T>) {
	const [query, setQuery] = useState('');
	const [sort, setSort] = useState<SortState | null>(null);
	const [selected, setSelected] = useState<Set<string>>(() => new Set());
	const [page, setPage] = useState(1);
	const [filterValues, setFilterValues] = useState<Record<string, string>>({});
	const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(() => new Set());

	const visibleRows = useMemo(() => {
		if (server) return rows;
		const filtered = applyFilters(rows, filters, filterValues);
		return sortRows(filterRows(filtered, query, searchText), columns, sort);
	}, [rows, query, searchText, columns, sort, server, filters, filterValues]);
	const localPageCount = pageSize ? Math.ceil(visibleRows.length / pageSize) || 1 : 1;
	const localPage = Math.min(page, localPageCount);
	const pageRows =
		pageSize && !server
			? visibleRows.slice((localPage - 1) * pageSize, localPage * pageSize)
			: visibleRows;
	const visibleIds = visibleRows.map(getRowId);
	const selectedVisible = visibleIds.filter((id) => selected.has(id)).length;
	const allChecked: boolean | 'indeterminate' =
		selectedVisible === 0
			? false
			: selectedVisible === visibleIds.length
				? true
				: 'indeterminate';

	const toggleColumn = (key: string) =>
		setHiddenColumns((current) => {
			const next = new Set(current);
			if (next.has(key)) next.delete(key);
			else next.add(key);
			return next;
		});

	const toggleRow = (id: string) =>
		setSelected((current) => {
			const next = new Set(current);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});

	const toggleAll = () =>
		setSelected((current) => {
			const next = new Set(current);
			visibleIds.forEach((id) =>
				allChecked === true ? next.delete(id) : next.add(id)
			);
			return next;
		});

	return {
		filterValues,
		setFilter: (key: string, value: string) => {
			setFilterValues((current) => ({ ...current, [key]: value }));
			setPage(1);
		},
		clearFilters: () => {
			setFilterValues({});
			setPage(1);
		},
		hiddenColumns,
		toggleColumn,
		shownColumns: columns.filter((column) => !hiddenColumns.has(column.key)),
		hideableColumns: columns.filter((column) => column.hideable),
		rowProps: (row: T) =>
			onRowClick
				? {
						tabIndex: 0,
						'data-clickable': true,
						onClick: () => onRowClick(row),
						onKeyDown: (event: KeyboardEvent) => {
							if (event.key === 'Enter') onRowClick(row);
						},
					}
				: {},
		query: server?.query ?? query,
		setQuery: (next: string) => {
			if (server) return server.onQueryChange(next);
			setQuery(next);
			setPage(1);
		},
		sort,
		sortBy: (key: string) => {
			if (server) return server.onSortChange(key);
			setSort((current) => nextSort(current, key));
			setPage(1);
		},
		visibleRows,
		pageRows,
		page: server?.page ?? localPage,
		pageCount: server?.pageCount ?? localPageCount,
		setPage: server?.onPageChange ?? setPage,
		isBusy: server?.isFetching ?? false,
		selected,
		selectedIds: [...selected],
		isSelected: (id: string) => selected.has(id),
		toggleRow,
		toggleAll,
		allChecked,
	};
}
