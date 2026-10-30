import { cva } from 'class-variance-authority';

export const loginFormStyles = cva('flex flex-col gap-4');

export const loginFormOptionsStyles = cva('flex items-center justify-between gap-3');

export const loginFormRememberStyles = cva(
	'text-ink-muted hover:text-ink flex cursor-pointer items-center gap-2 text-[13px] transition-colors select-none'
);

export const loginFormForgotStyles = cva(
	'text-primary-strong focus-visible:ring-primary/30 rounded-[4px] text-[13px] font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-3'
);

export const loginFormSubmitStyles = cva('mt-1');
