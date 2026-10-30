import type { Hue } from '@/lib/hues';

export interface DonutSegment {
	label: string;
	value: number;
	hue?: Hue;
}

export interface DonutChartProps {
	segments: DonutSegment[];
	label: string;
	centerLabel?: string;
	format?: (value: number) => string;
	className?: string;
}
