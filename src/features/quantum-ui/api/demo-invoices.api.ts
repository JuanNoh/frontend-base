import type { PageParams } from '@/lib/pagination/pagination.types';
import { SAMPLE_INVOICES } from '../data/invoices';
import type { BackendStyle } from '../data/backends';
import type { Invoice } from '../types/invoice.types';

const LATENCY = 450;
const TOTAL_ROWS = 57;

const ROWS: Invoice[] = Array.from({ length: TOTAL_ROWS }, (_, index) => {
	const sample = SAMPLE_INVOICES[index % SAMPLE_INVOICES.length];
	return { ...sample, folio: `A-${1200 - index}`, total: sample.total + index * 137 };
});

function wait(signal: AbortSignal) {
	return new Promise<void>((resolve, reject) => {
		const timer = window.setTimeout(resolve, LATENCY);
		signal.addEventListener('abort', () => {
			window.clearTimeout(timer);
			reject(signal.reason);
		});
	});
}

function readSort(params: PageParams) {
	if (params.sortBy) {
		return { key: String(params.sortBy), desc: params.sortDirection === 'desc' };
	}
	const signed = String(params.sort ?? '');
	return signed ? { key: signed.replace('-', ''), desc: signed.startsWith('-') } : null;
}

function queryRows(params: PageParams) {
	const needle = String(params.search ?? '').toLowerCase();
	const found = ROWS.filter((row) =>
		`${row.folio} ${row.client}`.toLowerCase().includes(needle)
	);
	const sort = readSort(params);
	if (!sort) return found;

	const key = sort.key as keyof Invoice;
	const sign = sort.desc ? -1 : 1;
	return [...found].sort((a, b) => (a[key] > b[key] ? sign : -sign));
}

export async function fetchDemoInvoices(
	style: BackendStyle,
	params: PageParams,
	signal: AbortSignal
) {
	await wait(signal);

	const found = queryRows(params);
	const total = found.length;
	const size = Number(params.pageSize ?? params.limit ?? params.size);
	const firstPage = style === 'custom' ? 0 : 1;
	const page = Number(params.pageNumber ?? params.page ?? firstPage) + 1 - firstPage;
	const start = 'offset' in params ? Number(params.offset) : (page - 1) * size;
	const rows = found.slice(start, start + size);
	const totalPages = Math.ceil(total / size);

	if (style === 'dotnet') {
		return {
			items: rows,
			totalCount: total,
			pageNumber: page,
			pageSize: size,
			totalPages,
		};
	}
	if (style === 'dotnet-page') {
		return { items: rows, totalCount: total, page, pageSize: size, totalPages };
	}
	if (style === 'node') return { data: rows, total, page, limit: size, totalPages };
	if (style === 'custom') {
		return { content: rows, totalElements: total, number: page - 1, size };
	}
	return { data: rows, meta: { total, offset: start, limit: size } };
}
