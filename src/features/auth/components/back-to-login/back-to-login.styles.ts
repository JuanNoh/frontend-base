import { cva } from 'class-variance-authority';

export const backToLoginStyles = cva(
	'text-ink-muted hover:text-ink focus-visible:ring-primary/30 group/back rounded-btn inline-flex items-center gap-1.5 text-[13px] transition-colors outline-none focus-visible:ring-3 [&_svg]:size-3.5'
);

export const backToLoginArrowStyles = cva(
	'transition-transform duration-200 group-hover/back:-translate-x-0.5 motion-reduce:transition-none'
);
