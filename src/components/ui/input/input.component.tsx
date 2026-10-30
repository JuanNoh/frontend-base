import { cn } from '@/lib/utils/cn';
import { FieldError } from '@/components/ui/field-error/field-error.component';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import {
	fieldStyles,
	inputAdornmentStyles,
	inputBoxStyles,
	inputControlStyles,
} from './input.styles';
import type { InputProps } from './input.types';
import { useFieldIds } from './useFieldIds';

export function Input({
	label,
	hint,
	error,
	leading,
	trailing,
	below,
	className,
	id,
	...rest
}: InputProps) {
	const { controlId, hintId, errorId, describedBy } = useFieldIds({ id, hint, error });

	return (
		<div className={cn(fieldStyles(), className)}>
			<FieldLabel htmlFor={controlId}>{label}</FieldLabel>
			<div className={inputBoxStyles({ invalid: !!error })}>
				{leading && <span className={inputAdornmentStyles()}>{leading}</span>}
				<input
					id={controlId}
					className={inputControlStyles()}
					aria-invalid={!!error}
					aria-describedby={describedBy}
					{...rest}
				/>
				{trailing && <span className={inputAdornmentStyles()}>{trailing}</span>}
			</div>
			{below}
			<FieldHint id={hintId}>{hint}</FieldHint>
			<FieldError id={errorId} error={error} />
		</div>
	);
}
