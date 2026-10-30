import type { LucideIcon } from 'lucide-react';

export interface TreeNode {
	id: string;
	label: string;
	icon?: LucideIcon;
	meta?: string;
	children?: TreeNode[];
}

export interface TreeRow extends TreeNode {
	depth: number;
	parentIndex: number;
	hasChildren: boolean;
}

export interface TreeViewProps {
	nodes: TreeNode[];
	label: string;
	selectedId?: string;
	onSelect?: (id: string) => void;
	defaultExpanded?: string[];
	className?: string;
}
