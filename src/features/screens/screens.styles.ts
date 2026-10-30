import { cva } from 'class-variance-authority';

export const screenStyles = cva('flex flex-col gap-6');

export const screenSplitStyles = cva('grid items-start gap-4 lg:grid-cols-[1.6fr_1fr]');

export const screenSectionTitleStyles = cva('text-base font-semibold tracking-tight');

export const screenSectionStyles = cva('flex flex-col gap-3');

export const screenCardsStyles = cva('grid gap-4 sm:grid-cols-2 lg:grid-cols-3');

export const checkoutGridStyles = cva(
	'grid items-start gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]'
);

export const checkoutCatalogStyles = cva('flex min-w-0 flex-col gap-3');

export const checkoutToolbarStyles = cva('flex flex-wrap items-center gap-3');

export const checkoutSearchStyles = cva('sm:max-w-64');

export const checkoutProductsStyles = cva(
	'grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4'
);

export const checkoutTicketStyles = cva('lg:sticky lg:top-20');

export const agendaLayoutStyles = cva(
	'grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]'
);

export const boardToolbarStyles = cva(
	'flex flex-wrap items-center justify-between gap-3'
);
