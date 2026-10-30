import { ChartTip, ChartTipRow } from '@/components/ui/chart-tip/chart-tip.component';
import { cn } from '@/lib/utils/cn';
import {
	barChartBarStyles,
	barChartCanvasStyles,
	barChartGridStyles,
	barChartGroupStyles,
	barChartHitStyles,
	barChartLegendItemStyles,
	barChartLegendStyles,
	barChartScrollStyles,
	barChartStyles,
	barChartSvgStyles,
	barChartTextStyles,
	barChartTipSwatchStyles,
} from './bar-chart.styles';
import type { BarChartProps } from './bar-chart.types';
import { CHART, layoutBars, scaleY } from './bar-chart.utils';
import { useChartHover } from '@/lib/useChartHover';

export function BarChart({
	categories,
	series,
	max,
	ticks,
	unit = '',
	label,
	className,
}: BarChartProps) {
	const { setNode, ...chart } = useChartHover<HTMLDivElement>();
	const groups = layoutBars(categories, series, max);
	const activeGroup = chart.active === null ? null : groups[chart.active];

	return (
		<div className={cn(barChartStyles(), className)}>
			<div className={barChartLegendStyles()}>
				{series.map((item) => (
					<span
						key={item.label}
						className={barChartLegendItemStyles({ tone: item.tone })}
					>
						{item.label}
					</span>
				))}
			</div>
			<div className={barChartScrollStyles()}>
				<div
					ref={setNode}
					data-visible={chart.inView || undefined}
					onPointerLeave={chart.clear}
					className={barChartCanvasStyles()}
				>
					<svg
						viewBox={`0 0 ${CHART.width} ${CHART.height}`}
						role="img"
						aria-label={label}
						className={barChartSvgStyles()}
					>
						{ticks.map((tick) => (
							<g key={tick}>
								<line
									x1={CHART.left}
									x2={CHART.width - CHART.right}
									y1={scaleY(tick, max)}
									y2={scaleY(tick, max)}
									className={barChartGridStyles()}
								/>
								<text
									x={CHART.left - 8}
									y={scaleY(tick, max) + 3.5}
									textAnchor="end"
									className={barChartTextStyles()}
								>
									{tick ? `${tick}${unit}` : '0'}
								</text>
							</g>
						))}
						{groups.map((group, index) => (
							<g
								key={group.category}
								onPointerEnter={() => chart.setActive(index)}
								className={barChartGroupStyles({
									dimmed:
										chart.active !== null && chart.active !== index,
								})}
							>
								<rect
									x={group.center - group.slot / 2}
									y={CHART.top}
									width={group.slot}
									height={CHART.height - CHART.top - CHART.bottom}
									rx={6}
									className={barChartHitStyles({
										active: chart.active === index,
									})}
								/>
								{group.bars.map((bar, position) => (
									<rect
										key={bar.key}
										x={bar.x}
										y={bar.y}
										width={bar.width}
										height={bar.height}
										rx={4}
										className={barChartBarStyles({ tone: bar.tone })}
										style={{
											transitionDelay: `${index * 70 + position * 50}ms`,
										}}
									/>
								))}
								<text
									x={group.center}
									y={CHART.height - 9}
									textAnchor="middle"
									className={barChartTextStyles()}
								>
									{group.category}
								</text>
							</g>
						))}
					</svg>
					{activeGroup && (
						<ChartTip
							position={activeGroup.center / CHART.width}
							title={activeGroup.category}
						>
							{activeGroup.bars.map((bar) => (
								<ChartTipRow
									key={bar.key}
									label={bar.label}
									value={bar.value}
									unit={unit}
									className={barChartTipSwatchStyles({
										tone: bar.tone,
									})}
								/>
							))}
						</ChartTip>
					)}
				</div>
			</div>
		</div>
	);
}
