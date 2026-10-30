import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const kanbanBoardStyles = cva(
	'flex items-stretch gap-3 max-md:snap-x max-md:overflow-x-auto max-md:pb-3'
);

export const kanbanColumnStyles = cva(
	'rounded-card bg-surface-sunken data-[over]:bg-primary-soft data-[over]:ring-primary/40 flex min-h-64 w-72 shrink-0 snap-start flex-col gap-2 p-2.5 ring-1 ring-transparent transition-colors md:w-auto md:min-w-0 md:flex-1'
);

export const kanbanColumnHeaderStyles = cva(
	'flex items-center gap-2 px-1 py-0.5 text-sm font-medium'
);

export const kanbanColumnDotStyles = cva('size-2 shrink-0 rounded-full bg-(--c)', {
	variants: { hue: HUES },
	defaultVariants: { hue: 'brand' },
});

export const kanbanColumnCountStyles = cva('ml-auto');

export const kanbanListStyles = cva('flex flex-1 flex-col gap-2');

export const kanbanEmptyStyles = cva(
	'text-ink-muted border-line rounded-field grid flex-1 place-items-center border border-dashed p-4 text-xs'
);

export const kanbanCardStyles = cva(
	'rounded-field border-line-soft surface-card shadow-card relative flex cursor-grab flex-col gap-1.5 border p-3 text-sm select-none active:cursor-grabbing'
);

export const kanbanCardTopStyles = cva('flex items-start gap-1');

export const kanbanCardTitleStyles = cva('min-w-0 flex-1 pr-6 leading-snug font-medium');

export const kanbanCardHandleStyles = cva(
	'text-ink-muted -ml-1 cursor-grab touch-none py-0.5 md:hidden [&_svg]:size-4'
);

export const kanbanCardMenuStyles = cva('absolute top-1.5 right-1.5 size-7');

export const kanbanCardSubtitleStyles = cva('text-ink-muted truncate text-xs');

export const kanbanCardFootStyles = cva('mt-1 flex items-center gap-2');

export const kanbanCardMetaStyles = cva(
	'text-ink-muted ml-auto font-mono text-[11px] tabular-nums'
);
