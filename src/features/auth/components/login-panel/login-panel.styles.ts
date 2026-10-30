import { cva } from 'class-variance-authority';

export const loginPanelStyles = cva('flex w-full max-w-sm flex-col gap-6');

export const loginPanelHeaderStyles = cva('flex flex-col gap-1.5', {
	variants: {
		align: {
			start: 'text-left',
			center: 'items-center text-center',
		},
	},
	defaultVariants: { align: 'start' },
});

export const loginPanelTitleStyles = cva(
	'text-2xl font-semibold tracking-tight text-balance'
);

export const loginPanelDescriptionStyles = cva('text-ink-muted text-sm text-pretty');

export const loginPanelDividerStyles = cva(
	'text-ink-muted before:bg-line-soft after:bg-line-soft flex items-center gap-3 text-xs before:h-px before:flex-1 after:h-px after:flex-1'
);

export const loginPanelTermsStyles = cva(
	'text-ink-muted text-xs leading-relaxed text-balance [&_a]:text-ink [&_a]:focus-visible:ring-primary/30 [&_a]:rounded-[3px] [&_a]:font-medium [&_a]:whitespace-nowrap [&_a]:underline-offset-4 [&_a]:outline-none [&_a]:hover:underline [&_a]:focus-visible:ring-3',
	{
		variants: {
			align: {
				start: 'text-left',
				center: 'text-center',
			},
		},
		defaultVariants: { align: 'start' },
	}
);
