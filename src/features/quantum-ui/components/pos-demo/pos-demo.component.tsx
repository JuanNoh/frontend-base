import { Banknote, Plus, ShoppingBasket } from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { Button } from '@/components/ui/button/button.component';
import { EmptyState } from '@/components/ui/empty-state/empty-state.component';
import { EntityCard } from '@/components/ui/entity-card/entity-card.component';
import { NumberStepper } from '@/components/ui/number-stepper/number-stepper.component';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import type { SegmentedOption } from '@/components/ui/segmented/segmented.types';
import { formatMoney } from '@/lib/format';
import { POS_PRODUCTS } from '../../data/verticals/pos';
import { usePosDemo } from '../../hooks/usePosDemo';
import type { PosPayment } from '../../types/pos.types';
import { DemoCard } from '../demo-card/demo-card.component';
import {
	posGrandTotalStyles,
	posGridStyles,
	posLineNameStyles,
	posLineStepperStyles,
	posLineStyles,
	posLinesStyles,
	posLineTotalStyles,
	posProductsStyles,
	posTotalsStyles,
} from './pos-demo.styles';

const LOW_STOCK = 5;

const PAYMENTS: SegmentedOption<PosPayment>[] = [
	{ value: 'tarjeta', label: 'Tarjeta' },
	{ value: 'efectivo', label: 'Efectivo' },
	{ value: 'transferencia', label: 'Transferencia' },
];

export function PosDemo() {
	const pos = usePosDemo();

	return (
		<div className={posGridStyles()}>
			<div className={posProductsStyles()}>
				{POS_PRODUCTS.map((product) => (
					<EntityCard
						key={product.id}
						title={product.name}
						subtitle={product.category}
						icon={product.icon}
						hue={product.hue}
						badge={
							product.stock <= LOW_STOCK
								? { label: `Quedan ${product.stock}`, tone: 'warning' }
								: undefined
						}
						amount={formatMoney(product.price)}
						actions={
							<Button
								size="sm"
								variant="secondary"
								aria-label={`Agregar ${product.name}`}
								disabled={pos.quantityOf(product.id) >= product.stock}
								onClick={() => pos.add(product.id)}
							>
								<Plus />
								Agregar
							</Button>
						}
					/>
				))}
			</div>
			<DemoCard
				title="Ticket"
				aside={<Badge tone="primary">{pos.items} artículos</Badge>}
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
				<Button block disabled={pos.isEmpty} onClick={pos.charge}>
					<Banknote />
					Cobrar {pos.total}
				</Button>
			</DemoCard>
		</div>
	);
}
