import { cva } from 'class-variance-authority';

export const minimalLoginStyles = cva(
	'flex flex-1 flex-col items-center gap-10 px-6 py-10 lg:py-16'
);

export const minimalLoginBodyStyles = cva(
	'flex w-full max-w-[360px] flex-1 flex-col items-center justify-center gap-8'
);
