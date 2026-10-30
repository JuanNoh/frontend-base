import { cva } from 'class-variance-authority';

export const multiSelectBoxStyles = cva(
	'rounded-field bg-field shadow-field hover:bg-field-hover focus-within:bg-surface focus-within:shadow-field-focus flex min-h-control w-full flex-wrap items-center gap-1.5 py-1.5 pr-1.5 pl-2.5 text-sm transition-[background-color,box-shadow] duration-150'
);

export const multiSelectPlaceholderStyles = cva('text-ink-muted/80 flex-1 px-0.5');

export const multiSelectTagStyles = cva(
	'bg-primary-soft text-primary-strong rounded-chip animate-in zoom-in-90 inline-flex h-6 items-center gap-1 pr-1 pl-2.5 text-xs font-medium'
);

export const multiSelectTagRemoveStyles = cva(
	'hover:bg-primary/15 grid size-4 cursor-pointer place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary/30 [&_svg]:size-3'
);

export const multiSelectTriggerStyles = cva(
	'text-ink-muted hover:bg-ink/6 ml-auto grid size-7 cursor-pointer place-items-center rounded-field outline-none focus-visible:ring-2 focus-visible:ring-primary/30 [&_svg]:size-4'
);

export const multiSelectOptionStyles = cva(
	'rounded-field hover:bg-ink/6 flex w-full cursor-pointer items-center gap-2.5 px-2.5 py-2 text-left text-sm outline-none focus-visible:bg-ink/6'
);

export const multiSelectListStyles = cva('w-(--radix-popover-trigger-width) min-w-56');
