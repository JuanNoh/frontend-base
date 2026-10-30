import { useState } from 'react';
import type { KanbanCard } from './kanban-board.types';

export function useKanbanBoard(cards: KanbanCard[]) {
	const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

	return {
		hoveredColumn,
		setHoveredColumn,
		cardsIn: (columnId: string) => cards.filter((card) => card.columnId === columnId),
	};
}
