import { cn } from '@/lib/utils/cn';
import { FieldError } from '@/components/ui/field-error/field-error.component';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import { fieldStyles } from '@/components/ui/input/input.styles';
import { useFieldIds } from '@/components/ui/input/useFieldIds';
import { textareaBoxStyles, textareaControlStyles } from './textarea.styles';
import type { TextareaProps } from './textarea.types';

export function Textarea({ label, hint, error, className, id, ...rest }: TextareaProps) {
	const { controlId, hintId, errorId, describedBy } = useFieldIds({ id, hint, error });

	return (
		<div className={cn(fieldStyles(), className)}>
			<FieldLabel htmlFor={controlId}>{label}</FieldLabel>
			<div className={textareaBoxStyles({ invalid: !!error })}>
				<textarea
					id={controlId}
					aria-invalid={!!error}
					aria-describedby={describedBy}
					className={textareaControlStyles()}
					{...rest}
				/>
			</div>
			<FieldHint id={hintId}>{hint}</FieldHint>
			<FieldError id={errorId} error={error} />
		</div>
	);
}
