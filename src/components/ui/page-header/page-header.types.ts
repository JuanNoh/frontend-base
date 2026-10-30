import type { ReactNode } from 'react';

export interface PageHeaderProps {
	title: string;
	eyebrow?: string;
	description?: string;
	actions?: ReactNode;
	className?: string;
}
