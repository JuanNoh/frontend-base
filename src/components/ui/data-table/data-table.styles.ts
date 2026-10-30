import { cva } from 'class-variance-authority';

export const dataTableStyles = cva(
	'rounded-card border-line-soft surface-card shadow-card overflow-hidden border'
);

export const dataTableToolbarStyles = cva(
	'border-line-soft flex flex-wrap items-center gap-3 border-b p-3.5'
);

export const dataTableSearchStyles = cva('sm:max-w-72');

export const dataTableActionsStyles = cva('ml-auto flex flex-wrap items-center gap-2');

export const dataTableSelectionStyles = cva(
	'bg-primary-soft text-primary-strong border-line-soft animate-in fade-in-0 slide-in-from-top-1 flex flex-wrap items-center gap-3 border-b px-4 py-2.5 text-sm font-medium'
);

export const dataTableScrollStyles = cva('overflow-x-auto');

export const dataTableTableStyles = cva(
	'w-full border-separate border-spacing-0 text-sm transition-opacity aria-busy:opacity-60'
);

export const dataTableHeadStyles = cva(
	'text-ink-muted border-line-soft border-b px-4 py-2.5 text-left text-xs font-medium whitespace-nowrap',
	{
		variants: {
			align: { left: '', right: 'text-right' },
			select: { true: 'w-11 pr-0' },
		},
	}
);

export const dataTableSortStyles = cva(
	'hover:text-ink focus-visible:ring-primary/30 inline-flex cursor-pointer items-center gap-1 rounded-sm outline-none focus-visible:ring-2 [&_svg]:size-3'
);

export const dataTableRowStyles = cva(
	'hover:bg-ink/3 data-[selected]:bg-primary-soft transition-colors'
);

export const dataTableCellStyles = cva(
	'border-line-soft border-b px-4 py-3 align-middle whitespace-nowrap',
	{
		variants: {
			align: { left: '', right: 'text-right' },
			select: { true: 'w-11 pr-0' },
		},
	}
);

export const dataTableEmptyStyles = cva('text-ink-muted px-4 py-10 text-center text-sm');

export const dataTableFooterStyles = cva(
	'text-ink-muted flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-xs'
);

export const dataTablePagerStyles = cva('justify-end px-3 py-2');
