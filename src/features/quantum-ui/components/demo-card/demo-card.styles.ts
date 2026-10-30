import { cva } from 'class-variance-authority';

export const demoCardStyles = cva(
	'rounded-card border-line-soft surface-card shadow-card flex min-w-0 flex-col border'
);

export const demoCardHeaderStyles = cva(
	'flex items-center justify-between gap-3 px-5 pt-4'
);

export const demoCardTitleStyles = cva('text-sm font-semibold');

export const demoCardBodyStyles = cva('flex min-w-0 flex-1 flex-col gap-4 p-5');
