import { useState } from 'react';
import { toast } from 'sonner';

export function useDrawerDemo() {
	const [isOpen, setIsOpen] = useState(false);

	return {
		isOpen,
		open: () => setIsOpen(true),
		close: () => setIsOpen(false),
		registerPayment: () => {
			setIsOpen(false);
			toast.success('Pago registrado', {
				description: 'Parcialidad 2 aplicada; falta emitir el complemento.',
			});
		},
	};
}
