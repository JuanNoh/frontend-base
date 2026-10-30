import { cva } from 'class-variance-authority';

export const systemDemoGridStyles = cva('grid gap-4 md:grid-cols-3');

export const systemStageStyles = cva(
	'rounded-card border-line-soft bg-surface-sunken relative isolate flex h-36 flex-col items-center justify-center gap-2 overflow-hidden border'
);

export const miniCodeStyles = cva(
	'bg-[linear-gradient(180deg,var(--text),color-mix(in_oklab,var(--text)_14%,transparent))] bg-clip-text font-mono text-5xl leading-none font-semibold tracking-[-0.06em] text-transparent'
);

export const miniCaptionStyles = cva('text-ink-muted text-xs');

export const miniErrorIconStyles = cva(
	'rounded-field bg-danger-soft text-danger grid size-10 place-items-center [&_svg]:size-5'
);

export const miniBarTrackStyles = cva('absolute inset-x-0 top-0 h-[3px] overflow-hidden');

export const miniBarStyles = cva(
	'animate-indeterminate block h-full w-1/2 rounded-full bg-[linear-gradient(90deg,var(--brand),var(--hue-teal))] motion-reduce:animate-none'
);

export const miniSkeletonStyles = cva('flex w-3/4 flex-col gap-2');
