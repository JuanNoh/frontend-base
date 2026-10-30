import { StatCard } from '@/components/ui/stat-card/stat-card.component';
import type { VerticalDemoProps } from '../../types/vertical.types';
import { statsGridStyles } from './stats-demo.styles';

export function StatsDemo({ vertical }: VerticalDemoProps) {
	return (
		<div className={statsGridStyles()}>
			{vertical.stats.map((stat) => (
				<StatCard key={stat.label} {...stat} />
			))}
		</div>
	);
}
