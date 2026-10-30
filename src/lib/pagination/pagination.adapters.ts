import type {
	PaginationAdapter,
	PaginationOption,
	PaginationStyle,
} from './pagination.types';
import { createPaginationAdapter, pairSort, signedSort } from './pagination.utils';

const DOTNET_SORT = pairSort('sortBy', 'sortDirection');

const PAGINATION_STYLES: Record<PaginationStyle, PaginationAdapter> = {
	dotnet: createPaginationAdapter({ pageParam: 'pageNumber', sortParams: DOTNET_SORT }),
	'dotnet-page': createPaginationAdapter({ sortParams: DOTNET_SORT }),
	node: createPaginationAdapter({
		pageSizeParam: 'limit',
		sortParams: signedSort('sort'),
	}),
	offset: createPaginationAdapter({
		offsetParam: 'offset',
		pageSizeParam: 'limit',
		sortParams: signedSort('sort'),
	}),
};

const DEFAULT_STYLE = 'dotnet';

export function resolvePagination(option?: PaginationOption) {
	const chosen: PaginationOption =
		option ?? import.meta.env?.VITE_PAGINATION ?? DEFAULT_STYLE;

	if (typeof chosen === 'string') {
		const style = PAGINATION_STYLES[chosen];
		if (style) return style;
		const known = Object.keys(PAGINATION_STYLES).join(', ');
		throw new Error(`Paginación desconocida: «${chosen}». Usa ${known}.`);
	}
	return 'toParams' in chosen ? chosen : createPaginationAdapter(chosen);
}
