import { cva } from 'class-variance-authority';

export const searchClearStyles = cva(
	'text-ink-muted hover:text-ink focus-visible:ring-primary/30 rounded-field grid size-6 cursor-pointer place-items-center transition-colors outline-none focus-visible:ring-2 [&_svg]:size-3.5'
);
