import type { DonutSegment } from './donut-chart.types';

const GAP = 0.9;

export function layoutDonut(segments: DonutSegment[]) {
	const total = segments.reduce((sum, item) => sum + item.value, 0);
	let offset = 0;

	const arcs = segments.map((item) => {
		const share = total ? (item.value / total) * 100 : 0;
		const arc = { ...item, share, offset, drawn: Math.max(share - GAP, 0) };
		offset += share;
		return arc;
	});

	return { total, arcs };
}
