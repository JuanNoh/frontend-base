import type { VerticalId } from '../../types/vertical.types';

export interface VerticalPickerProps {
	value: VerticalId;
	onValueChange: (value: VerticalId) => void;
}
