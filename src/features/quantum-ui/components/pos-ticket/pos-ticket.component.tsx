import { Banknote, ShoppingBasket } from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { Button } from '@/components/ui/button/button.component';
import { EmptyState } from '@/components/ui/empty-state/empty-state.component';
import { NumberStepper } from '@/components/ui/number-stepper/number-stepper.component';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import type { SegmentedOption } from '@/components/ui/segmented/segmented.types';
import { formatMoney } from '@/lib/format';
import type { PosPayment } from '../../types/pos.types';
import { DemoCard } from '../demo-card/demo-card.component';
import {
	posGrandTotalStyles,
	posLineNameStyles,
	posLineStepperStyles,
	posLineStyles,
	posLinesStyles,
	posLineTotalStyles,
	posTotalsStyles,
} from '../pos-demo/pos-demo.styles';
import type { PosTicketProps } from './pos-ticket.types';

const PAYMENTS: SegmentedOption<PosPayment>[] = [
	{ value: 'tarjeta', label: 'Tarjeta' },
	{ value: 'efectivo', label: 'Efectivo' },
	{ value: 'transferencia', label: 'Transferencia' },
];

export function PosTicket({ pos, onCharge, className }: PosTicketProps) {
	return (
		<DemoCard
			title="Ticket"
			aside={<Badge tone="primary">{pos.items} artículos</Badge>}
			className={className}
		>
			{pos.isEmpty ? (
				<EmptyState
					icon={ShoppingBasket}
					title="Ticket vacío"
					description="Agrega un producto para empezar."
				/>
			) : (
				<ul className={posLinesStyles()}>
					{pos.lines.map((line) => (
						<li key={line.id} className={posLineStyles()}>
							<span className={posLineNameStyles()}>{line.name}</span>
							<span className={posLineTotalStyles()}>
								{formatMoney(line.subtotal)}
							</span>
							<NumberStepper
								aria-label={`Cantidad de ${line.name}`}
								value={line.quantity}
								max={line.stock}
								onValueChange={(quantity) =>
									pos.setQuantity(line.id, quantity)
								}
								className={posLineStepperStyles()}
							/>
						</li>
					))}
				</ul>
			)}
			<dl className={posTotalsStyles()}>
				<dt>IVA incluido</dt>
				<dd>{pos.tax}</dd>
				<div className={posGrandTotalStyles()}>
					<dt>Total</dt>
					<dd>{pos.total}</dd>
				</div>
			</dl>
			<Segmented
				aria-label="Forma de pago"
				value={pos.payment}
				onValueChange={pos.setPayment}
				options={PAYMENTS}
			/>
			<Button block disabled={pos.isEmpty} onClick={onCharge}>
				<Banknote />
				Cobrar {pos.total}
			</Button>
		</DemoCard>
	);
}
