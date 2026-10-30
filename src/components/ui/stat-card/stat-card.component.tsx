import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { RollingNumber } from '@/components/ui/rolling-number/rolling-number.component';
import { Sparkline } from '@/components/ui/sparkline/sparkline.component';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils/cn';
import {
	statCardDeltaStyles,
	statCardFooterStyles,
	statCardHeaderStyles,
	statCardIconStyles,
	statCardLabelStyles,
	statCardStyles,
	statCardSparklineStyles,
	statCardValueStyles,
} from './stat-card.styles';
import type { StatCardProps } from './stat-card.types';
import { zeroDigits } from './stat-card.utils';

export function StatCard({
	label,
	value,
	icon: Icon,
	delta,
	trend,
	series,
	hue,
	className,
}: StatCardProps) {
	const { setNode, inView } = useInView<HTMLDivElement>();

	return (
		<div ref={setNode} className={cn(statCardStyles({ hue }), className)}>
			<div className={statCardHeaderStyles()}>
				<span className={statCardIconStyles()}>
					<Icon />
				</span>
				<span className={statCardLabelStyles()}>{label}</span>
			</div>
			<div className={statCardValueStyles()}>
				{typeof value === 'string' ? (
					<RollingNumber value={inView ? value : zeroDigits(value)} />
				) : (
					value
				)}
			</div>
			<div className={statCardFooterStyles()}>
				{delta && (
					<span className={statCardDeltaStyles({ trend })}>
						{trend === 'up' && <ArrowUpRight />}
						{trend === 'down' && <ArrowDownRight />}
						{delta}
					</span>
				)}
				{series && (
					<Sparkline values={series} className={statCardSparklineStyles()} />
				)}
			</div>
		</div>
	);
}
