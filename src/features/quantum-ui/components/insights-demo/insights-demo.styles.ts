import { cva } from 'class-variance-authority';

export const insightsRowStyles = cva(
	'grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'
);

export const insightsWideRowStyles = cva(
	'grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]'
);
