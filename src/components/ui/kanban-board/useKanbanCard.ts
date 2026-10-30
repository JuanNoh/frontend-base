import type { PointerEvent } from 'react';
import { useDragControls, type PanInfo } from 'motion/react';
import type { KanbanCardItemProps } from './kanban-board.types';
import { columnAtPoint } from './kanban-board.utils';

export function useKanbanCard({ card, columns, onMove, onHover }: KanbanCardItemProps) {
	const controls = useDragControls();

	const handleDrop = (_event: unknown, info: PanInfo) => {
		const columnId = columnAtPoint(info.point);
		onHover(null);
		if (columnId && columnId !== card.columnId) onMove(card.id, columnId);
	};

	return {
		controls,
		startDrag: (event: PointerEvent) => controls.start(event),
		startMouseDrag: (event: PointerEvent) => {
			if (event.pointerType === 'mouse') controls.start(event);
		},
		handleDrag: (_event: unknown, info: PanInfo) =>
			onHover(columnAtPoint(info.point)),
		handleDrop,
		moveTargets: columns
			.filter((column) => column.id !== card.columnId)
			.map((column) => ({
				label: column.title,
				onSelect: () => onMove(card.id, column.id),
			})),
	};
}
