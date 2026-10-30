import { createFileRoute } from '@tanstack/react-router';
import { BoardPage } from '@/features/screens/board.page';

export const Route = createFileRoute('/ui/tablero')({
	component: BoardPage,
});
