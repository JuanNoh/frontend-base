import type { TreeNode, TreeRow } from './tree-view.types';

export function visibleRows(
	nodes: TreeNode[],
	expanded: Set<string>,
	depth = 0,
	parentIndex = -1,
	rows: TreeRow[] = []
) {
	nodes.forEach((node) => {
		const index = rows.length;
		rows.push({
			...node,
			depth,
			parentIndex,
			hasChildren: !!node.children?.length,
		});
		if (node.children && expanded.has(node.id)) {
			visibleRows(node.children, expanded, depth + 1, index, rows);
		}
	});
	return rows;
}
