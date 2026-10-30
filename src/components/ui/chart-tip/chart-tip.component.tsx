import { cn } from '@/lib/utils/cn';
import {
	chartTipRowStyles,
	chartTipStyles,
	chartTipTitleStyles,
} from './chart-tip.styles';
import type { ChartTipProps, ChartTipRowProps } from './chart-tip.types';

export function ChartTip({ position, title, children }: ChartTipProps) {
	return (
		<div
			aria-hidden="true"
			className={chartTipStyles()}
			style={{ left: `clamp(76px, ${position * 100}%, calc(100% - 76px))` }}
		>
			<span className={chartTipTitleStyles()}>{title}</span>
			{children}
		</div>
	);
}

export function ChartTipRow({ label, value, unit, className }: ChartTipRowProps) {
	return (
		<span className={cn(chartTipRowStyles(), className)}>
			{label}
			<b>
				{value}
				{unit}
			</b>
		</span>
	);
}
