import { cva } from 'class-variance-authority';

export const systemPageStyles = cva('grid min-h-dvh place-items-center px-4 py-16');

export const systemPanelStyles = cva(
	'flex w-full max-w-md flex-col items-center gap-4 text-center transition-[opacity,translate,filter] duration-500 ease-out starting:translate-y-2 starting:opacity-0 starting:blur-sm motion-reduce:transition-none'
);

export const notFoundCodeStyles = cva(
	'bg-[linear-gradient(180deg,var(--text),color-mix(in_oklab,var(--text)_14%,transparent))] bg-clip-text font-mono text-[clamp(5.5rem,22vw,9.5rem)] leading-none font-semibold tracking-[-0.06em] text-transparent select-none'
);

export const systemTitleStyles = cva(
	'text-2xl font-semibold tracking-tight text-balance'
);

export const systemTextStyles = cva('text-ink-muted text-[15px] text-pretty');

export const systemPathStyles = cva(
	'rounded-chip bg-surface-sunken text-ink-muted max-w-full truncate px-2.5 py-1 font-mono text-xs'
);

export const systemActionsStyles = cva('mt-2 flex flex-wrap justify-center gap-2');

export const errorIconStyles = cva(
	'rounded-card bg-danger-soft text-danger grid size-14 place-items-center [&_svg]:size-6'
);

export const errorCodeStyles = cva(
	'rounded-chip bg-danger-soft text-danger px-2 py-0.5 font-mono text-xs font-medium'
);

export const errorDetailsStyles = cva('mt-2 flex w-full flex-col items-center');

export const errorDetailsTriggerStyles = cva(
	'text-ink-muted hover:text-ink focus-visible:ring-primary/30 rounded-chip flex cursor-pointer items-center gap-1 px-2 py-1 text-[13px] transition-colors outline-none focus-visible:ring-3 [&_svg]:size-3.5 [&_svg]:transition-transform data-[state=open]:[&_svg]:rotate-180'
);

export const errorDetailsBodyStyles = cva(
	'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down w-full overflow-hidden motion-reduce:animate-none'
);

export const errorDetailsBoxStyles = cva(
	'rounded-card border-line-soft bg-surface-sunken mt-3 flex flex-col gap-2 border p-3 text-left'
);

export const errorDetailsTextStyles = cva(
	'text-ink-muted max-h-48 overflow-auto font-mono text-xs break-words whitespace-pre-wrap'
);

export const errorCopyStyles = cva('self-end');

export const pendingStyles = cva(
	'mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-8'
);

export const pendingHeadStyles = cva('flex flex-col gap-3');

export const pendingEyebrowStyles = cva('w-24');

export const pendingTitleStyles = cva('h-7 w-72 max-w-full rounded-full');

export const pendingTextStyles = cva('w-[28rem] max-w-full');

export const pendingGridStyles = cva('grid gap-4 sm:grid-cols-3');

export const pendingWideStyles = cva('h-64');
