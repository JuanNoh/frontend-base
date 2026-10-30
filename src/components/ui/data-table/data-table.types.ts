import type { ReactNode } from 'react';

export interface DataTableColumn<T> {
	key: string;
	header: string;
	align?: 'left' | 'right';
	sortValue?: (row: T) => string | number;
	sortable?: boolean;
	render: (row: T) => ReactNode;
}

export interface SortState {
	key: string;
	direction: 1 | -1;
}

export interface DataTableServer {
	page: number;
	pageCount: number;
	query: string;
	isFetching: boolean;
	onPageChange: (page: number) => void;
	onQueryChange: (query: string) => void;
	onSortChange: (key: string) => void;
}

export interface DataTableProps<T> {
	rows: T[];
	columns: DataTableColumn<T>[];
	getRowId: (row: T) => string;
	searchText?: (row: T) => string;
	searchPlaceholder?: string;
	actions?: ReactNode;
	selectionActions?: (selectedIds: string[]) => ReactNode;
	footer?: (visibleRows: T[]) => ReactNode;
	emptyMessage?: string;
	pageSize?: number;
	server?: DataTableServer;
}

export type DataTableOptions<T> = Pick<
	DataTableProps<T>,
	'rows' | 'columns' | 'getRowId' | 'searchText' | 'pageSize' | 'server'
>;
