import { cva } from 'class-variance-authority';

export const commandOverlayStyles = cva(
	'bg-scrim data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-[2px]'
);

export const commandContentStyles = cva(
	'glass-pop rounded-dialog text-ink data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 fixed top-[12vh] left-1/2 z-50 w-[min(600px,calc(100vw-24px))] -translate-x-1/2 overflow-hidden outline-none'
);

export const commandTitleStyles = cva('sr-only');

export const commandInputWrapStyles = cva(
	'border-line-soft text-ink-muted flex items-center gap-3 border-b px-4 py-3.5 [&>svg]:size-4.5'
);

export const commandInputStyles = cva(
	'placeholder:text-ink-muted/80 text-ink min-w-0 flex-1 bg-transparent text-[15px] outline-none'
);

export const commandListStyles = cva('max-h-[min(380px,50vh)] overflow-y-auto p-1.5');

export const commandGroupLabelStyles = cva(
	'text-ink-muted px-2.5 pt-2.5 pb-1 text-xs font-medium'
);

export const commandItemStyles = cva(
	'rounded-field data-[active]:bg-ink/6 flex w-full cursor-pointer items-center gap-3 px-2.5 py-2.5 text-left text-sm outline-none [&_svg]:text-ink-muted [&_svg]:size-4 [&_svg]:shrink-0'
);

export const commandItemLabelStyles = cva('flex-1');

export const commandKbdStyles = cva(
	'border-line text-ink-muted rounded-[5px] border px-1.5 py-0.5 font-mono text-[11px] leading-none'
);

export const commandEmptyStyles = cva('text-ink-muted px-3 py-8 text-center text-sm');

export const commandFooterStyles = cva(
	'border-line-soft text-ink-muted flex gap-4 border-t px-4 py-2.5 text-xs'
);
