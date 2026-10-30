import type { Invoice } from '@/features/quantum-ui/types/invoice.types';

export interface SaleDetailProps {
	invoice: Invoice;
	open: boolean;
	onClose: () => void;
	onDownload: () => void;
}
