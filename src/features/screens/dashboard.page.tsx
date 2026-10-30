import { Download, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge/badge.component';
import { BarChart } from '@/components/ui/bar-chart/bar-chart.component';
import { Button } from '@/components/ui/button/button.component';
import { Checklist } from '@/components/ui/checklist/checklist.component';
import { DonutChart } from '@/components/ui/donut-chart/donut-chart.component';
import { EntityCard } from '@/components/ui/entity-card/entity-card.component';
import { LineChart } from '@/components/ui/line-chart/line-chart.component';
import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { Steps } from '@/components/ui/steps/steps.component';
import { DemoCard } from '@/features/quantum-ui/components/demo-card/demo-card.component';
import { StatsDemo } from '@/features/quantum-ui/components/stats-demo/stats-demo.component';
import { formatMoney } from '@/lib/format';
import { useDashboard } from './hooks/useDashboard';
import {
	screenCardsStyles,
	screenSectionStyles,
	screenSectionTitleStyles,
	screenSplitStyles,
	screenStyles,
} from './screens.styles';

export function DashboardPage() {
	const dashboard = useDashboard();
	const { vertical } = dashboard;
	const { progress, cards } = vertical;
	const { title: barsTitle, ...bars } = vertical.bars;
	const { title: lineTitle, ...line } = vertical.line;
	const { title: donutTitle, money, ...donut } = vertical.donut;

	return (
		<div key={vertical.id} className={screenStyles()}>
			<PageHeader
				eyebrow={dashboard.today}
				title={dashboard.greeting}
				description={dashboard.summary}
				actions={
					<>
						<Button variant="secondary" onClick={dashboard.exportReport}>
							<Download />
							Exportar
						</Button>
						<Button onClick={dashboard.createRecord}>
							<Plus />
							Nuevo registro
						</Button>
					</>
				}
			/>
			<StatsDemo vertical={vertical} />
			<div className={screenSplitStyles()}>
				<DemoCard title={barsTitle}>
					<BarChart {...bars} />
				</DemoCard>
				<DemoCard title={donutTitle}>
					<DonutChart {...donut} format={money ? formatMoney : undefined} />
				</DemoCard>
			</div>
			<div className={screenSplitStyles()}>
				<DemoCard title={lineTitle}>
					<LineChart {...line} />
				</DemoCard>
				<DemoCard
					title={progress.title}
					aside={
						<Badge tone="primary">
							{progress.done} de {progress.total}
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
			</div>
			<section className={screenSectionStyles()}>
				<h2 className={screenSectionTitleStyles()}>{cards.title}</h2>
				<div className={screenCardsStyles()}>
					{cards.items.map((card) => (
						<EntityCard key={card.title} {...card} />
					))}
				</div>
			</section>
		</div>
	);
}
