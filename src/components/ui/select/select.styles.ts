import { cva } from 'class-variance-authority';

export const selectTriggerStyles = cva(
	'data-[placeholder]:text-ink-muted/80 data-[state=open]:bg-surface data-[state=open]:shadow-field-focus cursor-pointer text-left outline-none disabled:cursor-not-allowed disabled:opacity-55'
);

export const selectValueStyles = cva('min-w-0 flex-1 truncate');

export const selectIconStyles = cva('text-ink-muted [&_svg]:size-4');

export const selectContentStyles = cva(
	'glass-pop rounded-pop text-ink data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 z-50 max-h-(--radix-select-content-available-height) min-w-(--radix-select-trigger-width) overflow-hidden p-1.5'
);

export const selectItemStyles = cva(
	'rounded-field data-[highlighted]:bg-ink/6 relative flex cursor-pointer items-center py-2 pr-8 pl-2.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
);

export const selectItemIndicatorStyles = cva(
	'text-primary-strong absolute right-2.5 [&_svg]:size-4'
);
