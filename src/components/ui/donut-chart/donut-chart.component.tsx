import { useChartHover } from '@/lib/useChartHover';
import { cn } from '@/lib/utils/cn';
import {
	donutArcStyles,
	donutCaptionStyles,
	donutCenterStyles,
	donutFigureStyles,
	donutLayoutStyles,
	donutLegendLabelStyles,
	donutLegendRowStyles,
	donutLegendShareStyles,
	donutLegendStyles,
	donutStyles,
	donutSvgStyles,
	donutValueStyles,
} from './donut-chart.styles';
import type { DonutChartProps } from './donut-chart.types';
import { layoutDonut } from './donut-chart.utils';

const RADIUS = 48;

export function DonutChart({
	segments,
	label,
	centerLabel = 'Total',
	format = String,
	className,
}: DonutChartProps) {
	const { setNode, ...chart } = useChartHover<HTMLDivElement>();
	const { total, arcs } = layoutDonut(segments);
	const focused = chart.active === null ? null : arcs[chart.active];

	return (
		<div
			ref={setNode}
			onPointerLeave={chart.clear}
			className={cn(donutStyles(), className)}
		>
			<div className={donutLayoutStyles()}>
				<div className={donutFigureStyles()}>
					<svg
						viewBox="0 0 120 120"
						role="img"
						aria-label={label}
						className={donutSvgStyles()}
					>
						{arcs.map((arc, index) => (
							<circle
								key={arc.label}
								cx="60"
								cy="60"
								r={RADIUS}
								pathLength={100}
								strokeDasharray={`${chart.inView ? arc.drawn : 0} 100`}
								strokeDashoffset={-arc.offset}
								onPointerEnter={() => chart.setActive(index)}
								className={donutArcStyles({
									hue: arc.hue,
									state:
										chart.active === null
											? 'rest'
											: chart.active === index
												? 'active'
												: 'dimmed',
								})}
							/>
						))}
					</svg>
					<div className={donutCenterStyles()}>
						<span className={donutValueStyles()}>
							{format(focused?.value ?? total)}
						</span>
						<span className={donutCaptionStyles()}>
							{focused?.label ?? centerLabel}
						</span>
					</div>
				</div>
				<ul className={donutLegendStyles()}>
					{arcs.map((arc, index) => (
						<li
							key={arc.label}
							data-active={chart.active === index || undefined}
							onPointerEnter={() => chart.setActive(index)}
							className={donutLegendRowStyles({ hue: arc.hue })}
						>
							<span className={donutLegendLabelStyles()}>{arc.label}</span>
							<span className={donutLegendShareStyles()}>
								{arc.share.toFixed(1)}%
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
