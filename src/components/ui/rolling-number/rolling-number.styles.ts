import { cva } from 'class-variance-authority';

export const rollingNumberStyles = cva(
	'inline-flex font-mono leading-none font-semibold tracking-tight whitespace-pre tabular-nums'
);

export const rollingDigitStyles = cva('inline-block h-[1em] overflow-hidden');

export const rollingColumnStyles = cva(
	'ease-spring flex flex-col transition-[translate] duration-700 [&>span]:block [&>span]:h-[1em]'
);

export const rollingSrStyles = cva('sr-only');
