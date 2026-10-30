import { cva } from 'class-variance-authority';

export const stepperStyles = cva(
	'bg-field shadow-field rounded-btn inline-flex h-control items-center overflow-hidden'
);

export const stepperButtonStyles = cva(
	'text-ink hover:bg-ink/6 grid h-full w-11 cursor-pointer place-items-center transition-colors outline-none focus-visible:bg-ink/6 disabled:cursor-not-allowed disabled:opacity-40 [&_svg]:size-4'
);

export const stepperValueStyles = cva(
	'border-line-soft min-w-11 border-x px-2 text-center font-mono text-sm font-semibold tabular-nums'
);
