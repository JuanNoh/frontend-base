import type { BarSeries } from './bar-chart.types';

export const CHART = {
	width: 560,
	height: 210,
	left: 44,
	right: 10,
	top: 14,
	bottom: 28,
};

export function scaleY(value: number, max: number) {
	const usable = CHART.height - CHART.top - CHART.bottom;
	return CHART.top + usable * (1 - value / max);
}

export function layoutBars(categories: string[], series: BarSeries[], max: number) {
	const slot = (CHART.width - CHART.left - CHART.right) / categories.length;
	const barWidth = Math.min(18, (slot * 0.7) / series.length);
	const groupWidth = barWidth * series.length + 4 * (series.length - 1);

	return categories.map((category, index) => {
		const center = CHART.left + slot * index + slot / 2;
		const bars = series.map((item, position) => {
			const value = item.values[index] ?? 0;
			const y = scaleY(value, max);
			return {
				key: `${item.label}-${category}`,
				x: center - groupWidth / 2 + position * (barWidth + 4),
				y,
				width: barWidth,
				height: scaleY(0, max) - y,
				tone: item.tone,
				label: item.label,
				value,
			};
		});
		return { category, center, slot, bars };
	});
}
