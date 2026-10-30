import type { PosProduct } from '@/features/quantum-ui/types/pos.types';

export interface ProductTileProps {
	product: PosProduct;
	quantity: number;
	onAdd: () => void;
}
