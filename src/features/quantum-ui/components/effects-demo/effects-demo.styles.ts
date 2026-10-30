import { cva } from 'class-variance-authority';

export const effectsGridStyles = cva('grid gap-4 md:grid-cols-2');

export const liveChipStyles = cva(
	'live-border surface-card min-w-55 rounded-[calc(var(--r-card)+4px)] px-4.5 py-3.5'
);

export const effectStageStyles = cva(
	'rounded-card border-line-soft bg-surface-sunken relative isolate h-40 overflow-hidden border',
	{
		variants: {
			kind: {
				plain: 'grid place-items-center',
				spotlight: 'spotlight grid cursor-crosshair place-items-center',
				split: 'grid place-items-center bg-[linear-gradient(135deg,var(--card-muted)_50%,var(--text)_50%)]',
				scroll: 'flex snap-x snap-mandatory items-center gap-2.5 overflow-x-auto p-3.5',
			},
		},
		defaultVariants: { kind: 'plain' },
	}
);

export const effectDescriptionStyles = cva(
	'text-ink-muted text-[13px] text-pretty [&_code]:font-mono [&_code]:text-xs [&_code]:text-ink'
);

export const chipEnterStyles = cva(
	'ease-spring transition-[opacity,scale] duration-500 starting:scale-75 starting:opacity-0'
);

export const monthCardStyles = cva(
	'scroll-pop surface-card rounded-field border-line-soft grid h-24 w-28 shrink-0 snap-center place-items-center border font-mono text-xs font-semibold'
);

export const balancedTitleStyles = cva(
	'max-w-[26ch] px-4 text-center text-[17px] font-semibold text-balance'
);

export const spotlightCopyStyles = cva('text-center text-sm');

export const spotlightCopyTitleStyles = cva('block');

export const spotlightCopyHintStyles = cva('text-ink-muted');

export const effectChipsStyles = cva('flex flex-wrap justify-center gap-1.5 p-3');

export const effectActionsStyles = cva('flex gap-2');
