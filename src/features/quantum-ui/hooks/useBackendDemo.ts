import { useState } from 'react';
import { usePaginatedQuery } from '@/lib/pagination/usePaginatedQuery';
import { fetchDemoInvoices } from '../api/demo-invoices.api';
import { BACKENDS, type BackendStyle } from '../data/backends';
import type { Invoice } from '../types/invoice.types';

export function useBackendDemo() {
	const [style, setStyle] = useState<BackendStyle>('dotnet');
	const backend = BACKENDS[style];

	const list = usePaginatedQuery<Invoice>({
		queryKey: ['demo-invoices', style],
		fetchPage: (params, signal) => fetchDemoInvoices(style, params, signal),
		paginate: backend.paginate,
		pageSize: 5,
	});

	const query = new URLSearchParams(
		Object.entries(list.params).map(([key, value]) => [key, String(value)])
	);

	return {
		style,
		setStyle,
		list,
		request: `GET /facturas?${query}`,
		response: backend.response,
	};
}
