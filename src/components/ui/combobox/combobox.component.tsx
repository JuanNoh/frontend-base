import { Search } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import {
	fieldStyles,
	inputAdornmentStyles,
	inputBoxStyles,
	inputControlStyles,
} from '@/components/ui/input/input.styles';
import { useFieldIds } from '@/components/ui/input/useFieldIds';
import {
	comboboxEmptyStyles,
	comboboxListStyles,
	comboboxOptionDescriptionStyles,
	comboboxOptionLabelStyles,
	comboboxOptionStyles,
	comboboxStyles,
} from './combobox.styles';
import type { ComboboxProps } from './combobox.types';
import { useCombobox } from './useCombobox';

export function Combobox({
	options,
	value,
	onValueChange,
	label,
	hint,
	placeholder = 'Escribe para buscar',
	emptyMessage = 'Sin coincidencias.',
	id,
	className,
}: ComboboxProps) {
	const { controlId, hintId, describedBy } = useFieldIds({ id, hint });
	const combobox = useCombobox(options, value, onValueChange);

	return (
		<div className={cn(fieldStyles(), comboboxStyles(), className)}>
			<FieldLabel htmlFor={controlId}>{label}</FieldLabel>
			<div className={inputBoxStyles()}>
				<span className={inputAdornmentStyles()}>
					<Search />
				</span>
				<input
					id={controlId}
					role="combobox"
					autoComplete="off"
					aria-expanded={combobox.isOpen}
					aria-controls={combobox.listId}
					aria-activedescendant={
						combobox.isOpen
							? combobox.optionId(combobox.activeIndex)
							: undefined
					}
					aria-describedby={describedBy}
					placeholder={placeholder}
					value={combobox.query}
					onChange={(event) => combobox.onInputChange(event.target.value)}
					onKeyDown={combobox.onKeyDown}
					onFocus={combobox.open}
					onBlur={combobox.close}
					className={inputControlStyles()}
				/>
			</div>
			{combobox.isOpen && (
				<div id={combobox.listId} role="listbox" className={comboboxListStyles()}>
					{combobox.results.length === 0 && (
						<p className={comboboxEmptyStyles()}>{emptyMessage}</p>
					)}
					{combobox.results.map((option, index) => (
						<button
							key={option.value}
							id={combobox.optionId(index)}
							type="button"
							role="option"
							tabIndex={-1}
							aria-selected={option.value === value}
							data-active={index === combobox.activeIndex || undefined}
							onMouseDown={(event) => event.preventDefault()}
							onMouseMove={() => combobox.setActiveIndex(index)}
							onClick={() => combobox.choose(option)}
							className={comboboxOptionStyles()}
						>
							<span className={comboboxOptionLabelStyles()}>
								{option.label}
							</span>
							{option.description && (
								<span className={comboboxOptionDescriptionStyles()}>
									{option.description}
								</span>
							)}
						</button>
					))}
				</div>
			)}
			<FieldHint id={hintId}>{hint}</FieldHint>
		</div>
	);
}
