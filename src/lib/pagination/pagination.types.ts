export interface PageSort {
	key: string;
	direction: 'asc' | 'desc';
}

export interface PageRequest {
	page: number;
	pageSize: number;
	search?: string;
	sort?: PageSort;
}

export type PageParams = Record<string, string | number>;

export interface PageResult<T> {
	rows: T[];
	total: number;
}

export interface PaginationAdapter {
	toParams: (request: PageRequest) => PageParams;
	fromResponse: <T>(response: unknown) => PageResult<T>;
}

export interface PaginationShape {
	pageParam?: string;
	offsetParam?: string;
	pageSizeParam?: string;
	firstPage?: 0 | 1;
	searchParam?: string;
	sortParams?: (sort: PageSort) => PageParams;
	rowsPath?: string;
	totalPath?: string;
}

export type PaginationStyle = 'dotnet' | 'dotnet-page' | 'node' | 'offset';

export type PaginationOption = PaginationStyle | PaginationShape | PaginationAdapter;

export interface UsePaginatedQueryOptions<TRaw, TRow> {
	queryKey: readonly unknown[];
	fetchPage: (params: PageParams, signal: AbortSignal) => Promise<unknown>;
	paginate?: PaginationOption;
	pageSize?: number;
	mapRow?: (row: TRaw) => TRow;
}
