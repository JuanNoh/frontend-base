import type { ReactNode } from 'react';
import type { NavBranch } from '@/components/layout/app-shell/app-shell.types';

export interface RailBranchProps {
	item: NavBranch;
	active: boolean;
	nested: boolean;
	children: ReactNode;
}
