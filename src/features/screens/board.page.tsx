import { Plus, Search } from 'lucide-react';
import { AvatarGroup } from '@/components/ui/avatar/avatar.component';
import { Button } from '@/components/ui/button/button.component';
import { Input } from '@/components/ui/input/input.component';
import { KanbanBoard } from '@/components/ui/kanban-board/kanban-board.component';
import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { BOARD_TEAM } from './data/board';
import { useBoard } from './hooks/useBoard';
import { boardToolbarStyles, checkoutSearchStyles, screenStyles } from './screens.styles';

export function BoardPage() {
	const board = useBoard();

	return (
		<div className={screenStyles()}>
			<PageHeader
				title="Tablero"
				description="Arrastra una tarjeta para cambiarla de etapa, o usa su menú."
				actions={
					<Button onClick={board.addCard}>
						<Plus />
						Nuevo pedido
					</Button>
				}
			/>
			<div className={boardToolbarStyles()}>
				<Input
					aria-label="Buscar pedido"
					placeholder="Buscar pedido o cliente"
					leading={<Search />}
					value={board.query}
					onChange={board.changeQuery}
					className={checkoutSearchStyles()}
				/>
				<AvatarGroup people={BOARD_TEAM} />
			</div>
			<KanbanBoard
				columns={board.columns}
				cards={board.cards}
				onMove={board.move}
			/>
		</div>
	);
}
