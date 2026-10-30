import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { cn } from '@/lib/utils/cn';
import {
	paginationGapStyles,
	paginationPageStyles,
	paginationStyles,
} from './pagination.styles';
import type { PaginationProps } from './pagination.types';
import { pageItems } from './pagination.utils';

export function Pagination({
	page,
	pageCount,
	onPageChange,
	label = 'Paginación',
	className,
}: PaginationProps) {
	if (pageCount <= 1) return null;

	return (
		<nav aria-label={label} className={cn(paginationStyles(), className)}>
			<Button
				variant="ghost"
				size="icon"
				aria-label="Página anterior"
				disabled={page <= 1}
				onClick={() => onPageChange(page - 1)}
			>
				<ChevronLeft />
			</Button>
			{pageItems(page, pageCount).map((item) =>
				item.page === undefined ? (
					<span
						key={item.key}
						aria-hidden="true"
						className={paginationGapStyles()}
					>
						…
					</span>
				) : (
					<button
						key={item.key}
						type="button"
						aria-label={`Página ${item.page}`}
						aria-current={item.page === page ? 'page' : undefined}
						onClick={() => onPageChange(item.page)}
						className={paginationPageStyles()}
					>
						{item.page}
					</button>
				)
			)}
			<Button
				variant="ghost"
				size="icon"
				aria-label="Página siguiente"
				disabled={page >= pageCount}
				onClick={() => onPageChange(page + 1)}
			>
				<ChevronRight />
			</Button>
		</nav>
	);
}
