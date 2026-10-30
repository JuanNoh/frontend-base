import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface EmptyStateProps {
	icon: LucideIcon;
	title: string;
	description?: string;
	actions?: ReactNode;
	className?: string;
}
