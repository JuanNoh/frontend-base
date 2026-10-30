import type {
	PageParams,
	PageSort,
	PaginationAdapter,
	PaginationShape,
} from './pagination.types';

function readKey(source: unknown, key: string) {
	if (typeof source !== 'object' || source === null) return undefined;
	const record = source as Record<string, unknown>;
	return record[key] ?? record[key.charAt(0).toUpperCase() + key.slice(1)];
}

function readPath(source: unknown, path: string) {
	return path.split('.').reduce<unknown>(readKey, source);
}

export const pairSort =
	(keyParam: string, directionParam: string) =>
	({ key, direction }: PageSort): PageParams => ({
		[keyParam]: key,
		[directionParam]: direction,
	});

export const signedSort =
	(param: string) =>
	({ key, direction }: PageSort): PageParams => ({
		[param]: direction === 'desc' ? `-${key}` : key,
	});

export function nextPageSort(current: PageSort | null, key: string): PageSort {
	if (current?.key !== key) return { key, direction: 'asc' };
	return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' };
}

const ENVELOPES = ['data', 'result', 'value'];
const ROW_PATHS = ['items', 'data', 'results', 'rows', 'content', 'records', 'list'];
const TOTAL_PATHS = [
	'totalCount',
	'total',
	'count',
	'totalItems',
	'totalElements',
	'totalRecords',
	'meta.total',
	'meta.totalCount',
	'pagination.total',
	'pagination.totalCount',
];

function bodies(response: unknown) {
	const wrapped = ENVELOPES.map((key) => readPath(response, key)).filter(
		(body) => typeof body === 'object' && body !== null && !Array.isArray(body)
	);
	return [response, ...wrapped];
}

function findRows<T>(response: unknown, path?: string) {
	if (Array.isArray(response)) return response as T[];
	const paths = path ? [path, ...ROW_PATHS] : ROW_PATHS;
	for (const body of bodies(response)) {
		for (const candidate of paths) {
			const rows = readPath(body, candidate);
			if (Array.isArray(rows)) return rows as T[];
		}
	}
	return [];
}

function findTotal(response: unknown, fallback: number, path?: string) {
	const paths = path ? [path, ...TOTAL_PATHS] : TOTAL_PATHS;
	for (const body of bodies(response)) {
		for (const candidate of paths) {
			const total = readPath(body, candidate);
			if (typeof total === 'number') return total;
		}
	}
	return fallback;
}

export function createPaginationAdapter({
	pageParam = 'page',
	offsetParam,
	pageSizeParam = 'pageSize',
	firstPage = 1,
	searchParam = 'search',
	sortParams,
	rowsPath,
	totalPath,
}: PaginationShape = {}): PaginationAdapter {
	return {
		toParams: ({ page, pageSize, search, sort }) => ({
			...(offsetParam
				? { [offsetParam]: (page - 1) * pageSize }
				: { [pageParam]: page - 1 + firstPage }),
			[pageSizeParam]: pageSize,
			...(search ? { [searchParam]: search } : {}),
			...(sort && sortParams ? sortParams(sort) : {}),
		}),
		fromResponse: <T>(response: unknown) => {
			const rows = findRows<T>(response, rowsPath);
			return { rows, total: findTotal(response, rows.length, totalPath) };
		},
	};
}
