import { useState, type KeyboardEvent } from 'react';
import type { TreeRow, TreeViewProps } from './tree-view.types';
import { visibleRows } from './tree-view.utils';

function focusRow(from: HTMLElement, index: number) {
	const row = from.parentElement?.children[index];
	if (row instanceof HTMLElement) row.focus();
}

export function useTreeView({
	nodes,
	selectedId,
	onSelect,
	defaultExpanded = [],
}: Pick<TreeViewProps, 'nodes' | 'selectedId' | 'onSelect' | 'defaultExpanded'>) {
	const [expanded, setExpanded] = useState(() => new Set(defaultExpanded));
	const rows = visibleRows(nodes, expanded);

	const toggle = (id: string) =>
		setExpanded((current) => {
			const next = new Set(current);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});

	const activate = (row: TreeRow) => {
		if (row.hasChildren) toggle(row.id);
		onSelect?.(row.id);
	};

	const onKeyDown =
		(row: TreeRow, index: number) => (event: KeyboardEvent<HTMLElement>) => {
			const element = event.currentTarget;
			const isOpen = expanded.has(row.id);

			if (event.key === 'ArrowDown') focusRow(element, index + 1);
			else if (event.key === 'ArrowUp') focusRow(element, index - 1);
			else if (event.key === 'ArrowRight' && row.hasChildren) {
				if (isOpen) focusRow(element, index + 1);
				else toggle(row.id);
			} else if (event.key === 'ArrowLeft') {
				if (isOpen) toggle(row.id);
				else if (row.parentIndex >= 0) focusRow(element, row.parentIndex);
			} else if (event.key === 'Enter' || event.key === ' ') activate(row);
			else return;

			event.preventDefault();
		};

	return {
		rows,
		isExpanded: (id: string) => expanded.has(id),
		activate,
		onKeyDown,
		tabStop: selectedId ?? rows[0]?.id,
	};
}
