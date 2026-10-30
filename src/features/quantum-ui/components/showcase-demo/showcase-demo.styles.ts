import { cva } from 'class-variance-authority';

export const showcaseStyles = cva('flex flex-col gap-3');

export const showcaseGridStyles = cva(
	'grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-3'
);

export const showcaseTitleStyles = cva('text-sm font-semibold');
