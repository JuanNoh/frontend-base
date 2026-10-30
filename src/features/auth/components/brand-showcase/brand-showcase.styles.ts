import { cva } from 'class-variance-authority';

export const showcaseStyles = cva(
	'rounded-dialog border-line-soft text-ink relative isolate flex flex-col gap-8 overflow-hidden border bg-[linear-gradient(160deg,color-mix(in_oklab,var(--brand)_22%,var(--card))_0%,color-mix(in_oklab,var(--brand)_10%,var(--card))_45%,color-mix(in_oklab,var(--brand)_5%,var(--page))_100%)] p-6 shadow-[inset_0_1px_0_var(--rim)] sm:p-8 lg:justify-between lg:p-10 xl:p-12'
);

export const showcaseIntroStyles = cva('flex max-w-md flex-col gap-4');

export const showcaseTitleStyles = cva(
	'text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[44px] lg:leading-[1.05] [&_span]:text-primary-strong'
);

export const showcaseLedeStyles = cva('text-ink-muted max-w-sm text-[15px] text-pretty');

export const showcaseListStyles = cva('mt-4 hidden flex-col gap-3 lg:flex');

export const showcaseItemStyles = cva('flex items-center gap-3 text-sm');

export const showcaseIconStyles = cva(
	'bg-surface border-line-soft text-primary-strong shadow-card rounded-field grid size-8 shrink-0 place-items-center border [&_svg]:size-4'
);

export const showcasePreviewStyles = cva('hidden max-w-lg flex-col gap-3 lg:flex');

export const showcasePreviewHeaderStyles = cva(
	'text-ink-muted flex items-center justify-between gap-3 px-1 text-xs font-medium'
);

export const brandStatsStyles = cva('grid grid-cols-2 gap-3');
