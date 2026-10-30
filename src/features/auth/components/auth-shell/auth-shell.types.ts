import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface AuthShellProps {
	icon: LucideIcon;
	title: string;
	description: ReactNode;
	children: ReactNode;
}
