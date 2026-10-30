import { cva } from 'class-variance-authority';

export const loginToolbarStyles = cva(
	'z-10 flex items-center justify-end gap-2 px-4 pt-4 lg:absolute lg:top-0 lg:right-0 lg:p-6'
);

export const loginToolbarThemeStyles = cva('hidden sm:inline-flex');
