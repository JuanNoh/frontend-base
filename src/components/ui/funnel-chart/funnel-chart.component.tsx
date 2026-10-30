import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils/cn';
import {
	funnelBarStyles,
	funnelLabelStyles,
	funnelRowStyles,
	funnelShareStyles,
	funnelStepStyles,
	funnelStyles,
	funnelTrackStyles,
} from './funnel-chart.styles';
import type { FunnelChartProps } from './funnel-chart.types';
import { formatShare, withShare } from './funnel-chart.utils';

export function FunnelChart({ steps, className }: FunnelChartProps) {
	const { setNode, inView } = useInView<HTMLDivElement>();

	return (
		<div ref={setNode} className={cn(funnelStyles(), className)}>
			{withShare(steps).map((step, index) => (
				<div key={step.label} className={funnelRowStyles({ hue: step.hue })}>
					<span className={funnelStepStyles()}>{index + 1}</span>
					<span className={funnelLabelStyles()}>
						{step.label} · <b>{step.value}</b>
					</span>
					<span className={funnelShareStyles()}>{formatShare(step.share)}</span>
					<span className={funnelTrackStyles()}>
						<span
							className={funnelBarStyles()}
							style={{
								width: inView ? `${step.share}%` : 0,
								transitionDelay: `${index * 90}ms`,
							}}
						/>
					</span>
				</div>
			))}
		</div>
	);
}
