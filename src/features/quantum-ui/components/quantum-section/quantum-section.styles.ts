import { cva } from 'class-variance-authority';

export const quantumSectionStyles = cva('scroll-reveal flex scroll-mt-20 flex-col gap-4');

export const quantumSectionEyebrowStyles = cva('text-primary-strong text-xs font-medium');

export const quantumSectionTitleStyles = cva(
	'mt-0.5 text-xl font-semibold tracking-tight'
);

export const quantumSectionDescriptionStyles = cva(
	'text-ink-muted mt-1 max-w-2xl text-sm text-pretty'
);
