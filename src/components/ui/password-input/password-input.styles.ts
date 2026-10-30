import { cva } from 'class-variance-authority';

export const passwordToggleStyles = cva(
	'text-ink-muted hover:text-ink focus-visible:ring-primary/30 -mr-1 grid size-7 cursor-pointer place-items-center rounded-full outline-none focus-visible:ring-2'
);
