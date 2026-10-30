import { cva } from 'class-variance-authority';

export const stepsStyles = cva('group grid auto-cols-fr grid-flow-col gap-1');

export const stepStyles = cva(
	'h-2 origin-left scale-x-0 rounded-full transition-[scale] duration-500 ease-out group-data-[visible]:scale-x-100 motion-reduce:transition-none',
	{
		variants: {
			status: {
				done: 'bg-primary',
				current:
					'animate-stripes bg-[repeating-linear-gradient(-45deg,var(--brand)_0_4px,color-mix(in_oklab,var(--brand)_25%,var(--card))_4px_8px)] bg-size-[200%_100%] motion-reduce:animate-none',
				pending: 'bg-surface-sunken',
			},
		},
	}
);
