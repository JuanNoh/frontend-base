import type { LucideIcon } from 'lucide-react';
import type { Hue } from '@/lib/hues';

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
