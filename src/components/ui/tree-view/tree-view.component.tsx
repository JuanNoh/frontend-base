import type { CSSProperties } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import {
	treeChevronStyles,
	treeIconStyles,
	treeLabelStyles,
	treeMetaStyles,
	treeRowStyles,
	treeStyles,
} from './tree-view.styles';
import type { TreeViewProps } from './tree-view.types';
import { useTreeView } from './useTreeView';

export function TreeView({
	nodes,
	label,
	selectedId,
	onSelect,
	defaultExpanded,
	className,
}: TreeViewProps) {
	const tree = useTreeView({ nodes, selectedId, onSelect, defaultExpanded });

	return (
		<ul role="tree" aria-label={label} className={cn(treeStyles(), className)}>
			{tree.rows.map((row, index) => {
				const Icon = row.icon;
				const isOpen = tree.isExpanded(row.id);

				return (
					<li
						key={row.id}
						role="treeitem"
						aria-level={row.depth + 1}
						aria-expanded={row.hasChildren ? isOpen : undefined}
						aria-selected={row.id === selectedId}
						tabIndex={row.id === tree.tabStop ? 0 : -1}
						onClick={() => tree.activate(row)}
						onKeyDown={tree.onKeyDown(row, index)}
						className={treeRowStyles()}
						style={{ '--depth': row.depth } as CSSProperties}
					>
						<ChevronRight
							className={treeChevronStyles({
								open: isOpen,
								hidden: !row.hasChildren,
							})}
						/>
						{Icon && <Icon className={treeIconStyles()} />}
						<span className={treeLabelStyles()}>{row.label}</span>
						{row.meta && <span className={treeMetaStyles()}>{row.meta}</span>}
					</li>
				);
			})}
		</ul>
	);
}
