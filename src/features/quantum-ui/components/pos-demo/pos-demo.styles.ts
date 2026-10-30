import { cva } from 'class-variance-authority';

export const posGridStyles = cva('grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]');

export const posProductsStyles = cva(
	'grid content-start grid-cols-[repeat(auto-fill,minmax(min(100%,200px),1fr))] gap-3'
);

export const posLinesStyles = cva('flex flex-col gap-2.5');

export const posLineStyles = cva(
	'grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2 gap-y-1 text-sm'
);

export const posLineNameStyles = cva('truncate');

export const posLineStepperStyles = cva('col-span-2 justify-self-start');

export const posLineTotalStyles = cva('text-right font-mono text-xs tabular-nums');

export const posTotalsStyles = cva(
	'border-line grid grid-cols-[1fr_auto] gap-y-1 border-t border-dashed pt-3 text-sm [&_dd]:text-right [&_dd]:font-mono [&_dd]:tabular-nums [&_dt]:text-ink-muted'
);

export const posGrandTotalStyles = cva(
	'contents [&_dd]:text-lg [&_dd]:font-semibold [&_dt]:text-ink [&_dt]:font-semibold'
);
