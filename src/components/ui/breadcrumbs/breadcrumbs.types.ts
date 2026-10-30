import type { LinkProps } from '@tanstack/react-router';

export interface BreadcrumbItem {
	label: string;
	to?: LinkProps['to'];
}

export interface BreadcrumbsProps {
	items: BreadcrumbItem[];
	className?: string;
}
