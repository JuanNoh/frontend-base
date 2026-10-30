import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import {
	stepperButtonStyles,
	stepperStyles,
	stepperValueStyles,
} from './number-stepper.styles';
import type { NumberStepperProps } from './number-stepper.types';
import { clamp } from './number-stepper.utils';

export function NumberStepper({
	value,
	onValueChange,
	min = 0,
	max = Number.POSITIVE_INFINITY,
	step = 1,
	className,
	'aria-label': ariaLabel,
}: NumberStepperProps) {
	return (
		<div
			role="group"
			aria-label={ariaLabel}
			className={cn(stepperStyles(), className)}
		>
			<button
				type="button"
				aria-label="Menos"
				disabled={value <= min}
				onClick={() => onValueChange(clamp(value - step, min, max))}
				className={stepperButtonStyles()}
			>
				<Minus />
			</button>
			<output className={stepperValueStyles()}>{value}</output>
			<button
				type="button"
				aria-label="Más"
				disabled={value >= max}
				onClick={() => onValueChange(clamp(value + step, min, max))}
				className={stepperButtonStyles()}
			>
				<Plus />
			</button>
		</div>
	);
}
