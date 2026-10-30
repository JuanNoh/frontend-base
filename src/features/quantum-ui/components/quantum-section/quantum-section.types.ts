import type { ReactNode } from 'react';

export interface QuantumSectionProps {
	id: string;
	eyebrow?: string;
	title: string;
	description?: string;
	demo?: string;
	api?: string[];
	children: ReactNode;
}
