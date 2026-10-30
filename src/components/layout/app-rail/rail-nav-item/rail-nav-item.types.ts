import type { RailNode } from '@/components/layout/app-rail/app-rail.types';

export interface RailNavItemProps {
	node: RailNode;
	collapsed?: boolean;
	nested?: boolean;
	onNavigate?: () => void;
}
