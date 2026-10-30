import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useDebouncedValue } from '@/lib/useDebouncedValue';
import { resolvePagination } from './pagination.adapters';
import type { PageRequest, PageSort, UsePaginatedQueryOptions } from './pagination.types';
import { nextPageSort } from './pagination.utils';

export function usePaginatedQuery<TRaw, TRow = TRaw>({
	queryKey,
	fetchPage,
	paginate,
	pageSize: initialPageSize = 20,
	mapRow,
}: UsePaginatedQueryOptions<TRaw, TRow>) {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(initialPageSize);
	const [query, setQuery] = useState('');
	const [sort, setSort] = useState<PageSort | null>(null);
	const search = useDebouncedValue(query.trim());

	const request: PageRequest = {
		page,
		pageSize,
		search: search || undefined,
		sort: sort ?? undefined,
	};
	const adapter = resolvePagination(paginate);
	const params = adapter.toParams(request);

	const result = useQuery({
		queryKey: [...queryKey, request],
		queryFn: ({ signal }) => fetchPage(params, signal),
		placeholderData: keepPreviousData,
		select: (response) => adapter.fromResponse<TRaw>(response),
	});

	const rawRows = result.data?.rows ?? [];
	const rows = (mapRow ? rawRows.map(mapRow) : rawRows) as TRow[];
	const total = result.data?.total ?? 0;
	const pageCount = Math.ceil(total / pageSize) || 1;

	const restart = () => setPage(1);

	return {
		rows,
		total,
		page,
		pageCount,
		pageSize,
		params,
		setPage,
		changePageSize: (size: number) => {
			setPageSize(size);
			restart();
		},
		isLoading: result.isLoading,
		isFetching: result.isFetching,
		isError: result.isError,
		error: result.error,
		refetch: result.refetch,
		table: {
			page,
			pageCount,
			total,
			query,
			isFetching: result.isFetching,
			onPageChange: setPage,
			onQueryChange: (next: string) => {
				setQuery(next);
				restart();
			},
			onSortChange: (key: string) => {
				setSort((current) => nextPageSort(current, key));
				restart();
			},
		},
	};
}
