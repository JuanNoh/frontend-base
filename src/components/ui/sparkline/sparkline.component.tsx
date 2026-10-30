import { useId } from 'react';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils/cn';
import {
	sparklineAreaStyles,
	sparklineDotStyles,
	sparklineLineStyles,
	sparklinePulseStyles,
	sparklineStyles,
} from './sparkline.styles';
import type { SparklineProps } from './sparkline.types';
import { buildSparkline } from './sparkline.utils';

export function Sparkline({
	values,
	width = 96,
	height = 30,
	className,
}: SparklineProps) {
	const gradientId = useId();
	const { setNode, inView } = useInView<SVGSVGElement>();
	const { line, area, last } = buildSparkline(values, width, height);

	return (
		<svg
			ref={setNode}
			data-visible={inView || undefined}
			viewBox={`0 0 ${width} ${height}`}
			width={width}
			height={height}
			aria-hidden="true"
			className={cn(sparklineStyles(), className)}
		>
			<defs>
				<linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0" stopColor="currentColor" stopOpacity="0.28" />
					<stop offset="1" stopColor="currentColor" stopOpacity="0" />
				</linearGradient>
			</defs>
			<path
				d={area}
				fill={`url(#${gradientId})`}
				className={sparklineAreaStyles()}
			/>
			<path
				d={line}
				pathLength={1}
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className={sparklineLineStyles()}
			/>
			<circle
				cx={last.x}
				cy={last.y}
				r="2.5"
				fill="currentColor"
				className={sparklinePulseStyles()}
			/>
			<circle
				cx={last.x}
				cy={last.y}
				r="2.5"
				fill="currentColor"
				className={sparklineDotStyles()}
			/>
		</svg>
	);
}
