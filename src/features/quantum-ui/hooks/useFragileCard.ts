import { useState } from 'react';

export function useFragileCard() {
	const [hasCrashed, setHasCrashed] = useState(false);
	if (hasCrashed) throw new Error('Demostración: esta tarjeta falló.');

	return { crash: () => setHasCrashed(true) };
}
