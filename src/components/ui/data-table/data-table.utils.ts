import type { DataTableColumn, DataTableFilter, SortState } from './data-table.types';

export const ALL_FILTER = 'todos';

export function applyFilters<T>(
	rows: T[],
	filters: DataTableFilter<T>[],
	values: Record<string, string>
) {
	const active = filters.filter(
		(filter) => values[filter.key] && values[filter.key] !== ALL_FILTER
	);
	return rows.filter((row) =>
		active.every((filter) => filter.value(row) === values[filter.key])
	);
}

export function filterRows<T>(rows: T[], query: string, searchText?: (row: T) => string) {
	const needle = query.trim().toLowerCase();
	if (!needle || !searchText) return rows;
	return rows.filter((row) => searchText(row).toLowerCase().includes(needle));
}

export function sortRows<T>(
	rows: T[],
	columns: DataTableColumn<T>[],
	sort: SortState | null
) {
	const sortValue =
		sort && columns.find((column) => column.key === sort.key)?.sortValue;
	if (!sort || !sortValue) return rows;

	return [...rows].sort((a, b) => {
		const left = sortValue(a);
		const right = sortValue(b);
		if (left === right) return 0;
		return (left > right ? 1 : -1) * sort.direction;
	});
}

export function nextSort(current: SortState | null, key: string): SortState {
	if (current?.key !== key) return { key, direction: 1 };
	return { key, direction: current.direction === 1 ? -1 : 1 };
}
