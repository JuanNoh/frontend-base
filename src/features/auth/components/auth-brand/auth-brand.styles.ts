import { cva } from 'class-variance-authority';

export const authBrandStyles = cva('flex items-center gap-2.5');

export const authBrandMarkStyles = cva(
	'liquid-rim rim-solid text-on-primary shadow-btn-brand grid shrink-0 place-items-center font-mono font-semibold [--fill:var(--brand)]',
	{
		variants: {
			size: {
				md: 'rounded-field size-8 text-xs',
				lg: 'rounded-card size-12 text-sm',
			},
		},
		defaultVariants: { size: 'md' },
	}
);

export const authBrandTextStyles = cva(
	'flex min-w-0 flex-col [&_b]:text-[13px] [&_b]:font-semibold [&_small]:text-ink-muted [&_small]:text-[11px]'
);
