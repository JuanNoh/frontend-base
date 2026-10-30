import { useState } from 'react';

export function useRailBranch(active: boolean) {
	const [open, setOpen] = useState(active);
	const [wasActive, setWasActive] = useState(active);

	if (active !== wasActive) {
		setWasActive(active);
		if (active) setOpen(true);
	}

	return { open, setOpen };
}
