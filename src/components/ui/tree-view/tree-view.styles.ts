import { cva } from 'class-variance-authority';

export const treeStyles = cva('flex flex-col gap-0.5');

export const treeRowStyles = cva(
	'rounded-field hover:bg-ink/5 focus-visible:ring-primary/30 aria-selected:bg-primary-soft aria-selected:text-primary-strong flex cursor-pointer items-center gap-2 py-1.5 pr-2.5 pl-[calc(var(--depth)*18px+8px)] text-sm transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-inset aria-selected:font-medium [&_svg]:size-4 [&_svg]:shrink-0'
);

export const treeChevronStyles = cva(
	'text-ink-muted transition-transform motion-reduce:transition-none',
	{
		variants: {
			open: { true: 'rotate-90' },
			hidden: { true: 'invisible' },
		},
	}
);

export const treeIconStyles = cva('text-ink-muted');

export const treeLabelStyles = cva('min-w-0 flex-1 truncate');

export const treeMetaStyles = cva('text-ink-muted font-mono text-xs tabular-nums');
