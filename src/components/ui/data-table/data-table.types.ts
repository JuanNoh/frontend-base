import type { ReactNode } from 'react';
import type { SelectOption } from '@/components/ui/select/select.types';

export interface DataTableColumn<T> {
	key: string;
	header: string;
	align?: 'left' | 'right';
	sortValue?: (row: T) => string | number;
	sortable?: boolean;
	hideable?: boolean;
	hideOnMobile?: boolean;
	render: (row: T) => ReactNode;
}

export interface DataTableFilter<T> {
	key: string;
	label: string;
	options: SelectOption[];
	value: (row: T) => string;
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
	filters?: DataTableFilter<T>[];
	onRowClick?: (row: T) => void;
}

export interface DataTableFiltersProps<T> {
	filters: DataTableFilter<T>[];
	values: Record<string, string>;
	onChange: (key: string, value: string) => void;
	onClear: () => void;
}

export interface DataTableColumnsProps<T> {
	columns: DataTableColumn<T>[];
	hidden: Set<string>;
	onToggle: (key: string) => void;
}

export type DataTableOptions<T> = Pick<
	DataTableProps<T>,
	| 'rows'
	| 'columns'
	| 'getRowId'
	| 'searchText'
	| 'pageSize'
	| 'server'
	| 'filters'
	| 'onRowClick'
>;
