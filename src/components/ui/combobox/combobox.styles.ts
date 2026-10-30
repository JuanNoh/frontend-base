import { cva } from 'class-variance-authority';

export const comboboxStyles = cva('relative');

export const comboboxListStyles = cva(
	'glass-pop rounded-pop animate-in fade-in-0 zoom-in-95 absolute inset-x-0 top-full z-30 mt-1.5 max-h-64 overflow-y-auto p-1.5'
);

export const comboboxOptionStyles = cva(
	'rounded-field data-[active]:bg-ink/6 flex w-full cursor-pointer items-center gap-3 px-2.5 py-2 text-left text-sm outline-none'
);

export const comboboxOptionLabelStyles = cva('flex-1 truncate');

export const comboboxOptionDescriptionStyles = cva(
	'text-ink-muted font-mono text-[11.5px]'
);

export const comboboxEmptyStyles = cva('text-ink-muted px-2.5 py-3 text-sm');
