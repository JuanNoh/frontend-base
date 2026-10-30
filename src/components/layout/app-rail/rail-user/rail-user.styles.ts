import { cva } from 'class-variance-authority';

export const railUserStyles = cva(
	'border-rail-line mt-auto flex items-center gap-2.5 rounded-[calc(var(--r-field)+4px)] border p-2.5'
);

export const railUserTriggerStyles = cva(
	'hover:bg-rail-hover aria-expanded:bg-rail-hover mt-auto flex w-full cursor-pointer items-center rounded-[calc(var(--r-field)+4px)] border border-transparent px-[7px] py-2.5 transition-colors outline-none focus-visible:ring-3 focus-visible:ring-primary/30'
);

export const railIconButtonStyles = cva(
	'text-rail-muted hover:bg-rail-hover hover:text-rail-ink ml-auto grid size-8 shrink-0 cursor-pointer place-items-center rounded-field outline-none focus-visible:ring-3 focus-visible:ring-primary/30 [&>svg]:size-4'
);

export const railUserMenuHeadStyles = cva(
	'px-2.5 pt-1.5 pb-1.5 [&_b]:block [&_b]:text-sm [&_b]:font-semibold [&_small]:text-ink-muted [&_small]:block [&_small]:text-xs'
);
