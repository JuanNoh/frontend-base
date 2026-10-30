import { cva } from 'class-variance-authority';

export const resetLinkSentStyles = cva('flex flex-col gap-3');

export const resetLinkSentDemoStyles = cva('mb-2');

export const resetLinkSentLinkStyles = cva(
	'text-primary-strong focus-visible:ring-primary/30 rounded-[4px] font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-3'
);

export const resetLinkSentResendStyles = cva('tabular-nums');
