import { useState, type ChangeEvent } from 'react';
import { toast } from 'sonner';
import { BOARD_CARDS, BOARD_COLUMNS } from '../data/board';

export function useBoard() {
	const [cards, setCards] = useState(BOARD_CARDS);
	const [query, setQuery] = useState('');
	const needle = query.trim().toLowerCase();

	return {
		columns: BOARD_COLUMNS,
		query,
		changeQuery: (event: ChangeEvent<HTMLInputElement>) =>
			setQuery(event.target.value),
		cards: cards.filter((card) =>
			`${card.title} ${card.subtitle}`.toLowerCase().includes(needle)
		),
		move: (cardId: string, columnId: string) =>
			setCards((current) =>
				current.map((card) => (card.id === cardId ? { ...card, columnId } : card))
			),
		addCard: () => {
			const folio = 2052 + cards.length - BOARD_CARDS.length;
			setCards((current) => [
				{
					id: `p-${folio}`,
					columnId: BOARD_COLUMNS[0].id,
					title: `Pedido ${folio}`,
					subtitle: 'Sin asignar',
				},
				...current,
			]);
			toast.success(`Pedido ${folio} creado`);
		},
	};
}
