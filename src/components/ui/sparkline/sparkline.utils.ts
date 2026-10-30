export function buildSparkline(values: number[], width: number, height: number, pad = 3) {
	const min = Math.min(...values);
	const max = Math.max(...values);
	const range = max - min || 1;
	const step = (width - pad * 2) / Math.max(values.length - 1, 1);
	const points = values.map((value, index) => ({
		x: pad + index * step,
		y: pad + (height - pad * 2) * (1 - (value - min) / range),
	}));
	const line = points
		.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
		.join(' ');
	const last = points[points.length - 1];
	const area = `${line} L${last.x.toFixed(1)} ${height} L${points[0].x.toFixed(1)} ${height} Z`;

	return { line, area, last };
}
