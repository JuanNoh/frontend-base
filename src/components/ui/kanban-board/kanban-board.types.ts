import type { BadgeProps } from '@/components/ui/badge/badge.types';
import type { Hue } from '@/lib/hues';

export interface KanbanColumn {
	id: string;
	title: string;
	hue?: Hue;
}

export interface KanbanCard {
	id: string;
	columnId: string;
	title: string;
	subtitle?: string;
	tag?: { label: string; tone?: BadgeProps['tone'] };
	person?: string;
	meta?: string;
}

export interface KanbanBoardProps {
	columns: KanbanColumn[];
	cards: KanbanCard[];
	onMove: (cardId: string, columnId: string) => void;
	className?: string;
}

export interface KanbanCardItemProps {
	card: KanbanCard;
	columns: KanbanColumn[];
	onMove: KanbanBoardProps['onMove'];
	onHover: (columnId: string | null) => void;
}
