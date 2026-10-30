import { FileX } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { Card } from '@/components/ui/card/card.component';
import { Modal } from '@/components/ui/modal/modal.component';
import { useCancelInvoiceDemo } from '../../hooks/useCancelInvoiceDemo';
import { modalDemoCardStyles, modalDemoTextStyles } from './modal-demo.styles';

export function ModalDemo() {
	const { isOpen, open, close, confirm } = useCancelInvoiceDemo();

	return (
		<Card className={modalDemoCardStyles()}>
			<p className={modalDemoTextStyles()}>
				Confirmación de una acción que no se puede deshacer: explica qué pasa y
				deja la salida segura a la mano.
			</p>
			<Button variant="danger" onClick={open}>
				<FileX />
				Cancelar A-1037
			</Button>
			<Modal
				open={isOpen}
				onClose={close}
				title="¿Cancelar la factura A-1037?"
				description="El SAT la marcará como cancelada y el receptor recibirá un aviso. No se puede deshacer."
				footer={
					<>
						<Button variant="secondary" onClick={close}>
							Conservar factura
						</Button>
						<Button variant="destructive" onClick={confirm}>
							Cancelar factura
						</Button>
					</>
				}
			/>
		</Card>
	);
}
