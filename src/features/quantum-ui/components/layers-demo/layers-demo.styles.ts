import { cva } from 'class-variance-authority';

export const layersGridStyles = cva('grid gap-4 md:grid-cols-2 xl:grid-cols-3');

export const layersTextStyles = cva('text-ink-muted text-sm');

export const layersTriggerStyles = cva('self-start');

export const layersFiltersStyles = cva('w-64');

export const layersFilterTitleStyles = cva('text-ink-muted pb-2.5 text-xs font-medium');

export const layersFilterListStyles = cva('flex flex-col gap-2.5');

export const layersFilterRowStyles = cva(
	'flex cursor-pointer items-center gap-2.5 text-sm'
);

export const layersFilterActionsStyles = cva(
	'border-line-soft mt-3 flex justify-between border-t pt-3'
);

export const layersHintStyles = cva('flex items-center gap-2 text-sm');

export const layersHintIconStyles = cva('text-ink-muted size-4');

export const layersActionsStyles = cva('flex flex-wrap gap-2');
