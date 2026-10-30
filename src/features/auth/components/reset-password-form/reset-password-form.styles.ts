import { cva } from 'class-variance-authority';

export const resetPasswordFormStyles = cva('flex flex-col gap-4');

export const resetPasswordRulesStyles = cva(
	'rounded-field bg-surface-sunken grid grid-cols-1 gap-2 px-3.5 py-3 text-[13px] sm:grid-cols-2'
);

export const resetPasswordLinkStyles = cva(
	'text-ink focus-visible:ring-primary/30 rounded-[4px] font-medium underline underline-offset-4 outline-none focus-visible:ring-3'
);
