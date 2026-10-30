import { useState } from 'react';

export function useRailFlyout() {
	const [open, setOpen] = useState(false);

	return { open, setOpen, close: () => setOpen(false) };
}
