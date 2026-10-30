import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { Modal } from '@/components/ui/modal/modal.component';
import { NumberInput } from '@/components/ui/number-input/number-input.component';
import { formatMoney } from '@/lib/format';
import {
	paymentBillsStyles,
	paymentBodyStyles,
	paymentChangeStyles,
	paymentTotalStyles,
} from './payment-modal.styles';
import type { PaymentModalProps } from './payment-modal.types';

const BILLS = [100, 200, 500, 1000];

export function PaymentModal({ checkout }: PaymentModalProps) {
	const { pos } = checkout;

	return (
		<Modal
			open={checkout.isPaying}
			onClose={checkout.closePayment}
			title="Cobrar venta"
			description={`${pos.items} artículos · pago con ${pos.payment}`}
			footer={
				<>
					<Button variant="secondary" onClick={checkout.closePayment}>
						Volver
					</Button>
					<Button disabled={!checkout.canConfirm} onClick={checkout.confirm}>
						<Check />
						Confirmar
					</Button>
				</>
			}
		>
			<div className={paymentBodyStyles()}>
				<p className={paymentTotalStyles()}>{pos.total}</p>
				{checkout.isCash && (
					<>
						<NumberInput
							label="Recibido"
							leading="$"
							decimals={2}
							thousands
							value={checkout.received}
							onChange={checkout.changeReceived}
						/>
						<div className={paymentBillsStyles()}>
							{BILLS.map((bill) => (
								<Button
									key={bill}
									variant="secondary"
									size="sm"
									onClick={() => checkout.pickBill(bill)}
								>
									{formatMoney(bill)}
								</Button>
							))}
						</div>
						<p className={paymentChangeStyles()}>
							Cambio <b>{formatMoney(checkout.change)}</b>
						</p>
					</>
				)}
			</div>
		</Modal>
	);
}
