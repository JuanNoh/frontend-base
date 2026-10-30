import { cva } from 'class-variance-authority';

export const appointmentFormStyles = cva('grid gap-4 sm:grid-cols-2');

export const appointmentFormWideStyles = cva('sm:col-span-2');

export const appointmentFormActionsStyles = cva(
	'flex justify-end gap-2 pt-2 sm:col-span-2'
);
