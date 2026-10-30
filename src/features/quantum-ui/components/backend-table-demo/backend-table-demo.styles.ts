import { cva } from 'class-variance-authority';

export const backendWireStyles = cva(
	'rounded-field bg-surface-sunken grid gap-x-3 gap-y-1 p-3 font-mono text-xs sm:grid-cols-[auto_minmax(0,1fr)]'
);

export const backendWireLabelStyles = cva('text-ink-muted');

export const backendWireValueStyles = cva('break-all');

export const backendTotalStyles = cva('text-ink-muted text-xs');
