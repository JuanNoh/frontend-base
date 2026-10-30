import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const agendaSidebarStyles = cva('flex min-w-0 flex-col gap-4');

export const agendaPeopleStyles = cva('flex flex-col gap-1');

export const agendaPersonStyles = cva(
	'rounded-field hover:bg-ink/4 flex cursor-pointer items-center gap-2.5 px-1.5 py-1.5 text-sm'
);

export const agendaPersonDotStyles = cva('ml-auto size-2 rounded-full bg-(--c)', {
	variants: { hue: HUES },
	defaultVariants: { hue: 'brand' },
});

export const agendaDayListStyles = cva('flex flex-col gap-1');

export const agendaDayItemStyles = cva(
	'rounded-field hover:bg-ink/4 focus-visible:ring-primary/30 flex w-full cursor-pointer items-center gap-3 px-1.5 py-1.5 text-left text-sm outline-none focus-visible:ring-2 [&_time]:text-ink-muted [&_time]:font-mono [&_time]:text-xs [&_b]:min-w-0 [&_b]:truncate [&_b]:font-medium'
);

export const agendaDayEmptyStyles = cva('text-ink-muted text-sm');
