import { CHART, scaleY } from '@/components/ui/bar-chart/bar-chart.utils';
import { ChartTip, ChartTipRow } from '@/components/ui/chart-tip/chart-tip.component';
import { useChartHover } from '@/lib/useChartHover';
import { cn } from '@/lib/utils/cn';
import {
	lineAreaStyles,
	lineCanvasStyles,
	lineChartStyles,
	lineDotStyles,
	lineGridStyles,
	lineGuideStyles,
	lineHitStyles,
	lineLegendItemStyles,
	lineLegendStyles,
	lineScrollStyles,
	lineSeriesStyles,
	lineStrokeStyles,
	lineSvgStyles,
	lineTextStyles,
	lineTipSwatchStyles,
} from './line-chart.styles';
import type { LineChartProps } from './line-chart.types';
import { categoryX, layoutLines } from './line-chart.utils';

export function LineChart({
	categories,
	series,
	max,
	ticks,
	unit = '',
	label,
	className,
}: LineChartProps) {
	const { setNode, ...chart } = useChartHover<HTMLDivElement>();
	const lines = layoutLines(categories, series, max);
	const slot =
		(CHART.width - CHART.left - CHART.right) / Math.max(categories.length - 1, 1);
	const plotHeight = CHART.height - CHART.top - CHART.bottom;
	const activeX =
		chart.active === null ? null : categoryX(chart.active, categories.length);

	return (
		<div className={cn(lineChartStyles(), className)}>
			<div className={lineLegendStyles()}>
				{series.map((item) => (
					<span
						key={item.label}
						className={lineLegendItemStyles({ hue: item.hue })}
					>
						{item.label}
					</span>
				))}
			</div>
			<div className={lineScrollStyles()}>
				<div
					ref={setNode}
					data-visible={chart.inView || undefined}
					onPointerLeave={chart.clear}
					className={lineCanvasStyles()}
				>
					<svg
						viewBox={`0 0 ${CHART.width} ${CHART.height}`}
						role="img"
						aria-label={label}
						className={lineSvgStyles()}
					>
						{ticks.map((tick) => (
							<g key={tick}>
								<line
									x1={CHART.left}
									x2={CHART.width - CHART.right}
									y1={scaleY(tick, max)}
									y2={scaleY(tick, max)}
									className={lineGridStyles()}
								/>
								<text
									x={CHART.left - 8}
									y={scaleY(tick, max) + 3.5}
									textAnchor="end"
									className={lineTextStyles()}
								>
									{tick ? `${tick}${unit}` : '0'}
								</text>
							</g>
						))}
						{lines.map((item) => (
							<g
								key={item.label}
								className={lineSeriesStyles({ hue: item.hue })}
							>
								<path d={item.area} className={lineAreaStyles()} />
								<path
									d={item.line}
									pathLength={1}
									className={lineStrokeStyles()}
								/>
							</g>
						))}
						{activeX !== null && (
							<line
								x1={activeX}
								x2={activeX}
								y1={CHART.top}
								y2={CHART.top + plotHeight}
								className={lineGuideStyles()}
							/>
						)}
						{chart.active !== null &&
							lines.map((item) => (
								<g
									key={item.label}
									className={lineSeriesStyles({ hue: item.hue })}
								>
									<circle
										cx={item.points[chart.active ?? 0].x}
										cy={item.points[chart.active ?? 0].y}
										r={4.5}
										className={lineDotStyles()}
									/>
								</g>
							))}
						{categories.map((category, index) => {
							const x = categoryX(index, categories.length);

							return (
								<g
									key={category}
									onPointerEnter={() => chart.setActive(index)}
								>
									<rect
										x={x - slot / 2}
										y={CHART.top}
										width={slot}
										height={plotHeight}
										className={lineHitStyles()}
									/>
									<text
										x={x}
										y={CHART.height - 9}
										textAnchor="middle"
										className={lineTextStyles()}
									>
										{category}
									</text>
								</g>
							);
						})}
					</svg>
					{chart.active !== null && activeX !== null && (
						<ChartTip
							position={activeX / CHART.width}
							title={categories[chart.active]}
						>
							{lines.map((item) => (
								<ChartTipRow
									key={item.label}
									label={item.label}
									value={item.points[chart.active ?? 0].value}
									unit={unit}
									className={lineTipSwatchStyles({ hue: item.hue })}
								/>
							))}
						</ChartTip>
					)}
				</div>
			</div>
		</div>
	);
}
