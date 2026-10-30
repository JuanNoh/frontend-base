import type { Hue } from '@/lib/hues';

export interface LineSeries {
	label: string;
	values: number[];
	hue?: Hue;
}

export interface LineChartProps {
	categories: string[];
	series: LineSeries[];
	max: number;
	ticks: number[];
	unit?: string;
	label: string;
	className?: string;
}
