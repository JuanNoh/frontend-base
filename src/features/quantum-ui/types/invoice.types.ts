export type InvoiceStatus = 'Pagada' | 'Por cobrar' | 'Parcial' | 'Cancelada';

export interface Invoice {
	folio: string;
	client: string;
	rfc: string;
	issuedAt: string;
	method: 'PUE' | 'PPD';
	status: InvoiceStatus;
	total: number;
}
