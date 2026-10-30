export interface BarSeries {
	label: string;
	values: number[];
	tone: 'primary' | 'muted';
}

export interface BarChartProps {
	categories: string[];
	series: BarSeries[];
	max: number;
	ticks: number[];
	unit?: string;
	label: string;
	className?: string;
}
