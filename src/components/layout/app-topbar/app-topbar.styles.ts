import { cva } from 'class-variance-authority';

export const topbarStyles = cva(
	'border-line-soft bg-glass-bar sticky top-0 z-20 flex h-14 items-center gap-3 border-b px-4 backdrop-blur-[20px] backdrop-saturate-180 sm:px-8'
);

export const topbarMenuStyles = cva('lg:hidden');

export const topbarCollapseStyles = cva('hidden lg:inline-flex');

export const topbarActionsStyles = cva('ml-auto flex items-center gap-2');

export const topbarSearchStyles = cva(
	'bg-field text-ink-muted shadow-field hover:bg-field-hover h-control hidden w-64 cursor-pointer items-center gap-2 rounded-field px-3 text-[13px] transition-colors outline-none focus-visible:ring-3 focus-visible:ring-primary/30 md:flex [&>svg]:size-4'
);

export const topbarKbdStyles = cva(
	'border-line ml-auto rounded-[5px] border px-1.5 py-0.5 font-mono text-[11px] leading-none'
);

export const topbarThemeStyles = cva('max-sm:hidden');

export const topbarSearchIconStyles = cva('md:hidden');

export const topbarProgressStyles = cva(
	'scroll-progress bg-primary pointer-events-none absolute inset-x-0 -bottom-px h-0.5'
);
