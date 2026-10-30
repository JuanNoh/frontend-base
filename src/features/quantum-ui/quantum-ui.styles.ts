import { cva } from 'class-variance-authority';

export const quantumPageStyles = cva('flex flex-col gap-14');

export const appearanceLayoutStyles = cva(
	'grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]'
);

export const verticalContentStyles = cva('flex flex-col gap-14 [&_section]:scroll-mt-32');

export const dataStackStyles = cva('flex flex-col gap-4');
