import { cva } from 'class-variance-authority';

export const companyLayoutStyles = cva(
	'grid items-start gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]'
);

export const companyFieldsStyles = cva('grid gap-4 sm:grid-cols-2');

export const companyWideStyles = cva('sm:col-span-2');

export const companyActionsStyles = cva('flex justify-end sm:col-span-2');
