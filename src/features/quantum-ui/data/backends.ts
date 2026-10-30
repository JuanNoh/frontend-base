import type { PaginationOption } from '@/lib/pagination/pagination.types';

interface Backend {
	label: string;
	paginate: PaginationOption;
	response: string;
}

export const BACKENDS = {
	dotnet: {
		label: '.NET',
		paginate: 'dotnet',
		response: '{ items, totalCount, pageNumber, pageSize, totalPages }',
	},
	'dotnet-page': {
		label: '.NET page',
		paginate: 'dotnet-page',
		response: '{ items, totalCount, page, pageSize, totalPages }',
	},
	node: {
		label: 'Node',
		paginate: 'node',
		response: '{ data, total, page, limit, totalPages }',
	},
	offset: {
		label: 'Offset',
		paginate: 'offset',
		response: '{ data, meta: { total, offset, limit } }',
	},
	custom: {
		label: 'A la medida',
		paginate: { firstPage: 0, pageSizeParam: 'size' },
		response: '{ content, totalElements, number, size }',
	},
} satisfies Record<string, Backend>;

export type BackendStyle = keyof typeof BACKENDS;
