import { Badge } from '@/components/ui/badge/badge.component';
import { formatMoney } from '@/lib/format';
import {
	productTileFootStyles,
	productTileIconStyles,
	productTileNameStyles,
	productTileStyles,
} from './product-tile.styles';
import type { ProductTileProps } from './product-tile.types';

export function ProductTile({ product, quantity, onAdd }: ProductTileProps) {
	return (
		<button
			type="button"
			disabled={quantity >= product.stock}
			onClick={onAdd}
			aria-label={`Agregar ${product.name}`}
			className={productTileStyles()}
		>
			<span className={productTileIconStyles({ hue: product.hue })}>
				<product.icon />
			</span>
			<span className={productTileNameStyles()}>{product.name}</span>
			<span className={productTileFootStyles()}>
				<b>{formatMoney(product.price)}</b>
				{quantity > 0 && <Badge tone="primary">{quantity}</Badge>}
			</span>
		</button>
	);
}
