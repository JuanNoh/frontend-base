import { cva } from 'class-variance-authority';

export const quantumPageStyles = cva('flex flex-col gap-14');

export const verticalContentStyles = cva('flex flex-col gap-14 [&_section]:scroll-mt-32');

export const dataStackStyles = cva('flex flex-col gap-4');
