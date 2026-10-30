import { Badge } from '@/components/ui/badge/badge.component';
import { BarChart } from '@/components/ui/bar-chart/bar-chart.component';
import { Checklist } from '@/components/ui/checklist/checklist.component';
import { DonutChart } from '@/components/ui/donut-chart/donut-chart.component';
import { FunnelChart } from '@/components/ui/funnel-chart/funnel-chart.component';
import { LineChart } from '@/components/ui/line-chart/line-chart.component';
import { Steps } from '@/components/ui/steps/steps.component';
import { formatMoney } from '@/lib/format';
import type { VerticalDemoProps } from '../../types/vertical.types';
import { DemoCard } from '../demo-card/demo-card.component';
import { insightsRowStyles, insightsWideRowStyles } from './insights-demo.styles';

export function InsightsDemo({ vertical }: VerticalDemoProps) {
	const { funnel, progress } = vertical;
	const { title: barsTitle, ...bars } = vertical.bars;
	const { title: lineTitle, ...line } = vertical.line;
	const { title: donutTitle, money, ...donut } = vertical.donut;

	return (
		<>
			<div className={insightsRowStyles()}>
				<DemoCard title={funnel.title}>
					<FunnelChart steps={funnel.steps} />
				</DemoCard>
				<DemoCard title={barsTitle}>
					<BarChart {...bars} />
				</DemoCard>
			</div>
			<div className={insightsWideRowStyles()}>
				<DemoCard title={lineTitle}>
					<LineChart {...line} />
				</DemoCard>
				<DemoCard title={donutTitle}>
					<DonutChart {...donut} format={money ? formatMoney : undefined} />
				</DemoCard>
			</div>
			<DemoCard
				title={progress.title}
				aside={
					<Badge tone="primary">
						{progress.done} de {progress.total} pasos
					</Badge>
				}
			>
				<Steps
					total={progress.total}
					done={progress.done}
					label={`Avance: ${progress.title}`}
				/>
				<Checklist items={progress.items} />
			</DemoCard>
		</>
	);
}
