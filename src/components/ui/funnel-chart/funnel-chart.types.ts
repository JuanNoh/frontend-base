import type { Hue } from '@/lib/hues';

export interface FunnelStep {
	label: string;
	value: number;
	hue: Hue;
}

export interface FunnelChartProps {
	steps: FunnelStep[];
	className?: string;
}
