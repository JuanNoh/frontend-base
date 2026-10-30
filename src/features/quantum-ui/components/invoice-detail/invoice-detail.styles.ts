import { cva } from 'class-variance-authority';

export const detailBadgesStyles = cva('flex flex-wrap gap-2');

export const detailListStyles = cva('grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm');

export const detailTermStyles = cva('text-ink-muted');

export const detailValueStyles = cva('text-right', {
	variants: { mono: { true: 'font-mono text-xs tabular-nums' } },
});

export const detailSectionLabelStyles = cva('text-ink-muted mb-2.5 text-xs font-medium');

export const totalsStyles = cva(
	'border-line grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-t border-dashed pt-3 text-sm [&_dd]:text-right [&_dd]:font-mono [&_dd]:tabular-nums [&_dt]:text-ink-muted'
);

export const totalsGrandStyles = cva(
	'contents [&_dd]:text-base [&_dd]:font-semibold [&_dt]:font-semibold [&_dt]:text-ink'
);
