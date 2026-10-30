import type { ReactNode } from 'react';

export interface ChartTipProps {
	position: number;
	title: string;
	children: ReactNode;
}

export interface ChartTipRowProps {
	label: string;
	value: number;
	unit?: string;
	className?: string;
}
