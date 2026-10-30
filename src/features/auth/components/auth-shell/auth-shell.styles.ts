import { cva } from 'class-variance-authority';

export const authShellStyles = cva(
	'bg-surface-muted relative isolate flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-10 lg:py-16'
);

export const authShellCardStyles = cva(
	'glass-pop rounded-dialog flex w-full max-w-[420px] flex-col gap-7 p-7 sm:p-9'
);

export const authShellBodyStyles = cva(
	'animate-in fade-in-0 slide-in-from-bottom-2 flex flex-col gap-6 duration-300 motion-reduce:animate-none'
);

export const authShellHeaderStyles = cva('flex flex-col gap-1.5');

export const authShellIconStyles = cva(
	'hue-tile rounded-card mb-2 grid size-11 place-items-center [&_svg]:size-5'
);

export const authShellTitleStyles = cva(
	'text-2xl font-semibold tracking-tight text-balance'
);

export const authShellDescriptionStyles = cva(
	'text-ink-muted text-sm text-pretty [&_b]:text-ink [&_b]:font-medium [&_b]:break-all'
);
