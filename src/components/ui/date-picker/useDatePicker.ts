import { useState } from 'react';

export function useDatePicker(onValueChange: (date: Date) => void) {
	const [isOpen, setIsOpen] = useState(false);

	return {
		isOpen,
		setIsOpen,
		select: (date: Date) => {
			onValueChange(date);
			setIsOpen(false);
		},
	};
}
