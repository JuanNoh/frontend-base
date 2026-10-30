import { LayoutGroup } from 'motion/react';
import { Badge } from '@/components/ui/badge/badge.component';
import { cn } from '@/lib/utils/cn';
import { KanbanCardItem } from './kanban-card-item.component';
import {
	kanbanBoardStyles,
	kanbanColumnCountStyles,
	kanbanColumnDotStyles,
	kanbanColumnHeaderStyles,
	kanbanColumnStyles,
	kanbanEmptyStyles,
	kanbanListStyles,
} from './kanban-board.styles';
import type { KanbanBoardProps } from './kanban-board.types';
import { useKanbanBoard } from './useKanbanBoard';

export function KanbanBoard({ columns, cards, onMove, className }: KanbanBoardProps) {
	const board = useKanbanBoard(cards);

	return (
		<LayoutGroup>
			<div className={cn(kanbanBoardStyles(), className)}>
				{columns.map((column) => {
					const columnCards = board.cardsIn(column.id);

					return (
						<section
							key={column.id}
							aria-label={column.title}
							data-kanban-column={column.id}
							data-over={board.hoveredColumn === column.id || undefined}
							className={kanbanColumnStyles()}
						>
							<header className={kanbanColumnHeaderStyles()}>
								<span
									className={kanbanColumnDotStyles({ hue: column.hue })}
								/>
								{column.title}
								<Badge className={kanbanColumnCountStyles()}>
									{columnCards.length}
								</Badge>
							</header>
							{columnCards.length === 0 ? (
								<p className={kanbanEmptyStyles()}>
									Suelta una tarjeta aquí
								</p>
							) : (
								<ul className={kanbanListStyles()}>
									{columnCards.map((card) => (
										<KanbanCardItem
											key={card.id}
											card={card}
											columns={columns}
											onMove={onMove}
											onHover={board.setHoveredColumn}
										/>
									))}
								</ul>
							)}
						</section>
					);
				})}
			</div>
		</LayoutGroup>
	);
}
