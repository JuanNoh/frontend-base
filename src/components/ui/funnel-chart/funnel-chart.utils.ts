import type { FunnelStep } from './funnel-chart.types';

export function withShare(steps: FunnelStep[]) {
	const base = steps[0]?.value || 1;
	return steps.map((step) => ({ ...step, share: (step.value / base) * 100 }));
}

export function formatShare(share: number) {
	return `${share.toFixed(share === 100 ? 0 : 1)}%`;
}
