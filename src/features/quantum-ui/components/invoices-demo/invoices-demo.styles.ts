import { cva } from 'class-variance-authority';

export const invoiceFolioStyles = cva('font-mono text-[13px] font-semibold');

export const invoiceClientStyles = cva('block');

export const invoiceClientNameStyles = cva('block font-medium');

export const invoiceRfcStyles = cva('text-ink-muted block font-mono text-[11px]');

export const invoiceTotalStyles = cva(
	'font-mono tabular-nums data-[cancelled]:text-ink-muted data-[cancelled]:line-through'
);

export const invoicesGrandTotalStyles = cva('text-ink font-mono');
