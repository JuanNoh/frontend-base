import type { ReactNode } from 'react';

export interface AccordionItem {
	value: string;
	title: string;
	content: ReactNode;
}

export interface AccordionProps {
	items: AccordionItem[];
	multiple?: boolean;
	defaultOpen?: string[];
	className?: string;
}
