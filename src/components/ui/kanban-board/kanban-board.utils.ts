export function columnAtPoint({ x, y }: { x: number; y: number }) {
	const column = document
		.elementsFromPoint(x - window.scrollX, y - window.scrollY)
		.find(
			(node): node is HTMLElement =>
				node instanceof HTMLElement && !!node.dataset.kanbanColumn
		);

	return column?.dataset.kanbanColumn ?? null;
}
