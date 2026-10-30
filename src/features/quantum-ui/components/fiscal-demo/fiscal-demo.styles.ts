import { cva } from 'class-variance-authority';

export const fiscalGridStyles = cva(
	'grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]'
);

export const fiscalFormStyles = cva('grid gap-5 sm:grid-cols-2');

export const fiscalActionsStyles = cva('flex justify-end sm:col-span-2');

export const fiscalSamplesStyles = cva('flex flex-wrap gap-2');
