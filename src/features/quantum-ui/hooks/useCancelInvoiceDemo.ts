import { useState } from 'react';
import { toast } from 'sonner';

export function useCancelInvoiceDemo() {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const confirm = () => {
		setIsOpen(false);
		toast.success('Factura A-1037 cancelada', {
			description: 'El SAT ya la marcó como cancelada.',
		});
	};

	return { isOpen, open, close, confirm };
}
