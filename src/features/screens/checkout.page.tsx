import { Search, SearchX } from 'lucide-react';
import { EmptyState } from '@/components/ui/empty-state/empty-state.component';
import { Input } from '@/components/ui/input/input.component';
import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import { PosTicket } from '@/features/quantum-ui/components/pos-ticket/pos-ticket.component';
import { PaymentModal } from './components/payment-modal/payment-modal.component';
import { ProductTile } from './components/product-tile/product-tile.component';
import { useCheckout } from './hooks/useCheckout';
import {
	checkoutCatalogStyles,
	checkoutGridStyles,
	checkoutProductsStyles,
	checkoutSearchStyles,
	checkoutTicketStyles,
	checkoutToolbarStyles,
	screenStyles,
} from './screens.styles';

export function CheckoutPage() {
	const checkout = useCheckout();

	return (
		<div className={screenStyles()}>
			<PageHeader
				title="Caja"
				description="Toca un producto para sumarlo al ticket y cobra en dos pasos."
			/>
			<div className={checkoutGridStyles()}>
				<div className={checkoutCatalogStyles()}>
					<div className={checkoutToolbarStyles()}>
						<Input
							aria-label="Buscar producto"
							placeholder="Buscar producto"
							leading={<Search />}
							value={checkout.query}
							onChange={checkout.changeQuery}
							className={checkoutSearchStyles()}
						/>
						<Segmented
							aria-label="Categoría"
							value={checkout.category}
							onValueChange={checkout.setCategory}
							options={checkout.categories}
						/>
					</div>
					{checkout.products.length === 0 ? (
						<EmptyState
							icon={SearchX}
							title="Sin resultados"
							description="Prueba con otro nombre o categoría."
						/>
					) : (
						<div className={checkoutProductsStyles()}>
							{checkout.products.map((product) => (
								<ProductTile
									key={product.id}
									product={product}
									quantity={checkout.pos.quantityOf(product.id)}
									onAdd={() => checkout.pos.add(product.id)}
								/>
							))}
						</div>
					)}
				</div>
				<PosTicket
					pos={checkout.pos}
					onCharge={checkout.openPayment}
					className={checkoutTicketStyles()}
				/>
			</div>
			<PaymentModal checkout={checkout} />
		</div>
	);
}
