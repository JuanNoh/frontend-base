import { cva } from 'class-variance-authority';

export const contentGridStyles = cva('grid gap-4 md:grid-cols-2');

export const contentPeopleStyles = cva('flex flex-wrap items-center gap-4');

export const fragileCardStyles = cva(
	'rounded-card bg-surface-sunken text-ink-muted flex min-h-32 flex-col items-center justify-center gap-3 p-4 text-center text-sm'
);
