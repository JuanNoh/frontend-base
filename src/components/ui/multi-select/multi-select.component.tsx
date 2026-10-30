import { Check, ChevronDown, X } from 'lucide-react';
import { Popover as PopoverPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import {
	checkboxIconStyles,
	checkboxStyles,
} from '@/components/ui/checkbox/checkbox.styles';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import { fieldStyles } from '@/components/ui/input/input.styles';
import { useFieldIds } from '@/components/ui/input/useFieldIds';
import { popoverContentStyles } from '@/components/ui/popover/popover.styles';
import {
	multiSelectBoxStyles,
	multiSelectListStyles,
	multiSelectOptionStyles,
	multiSelectPlaceholderStyles,
	multiSelectTagRemoveStyles,
	multiSelectTagStyles,
	multiSelectTriggerStyles,
} from './multi-select.styles';
import type { MultiSelectProps } from './multi-select.types';
import { useMultiSelect } from './useMultiSelect';

export function MultiSelect({
	options,
	value,
	onValueChange,
	label,
	hint,
	placeholder = 'Elige opciones',
	id,
	className,
}: MultiSelectProps) {
	const { controlId, hintId, describedBy } = useFieldIds({ id, hint });
	const select = useMultiSelect(options, value, onValueChange);

	return (
		<div className={cn(fieldStyles(), className)}>
			<FieldLabel htmlFor={controlId}>{label}</FieldLabel>
			<PopoverPrimitive.Root>
				<PopoverPrimitive.Anchor className={multiSelectBoxStyles()}>
					{select.selectedOptions.length === 0 && (
						<span className={multiSelectPlaceholderStyles()}>
							{placeholder}
						</span>
					)}
					{select.selectedOptions.map((option) => (
						<span key={option.value} className={multiSelectTagStyles()}>
							{option.label}
							<button
								type="button"
								aria-label={`Quitar ${option.label}`}
								onClick={() => select.remove(option.value)}
								className={multiSelectTagRemoveStyles()}
							>
								<X />
							</button>
						</span>
					))}
					<PopoverPrimitive.Trigger
						id={controlId}
						aria-describedby={describedBy}
						aria-label={label ?? placeholder}
						className={multiSelectTriggerStyles()}
					>
						<ChevronDown />
					</PopoverPrimitive.Trigger>
				</PopoverPrimitive.Anchor>
				<PopoverPrimitive.Portal>
					<PopoverPrimitive.Content
						align="start"
						sideOffset={6}
						className={cn(
							popoverContentStyles({ padding: 'sm' }),
							multiSelectListStyles()
						)}
					>
						{options.map((option) => (
							<button
								key={option.value}
								type="button"
								role="menuitemcheckbox"
								aria-checked={select.isSelected(option.value)}
								onClick={() => select.toggle(option.value)}
								className={multiSelectOptionStyles()}
							>
								<span
									aria-hidden="true"
									data-state={
										select.isSelected(option.value)
											? 'checked'
											: 'unchecked'
									}
									className={checkboxStyles()}
								>
									<Check
										className={checkboxIconStyles({
											state: 'checked',
										})}
										strokeWidth={3}
									/>
								</span>
								{option.label}
							</button>
						))}
					</PopoverPrimitive.Content>
				</PopoverPrimitive.Portal>
			</PopoverPrimitive.Root>
			<FieldHint id={hintId}>{hint}</FieldHint>
		</div>
	);
}
