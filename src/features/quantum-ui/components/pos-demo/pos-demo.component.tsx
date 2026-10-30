import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { EntityCard } from '@/components/ui/entity-card/entity-card.component';
import { formatMoney } from '@/lib/format';
import { POS_PRODUCTS } from '../../data/verticals/pos';
import { usePosDemo } from '../../hooks/usePosDemo';
import { PosTicket } from '../pos-ticket/pos-ticket.component';
import { posGridStyles, posProductsStyles } from './pos-demo.styles';

const LOW_STOCK = 5;
const FEATURED_PRODUCTS = POS_PRODUCTS.slice(0, 6);

export function PosDemo() {
	const pos = usePosDemo();

	return (
		<div className={posGridStyles()}>
			<div className={posProductsStyles()}>
				{FEATURED_PRODUCTS.map((product) => (
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
			<PosTicket pos={pos} onCharge={pos.charge} />
		</div>
	);
}
