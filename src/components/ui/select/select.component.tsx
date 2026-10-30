import { Check, ChevronsUpDown } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import { FieldError } from '@/components/ui/field-error/field-error.component';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import { fieldStyles, inputBoxStyles } from '@/components/ui/input/input.styles';
import { useFieldIds } from '@/components/ui/input/useFieldIds';
import {
	selectContentStyles,
	selectIconStyles,
	selectItemIndicatorStyles,
	selectItemStyles,
	selectTriggerStyles,
	selectValueStyles,
} from './select.styles';
import type { SelectProps } from './select.types';

export function Select({
	options,
	label,
	hint,
	error,
	placeholder = 'Elige una opción',
	id,
	className,
	disabled,
	...rest
}: SelectProps) {
	const { controlId, hintId, errorId, describedBy } = useFieldIds({ id, hint, error });

	return (
		<div className={cn(fieldStyles(), className)}>
			<FieldLabel htmlFor={controlId}>{label}</FieldLabel>
			<SelectPrimitive.Root disabled={disabled} {...rest}>
				<SelectPrimitive.Trigger
					id={controlId}
					aria-invalid={!!error}
					aria-describedby={describedBy}
					className={cn(
						inputBoxStyles({ invalid: !!error }),
						selectTriggerStyles()
					)}
				>
					<span className={selectValueStyles()}>
						<SelectPrimitive.Value placeholder={placeholder} />
					</span>
					<SelectPrimitive.Icon className={selectIconStyles()}>
						<ChevronsUpDown />
					</SelectPrimitive.Icon>
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content
						position="popper"
						sideOffset={6}
						className={selectContentStyles()}
					>
						<SelectPrimitive.Viewport>
							{options.map((option) => (
								<SelectPrimitive.Item
									key={option.value}
									value={option.value}
									disabled={option.disabled}
									className={selectItemStyles()}
								>
									<SelectPrimitive.ItemText>
										{option.label}
									</SelectPrimitive.ItemText>
									<SelectPrimitive.ItemIndicator
										className={selectItemIndicatorStyles()}
									>
										<Check />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>
			<FieldHint id={hintId}>{hint}</FieldHint>
			<FieldError id={errorId} error={error} />
		</div>
	);
}
