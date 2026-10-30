import { cva } from 'class-variance-authority';

export const calendarStyles = cva('w-[280px] max-w-full');

export const calendarHeaderStyles = cva('flex items-center justify-between pb-2');

export const calendarTitleStyles = cva('text-sm font-semibold capitalize');

export const calendarGridStyles = cva('grid grid-cols-7 gap-0.5 text-center');

export const calendarWeekdayStyles = cva(
	'text-ink-muted py-1.5 font-mono text-[10.5px] uppercase'
);

export const calendarDayStyles = cva(
	'rounded-field hover:bg-ink/6 focus-visible:ring-primary/30 h-9 cursor-pointer text-[13px] tabular-nums transition-colors outline-none focus-visible:ring-2',
	{
		variants: {
			outside: { true: 'text-ink-muted/50' },
			today: { true: 'text-primary-strong font-bold' },
			inRange: { true: 'bg-primary-soft rounded-none! hover:bg-primary-soft' },
			selected: {
				true: 'bg-primary text-on-primary hover:bg-primary font-semibold',
			},
		},
	}
);

export const calendarFooterStyles = cva(
	'border-line-soft mt-2 flex justify-between border-t pt-2'
);
