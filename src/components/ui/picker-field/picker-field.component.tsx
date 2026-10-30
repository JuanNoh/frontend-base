import { ChevronDown } from 'lucide-react';
import { FieldError } from '@/components/ui/field-error/field-error.component';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import { fieldStyles, inputBoxStyles } from '@/components/ui/input/input.styles';
import { useFieldIds } from '@/components/ui/input/useFieldIds';
import { Popover } from '@/components/ui/popover/popover.component';
import { cn } from '@/lib/utils/cn';
import { pickerFieldTriggerStyles, pickerFieldValueStyles } from './picker-field.styles';
import type { PickerFieldProps } from './picker-field.types';

export function PickerField({
	label,
	hint,
	error,
	placeholder,
	id,
	className,
	icon,
	value,
	open,
	onOpenChange,
	children,
}: PickerFieldProps) {
	const { controlId, hintId, errorId, describedBy } = useFieldIds({ id, hint, error });

	return (
		<div className={cn(fieldStyles(), className)}>
			<FieldLabel htmlFor={controlId}>{label}</FieldLabel>
			<Popover
				open={open}
				onOpenChange={onOpenChange}
				trigger={
					<button
						id={controlId}
						type="button"
						aria-invalid={!!error}
						aria-describedby={describedBy}
						className={cn(
							inputBoxStyles({ invalid: !!error }),
							pickerFieldTriggerStyles()
						)}
					>
						{icon}
						<span
							data-empty={!value || undefined}
							className={pickerFieldValueStyles()}
						>
							{value ?? placeholder}
						</span>
						<ChevronDown />
					</button>
				}
			>
				{children}
			</Popover>
			<FieldHint id={hintId}>{hint}</FieldHint>
			<FieldError id={errorId} error={error} />
		</div>
	);
}
