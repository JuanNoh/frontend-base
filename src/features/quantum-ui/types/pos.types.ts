import type { LucideIcon } from 'lucide-react';
import type { Hue } from '@/lib/hues';
import type { usePosDemo } from '../hooks/usePosDemo';

export interface PosProduct {
	id: string;
	name: string;
	category: string;
	price: number;
	stock: number;
	icon: LucideIcon;
	hue: Hue;
}

export type PosPayment = 'efectivo' | 'tarjeta' | 'transferencia';

export type PosCart = ReturnType<typeof usePosDemo>;
