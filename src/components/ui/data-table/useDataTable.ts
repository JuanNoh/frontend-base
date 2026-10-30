import { useMemo, useState } from 'react';
import type { DataTableOptions, SortState } from './data-table.types';
import { filterRows, nextSort, sortRows } from './data-table.utils';

export function useDataTable<T>({
	rows,
	columns,
	getRowId,
	searchText,
	pageSize,
	server,
}: DataTableOptions<T>) {
	const [query, setQuery] = useState('');
	const [sort, setSort] = useState<SortState | null>(null);
	const [selected, setSelected] = useState<Set<string>>(() => new Set());
	const [page, setPage] = useState(1);

	const visibleRows = useMemo(
		() =>
			server ? rows : sortRows(filterRows(rows, query, searchText), columns, sort),
		[rows, query, searchText, columns, sort, server]
	);
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
