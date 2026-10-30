import { cva } from 'class-variance-authority';

export const noticesGridStyles = cva('grid gap-4 lg:grid-cols-2');

export const noticesColumnStyles = cva('grid content-start gap-4');

export const noticesBadgesStyles = cva('flex flex-wrap gap-2');

export const noticesLoadingStyles = cva('flex items-center gap-2');

export const noticesSkeletonRowStyles = cva('flex items-center gap-3');

export const noticesSkeletonLinesStyles = cva('flex flex-1 flex-col gap-2');

export const skeletonWideStyles = cva('w-3/5');

export const skeletonNarrowStyles = cva('w-2/5');

export const skeletonLongStyles = cva('w-4/5');

export const noticesEmptyStyles = cva('lg:col-span-2');
