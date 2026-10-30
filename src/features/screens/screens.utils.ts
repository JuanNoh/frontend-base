import type { Invoice, InvoiceStatus } from '@/features/quantum-ui/types/invoice.types';
import type { PosProduct } from '@/features/quantum-ui/types/pos.types';

export const ALL_CATEGORIES = 'todo';

export function greetingFor(hour: number) {
	if (hour < 12) return 'Buenos días';
	if (hour < 19) return 'Buenas tardes';
	return 'Buenas noches';
}

export function sumInvoices(invoices: Invoice[], statuses: InvoiceStatus[]) {
	return invoices
		.filter((invoice) => statuses.includes(invoice.status))
		.reduce((sum, invoice) => sum + invoice.total, 0);
}

export function categoryOptions(products: PosProduct[]) {
	const categories = [...new Set(products.map((product) => product.category))];
	return [
		{ value: ALL_CATEGORIES, label: 'Todo' },
		...categories.map((category) => ({ value: category, label: category })),
	];
}

export function filterProducts(products: PosProduct[], query: string, category: string) {
	const needle = query.trim().toLowerCase();
	return products.filter(
		(product) =>
			(category === ALL_CATEGORIES || product.category === category) &&
			product.name.toLowerCase().includes(needle)
	);
}
