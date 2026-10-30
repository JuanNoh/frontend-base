import { cva } from 'class-variance-authority';

export const tooltipStyles = cva(
	'bg-ink text-surface-muted rounded-field shadow-btn data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 z-50 px-2.5 py-1.5 text-xs font-medium'
);
