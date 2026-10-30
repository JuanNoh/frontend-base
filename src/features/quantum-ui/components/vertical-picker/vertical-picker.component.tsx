import { Segmented } from '@/components/ui/segmented/segmented.component';
import { VERTICAL_OPTIONS } from '../../data/verticals/verticals';
import { verticalPickerStyles } from './vertical-picker.styles';
import type { VerticalPickerProps } from './vertical-picker.types';

export function VerticalPicker({ value, onValueChange }: VerticalPickerProps) {
	return (
		<div className={verticalPickerStyles()}>
			<Segmented
				aria-label="Giro del negocio"
				value={value}
				onValueChange={onValueChange}
				options={VERTICAL_OPTIONS}
			/>
		</div>
	);
}
