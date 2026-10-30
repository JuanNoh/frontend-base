import { cva } from 'class-variance-authority';

export const paymentBodyStyles = cva('flex flex-col gap-4');

export const paymentTotalStyles = cva(
	'py-2 text-center font-mono text-3xl font-semibold tabular-nums'
);

export const paymentBillsStyles = cva('flex flex-wrap gap-2');

export const paymentChangeStyles = cva(
	'text-ink-muted flex items-center justify-between text-sm [&_b]:text-ink [&_b]:font-mono [&_b]:text-base [&_b]:font-medium [&_b]:tabular-nums'
);
