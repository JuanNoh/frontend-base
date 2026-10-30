import type { RailNode } from '@/components/layout/app-rail/app-rail.types';

export interface RailFlyoutItemsProps {
	nodes: RailNode[];
	onNavigate: () => void;
}
