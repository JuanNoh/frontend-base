import type { ReactNode } from 'react';

export interface DemoCardProps {
	title: string;
	aside?: ReactNode;
	children: ReactNode;
	className?: string;
	bodyClassName?: string;
}
