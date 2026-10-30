import { cva } from 'class-variance-authority';

export const splitLoginStyles = cva(
	'grid flex-1 gap-2 p-3 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]'
);

export const splitLoginFormColumnStyles = cva(
	'flex flex-col items-center gap-10 px-3 pt-8 pb-4 sm:px-6 lg:pt-20'
);

export const splitLoginBodyStyles = cva('flex w-full flex-1 items-center justify-center');
