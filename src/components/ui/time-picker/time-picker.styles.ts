import { cva } from 'class-variance-authority';

export const timePanelStyles = cva('grid grid-cols-2 gap-1');

export const timeColumnStyles = cva(
	'flex max-h-56 w-16 flex-col gap-0.5 overflow-y-auto overscroll-contain [scrollbar-width:thin]'
);

export const timeOptionStyles = cva(
	'rounded-field hover:bg-ink/6 focus-visible:ring-primary/30 aria-pressed:bg-primary aria-pressed:text-on-primary shrink-0 cursor-pointer py-1.5 font-mono text-[13px] tabular-nums transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset'
);
