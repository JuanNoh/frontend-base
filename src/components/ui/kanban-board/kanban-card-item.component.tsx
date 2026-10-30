import { GripVertical, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { Avatar } from '@/components/ui/avatar/avatar.component';
import { Badge } from '@/components/ui/badge/badge.component';
import { Button } from '@/components/ui/button/button.component';
import { DropdownMenu } from '@/components/ui/dropdown-menu/dropdown-menu.component';
import { INDICATOR_SPRING } from '@/lib/motion';
import {
	kanbanCardFootStyles,
	kanbanCardHandleStyles,
	kanbanCardMenuStyles,
	kanbanCardMetaStyles,
	kanbanCardStyles,
	kanbanCardSubtitleStyles,
	kanbanCardTitleStyles,
	kanbanCardTopStyles,
} from './kanban-board.styles';
import type { KanbanCardItemProps } from './kanban-board.types';
import { useKanbanCard } from './useKanbanCard';

export function KanbanCardItem(props: KanbanCardItemProps) {
	const { card } = props;
	const item = useKanbanCard(props);

	return (
		<motion.li
			layoutId={card.id}
			transition={INDICATOR_SPRING}
			drag
			dragControls={item.controls}
			dragListener={false}
			dragSnapToOrigin
			dragMomentum={false}
			whileDrag={{ scale: 1.03, rotate: 1.5, zIndex: 40 }}
			onPointerDown={item.startMouseDrag}
			onDrag={item.handleDrag}
			onDragEnd={item.handleDrop}
			className={kanbanCardStyles()}
		>
			<div className={kanbanCardTopStyles()}>
				<span
					aria-hidden="true"
					onPointerDown={item.startDrag}
					className={kanbanCardHandleStyles()}
				>
					<GripVertical />
				</span>
				<p className={kanbanCardTitleStyles()}>{card.title}</p>
				<DropdownMenu
					label="Mover a"
					align="end"
					groups={[item.moveTargets]}
					trigger={
						<Button
							variant="ghost"
							size="icon"
							aria-label={`Mover ${card.title}`}
							className={kanbanCardMenuStyles()}
						>
							<MoreHorizontal />
						</Button>
					}
				/>
			</div>
			{card.subtitle && (
				<p className={kanbanCardSubtitleStyles()}>{card.subtitle}</p>
			)}
			<div className={kanbanCardFootStyles()}>
				{card.tag && <Badge tone={card.tag.tone}>{card.tag.label}</Badge>}
				<span className={kanbanCardMetaStyles()}>{card.meta}</span>
				{card.person && <Avatar name={card.person} size="sm" />}
			</div>
		</motion.li>
	);
}
