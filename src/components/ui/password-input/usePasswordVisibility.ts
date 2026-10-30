import { useState } from 'react';

export function usePasswordVisibility() {
	const [isVisible, setIsVisible] = useState(false);

	return {
		isVisible,
		type: isVisible ? 'text' : 'password',
		toggleLabel: isVisible ? 'Ocultar contraseña' : 'Mostrar contraseña',
		toggle: () => setIsVisible((visible) => !visible),
	};
}
