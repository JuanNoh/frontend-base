import { cva } from 'class-variance-authority';

export const tabsStyles = cva('flex flex-col gap-4');

export const tabContentStyles = cva(
	'data-[state=active]:animate-in data-[state=active]:fade-in-0 outline-none'
);

export const tabLabelStyles = cva('relative inline-flex items-center gap-1.5');

export const tabListStyles = cva('flex', {
	variants: {
		variant: {
			line: 'border-line-soft gap-1 overflow-x-auto border-b',
			pill: 'rounded-seg bg-seg-track shadow-seg gap-0.5 self-start p-[3px]',
		},
	},
	defaultVariants: { variant: 'line' },
});

export const tabTriggerStyles = cva(
	'text-ink-muted hover:text-ink data-[state=active]:text-ink focus-visible:ring-primary/30 relative inline-flex cursor-pointer items-center gap-1.5 font-medium whitespace-nowrap transition-colors outline-none focus-visible:ring-3 [&_svg]:size-4',
	{
		variants: {
			variant: {
				line: 'rounded-field px-3 py-2.5 text-sm',
				pill: 'rounded-btn h-[calc(var(--control-h)-8px)] px-3.5 text-xs',
			},
		},
		defaultVariants: { variant: 'line' },
	}
);

export const tabIndicatorStyles = cva('absolute', {
	variants: {
		variant: {
			line: 'bg-primary inset-x-2 -bottom-px h-0.5 rounded-full',
			pill: 'bg-seg-thumb shadow-thumb rounded-btn inset-0',
		},
	},
	defaultVariants: { variant: 'line' },
});
