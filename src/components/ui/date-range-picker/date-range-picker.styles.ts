import { cva } from 'class-variance-authority';

export const rangePanelStyles = cva('flex flex-col gap-3 sm:flex-row');

export const rangePresetsStyles = cva(
	'border-line-soft flex flex-wrap gap-1 border-b pb-2 sm:w-36 sm:flex-col sm:border-r sm:border-b-0 sm:pr-2 sm:pb-0'
);

export const rangePresetStyles = cva(
	'rounded-field hover:bg-ink/6 focus-visible:ring-primary/30 cursor-pointer px-2.5 py-1.5 text-left text-[13px] transition-colors outline-none focus-visible:ring-2'
);
