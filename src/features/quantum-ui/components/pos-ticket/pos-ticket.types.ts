import type { PosCart } from '../../types/pos.types';

export interface PosTicketProps {
	pos: PosCart;
	onCharge: () => void;
	className?: string;
}
