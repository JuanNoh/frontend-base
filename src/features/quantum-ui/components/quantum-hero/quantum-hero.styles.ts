import { cva } from 'class-variance-authority';

export const quantumHeroStyles = cva(
	'grid scroll-mt-20 items-start gap-6 lg:grid-cols-[1.1fr_1fr]'
);

export const quantumHeroIntroStyles = cva('flex flex-col gap-6');

export const quantumHeroEyebrowStyles = cva('text-primary-strong text-sm font-medium');

export const quantumHeroTitleStyles = cva(
	'mt-1 text-4xl font-semibold tracking-tight text-balance sm:text-[44px] sm:leading-[1.05] [&_span]:text-primary-strong'
);
