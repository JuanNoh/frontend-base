import { cva } from 'class-variance-authority';

export const quantumUiLinkStyles = cva(
	'text-ink-muted hover:text-ink focus-visible:ring-primary/30 group/lab inline-flex items-center gap-1.5 rounded-btn text-[13px] transition-colors outline-none focus-visible:ring-3 [&_svg]:size-3.5'
);

export const quantumUiLinkArrowStyles = cva(
	'transition-transform duration-200 group-hover/lab:translate-x-0.5'
);
