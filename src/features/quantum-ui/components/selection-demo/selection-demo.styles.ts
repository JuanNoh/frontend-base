import { cva } from 'class-variance-authority';

export const selectionGridStyles = cva('grid gap-4 lg:grid-cols-2');

export const selectionCardStyles = cva('flex flex-col gap-5');

export const selectionChecksStyles = cva('flex flex-col gap-3');

export const selectionCheckRowStyles = cva(
	'flex cursor-pointer items-start gap-2.5 text-sm'
);

export const selectionCheckboxStyles = cva('mt-0.5');

export const selectionHintStyles = cva('text-ink-muted block text-xs');

export const selectionSwitchesStyles = cva('divide-line-soft flex flex-col divide-y');

export const selectionSwitchRowStyles = cva(
	'flex cursor-pointer items-center justify-between gap-4 px-5 py-4'
);

export const selectionSwitchLabelStyles = cva('block text-sm font-medium');

export const selectionRangeCardStyles = cva(
	'flex flex-col gap-5 lg:col-span-2 lg:flex-row lg:items-end lg:gap-10'
);

export const selectionSliderStyles = cva('flex flex-1 flex-col gap-2');

export const selectionStepperStyles = cva('flex flex-col gap-2');

export const selectionStepperRowStyles = cva('flex items-center gap-3');
