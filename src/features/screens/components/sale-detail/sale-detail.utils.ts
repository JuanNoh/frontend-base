import type { TimelineItem } from '@/components/ui/timeline/timeline.types';
import type { Invoice } from '@/features/quantum-ui/types/invoice.types';

const TAX_DIVISOR = 1.16;

export function saleTotals(total: number) {
	const subtotal = total / TAX_DIVISOR;
	return { subtotal, tax: total - subtotal };
}

export function saleSteps({ status, method }: Invoice): TimelineItem[] {
	const isPaid = status === 'Pagada';

	return [
		{ title: 'Emitida', hint: 'Enviada al cliente', tone: 'done' },
		{
			title: method === 'PPD' ? 'Pago en parcialidades' : 'Pago en una exhibición',
			hint: isPaid ? 'Recibido' : 'Pendiente',
			tone: isPaid ? 'done' : 'next',
		},
		{
			title: status === 'Cancelada' ? 'Cancelada' : 'Liquidada',
			hint: isPaid ? 'Completa' : 'Por concluir',
			tone: isPaid ? 'done' : 'pending',
		},
	];
}
