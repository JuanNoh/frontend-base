import { CHART, scaleY } from '@/components/ui/bar-chart/bar-chart.utils';
import type { LineSeries } from './line-chart.types';

const fixed = (value: number) => value.toFixed(1);

export function categoryX(index: number, count: number) {
	const usable = CHART.width - CHART.left - CHART.right;
	return CHART.left + (usable / Math.max(count - 1, 1)) * index;
}

export function layoutLines(categories: string[], series: LineSeries[], max: number) {
	const floor = scaleY(0, max);

	return series.map((item) => {
		const points = categories.map((_, index) => ({
			x: categoryX(index, categories.length),
			y: scaleY(item.values[index] ?? 0, max),
			value: item.values[index] ?? 0,
		}));
		const line = points
			.map(
				(point, index) =>
					`${index ? 'L' : 'M'}${fixed(point.x)} ${fixed(point.y)}`
			)
			.join(' ');
		const area = `${line} L${fixed(points[points.length - 1].x)} ${floor} L${fixed(points[0].x)} ${floor} Z`;

		return { ...item, points, line, area };
	});
}
