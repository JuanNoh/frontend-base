import { cva } from 'class-variance-authority';

export const pageHeaderStyles = cva('flex flex-wrap items-end justify-between gap-4');

export const pageHeaderTextStyles = cva('min-w-0');

export const pageHeaderEyebrowStyles = cva(
	'text-primary-strong text-sm font-medium first-letter:uppercase'
);

export const pageHeaderTitleStyles = cva(
	'mt-0.5 text-2xl font-semibold tracking-tight text-balance sm:text-3xl'
);

export const pageHeaderDescriptionStyles = cva(
	'text-ink-muted mt-1 max-w-2xl text-sm text-pretty'
);

export const pageHeaderActionsStyles = cva('flex flex-wrap items-center gap-2');
