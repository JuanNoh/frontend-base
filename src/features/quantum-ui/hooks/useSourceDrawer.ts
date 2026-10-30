import { useState } from 'react';

export function useSourceDrawer() {
	const [isOpen, setIsOpen] = useState(false);

	return {
		isOpen,
		open: () => setIsOpen(true),
		close: () => setIsOpen(false),
	};
}
