import type { RailNode } from '@/components/layout/app-rail/app-rail.types';
import type { NavBranch } from '@/components/layout/app-shell/app-shell.types';

export interface RailFlyoutProps {
	item: NavBranch;
	active: boolean;
	nodes: RailNode[];
}
