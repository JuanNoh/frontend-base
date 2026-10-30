import type { ReactNode } from 'react';

export interface SegmentedOption<T extends string> {
	value: T;
	label: ReactNode;
	ariaLabel?: string;
}

export interface SegmentedProps<T extends string> {
	value: T;
	onValueChange: (value: T) => void;
	options: SegmentedOption<T>[];
	'aria-label': string;
	className?: string;
}
