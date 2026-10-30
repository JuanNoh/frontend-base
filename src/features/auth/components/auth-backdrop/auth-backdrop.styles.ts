import { cva } from 'class-variance-authority';

export const authBackdropStyles = cva(
	'pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[linear-gradient(180deg,color-mix(in_oklab,var(--brand)_14%,var(--page))_0%,var(--page)_65%)]'
);

export const authBackdropRingStyles = cva(
	'absolute top-[46%] left-1/2 -translate-1/2 rounded-full border',
	{
		variants: {
			size: {
				sm: 'size-[560px] border-[color-mix(in_oklab,var(--brand)_22%,transparent)]',
				md: 'size-[820px] border-[color-mix(in_oklab,var(--brand)_18%,transparent)]',
				lg: 'size-[1100px] border-[color-mix(in_oklab,var(--brand)_12%,transparent)]',
			},
		},
	}
);

export const authBackdropDiscStyles = cva(
	'absolute top-[16%] left-[calc(50%+70px)] size-60 rounded-full bg-[linear-gradient(210deg,color-mix(in_oklab,var(--brand)_42%,var(--page)),color-mix(in_oklab,var(--brand)_10%,var(--page))_80%)]'
);
