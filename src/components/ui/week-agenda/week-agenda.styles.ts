import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const weekAgendaStyles = cva(
	'rounded-card border-line-soft surface-card shadow-card overflow-hidden border'
);

export const weekAgendaToolbarStyles = cva(
	'border-line-soft flex flex-wrap items-center gap-2 border-b p-3'
);

export const weekAgendaTitleStyles = cva(
	'ml-1 text-sm font-semibold tracking-tight first-letter:uppercase'
);

export const weekAgendaDaysStyles = cva(
	'border-line-soft grid grid-cols-7 border-b md:ml-14'
);

export const weekAgendaDayStyles = cva(
	'text-ink-muted hover:bg-ink/3 data-[today]:text-primary-strong aria-pressed:[&_b]:bg-primary aria-pressed:[&_b]:text-on-primary focus-visible:ring-primary/30 flex cursor-pointer flex-col items-center gap-0.5 py-2 text-[11px] capitalize outline-none focus-visible:ring-2 focus-visible:ring-inset [&_b]:grid [&_b]:size-7 [&_b]:place-items-center [&_b]:rounded-full [&_b]:text-sm [&_b]:font-medium'
);

export const weekAgendaGridStyles = cva(
	'grid grid-cols-[3.5rem_minmax(0,1fr)] md:grid-cols-[3.5rem_repeat(7,minmax(0,1fr))]'
);

export const weekAgendaHourStyles = cva(
	'text-ink-muted block h-14 pt-1 pr-2 text-right font-mono text-[11px]'
);

export const weekAgendaColumnStyles = cva(
	'border-line-soft relative border-l max-md:hidden max-md:data-[selected]:block'
);

export const weekAgendaSlotStyles = cva(
	'border-line-soft hover:bg-ink/3 focus-visible:bg-primary-soft block h-14 w-full cursor-pointer border-b outline-none transition-colors'
);

export const weekAgendaEventStyles = cva(
	'hue-tile rounded-field focus-visible:ring-primary/40 absolute cursor-pointer overflow-hidden border-l-2 border-(--c,var(--brand)) px-1.5 py-1 text-left text-xs outline-none transition-[filter] hover:brightness-95 focus-visible:ring-2 [&_b]:block [&_b]:truncate [&_b]:font-medium [&_small]:block [&_small]:truncate [&_small]:text-[11px] [&_small]:opacity-80 data-[short]:py-0.5 data-[short]:[&_small]:hidden',
	{ variants: { hue: HUES }, defaultVariants: { hue: 'brand' } }
);

export const weekAgendaNowStyles = cva(
	'bg-primary pointer-events-none absolute inset-x-0 z-10 h-0.5 before:bg-primary before:absolute before:-top-[3px] before:-left-[3px] before:size-2 before:rounded-full'
);
