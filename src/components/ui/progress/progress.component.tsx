import { cn } from '@/lib/utils/cn';
import { progressBarStyles, progressStyles } from './progress.styles';
import type { ProgressProps } from './progress.types';

export function Progress({ value, label, className }: ProgressProps) {
	const indeterminate = value === undefined;

	return (
		<div
			role="progressbar"
			aria-label={label}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={value}
			className={cn(progressStyles(), className)}
		>
			<span
				className={progressBarStyles({ indeterminate })}
				style={indeterminate ? undefined : { width: `${value}%` }}
			/>
		</div>
	);
}
