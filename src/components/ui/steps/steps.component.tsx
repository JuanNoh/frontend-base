import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils/cn';
import { stepStyles, stepsStyles } from './steps.styles';
import type { StepsProps } from './steps.types';
import { stepStatus } from './steps.utils';

export function Steps({ total, done, label, className }: StepsProps) {
	const { setNode, inView } = useInView<HTMLDivElement>();

	return (
		<div
			ref={setNode}
			data-visible={inView || undefined}
			role="progressbar"
			aria-label={label}
			aria-valuemin={0}
			aria-valuemax={total}
			aria-valuenow={done}
			className={cn(stepsStyles(), className)}
		>
			{Array.from({ length: total }, (_, index) => (
				<span
					key={index}
					className={stepStyles({ status: stepStatus(index, done) })}
					style={{ transitionDelay: `${index * 90}ms` }}
				/>
			))}
		</div>
	);
}
