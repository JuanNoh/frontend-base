import { useState } from 'react';
import { VERTICALS } from '../data/verticals/verticals';
import type { Vertical, VerticalId } from '../types/vertical.types';

export function useVertical() {
	const [id, setId] = useState<VerticalId>('administracion');
	const vertical: Vertical = VERTICALS[id];

	return { vertical, setId };
}
