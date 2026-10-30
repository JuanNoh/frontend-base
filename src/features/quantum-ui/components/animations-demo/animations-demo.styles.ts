import { cva } from 'class-variance-authority';

export const stageStyles = cva(
	'rounded-card border-line-soft bg-surface-sunken relative isolate grid h-44 place-items-center overflow-hidden border'
);

export const checkButtonStyles = cva(
	'liquid-rim text-on-primary relative grid size-16 cursor-pointer place-items-center rounded-full [--fill:var(--brand)] [&_svg]:size-7'
);

export const radarStyles = cva('radar-ring', {
	variants: {
		delay: {
			first: '',
			second: '[animation-delay:1.2s]',
		},
	},
	defaultVariants: { delay: 'first' },
});

export const checkResultStyles = cva(
	'rounded-chip absolute bottom-3 flex items-center gap-2 px-3 py-1.5 text-xs font-semibold [&_svg]:size-4',
	{
		variants: {
			state: {
				ok: 'bg-success-soft text-success',
				birthday: 'bg-primary-soft text-primary-strong',
				rejected: 'bg-danger-soft text-danger',
			},
		},
	}
);

export const rollingValueStyles = cva('text-3xl font-semibold tracking-tight');

export const tiltCardStyles = cva(
	'rounded-card border-(--rim) relative flex h-32 w-52 flex-col justify-between border bg-[linear-gradient(140deg,oklch(from_var(--c)_56%_c_h),oklch(from_var(--c)_42%_c_h))] p-4 text-(--n-50) shadow-[0_18px_40px_-16px_color-mix(in_oklab,var(--c)_60%,transparent)] [--c:var(--hue-indigo)] [transform-style:preserve-3d]'
);

export const tiltLabelStyles = cva('text-xs font-medium opacity-80');

export const tiltNameStyles = cva('text-base font-semibold [transform:translateZ(24px)]');

export const reorderListStyles = cva('flex flex-col gap-1.5');

export const reorderRowStyles = cva(
	'rounded-field bg-surface-sunken flex items-center gap-3 px-3 py-2 text-sm'
);

export const avatarStyles = cva(
	'hue-tile grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-semibold'
);

export const reorderTimeStyles = cva(
	'text-ink-muted ml-auto font-mono text-xs tabular-nums'
);

export const fadeLineStyles = cva('text-sm font-medium');

export const animationsGridStyles = cva('grid gap-4 md:grid-cols-2 xl:grid-cols-3');

export const checkinCardStyles = cva('xl:row-span-2');

export const checkinActionsStyles = cva('flex flex-wrap gap-2');

export const rollingActionsStyles = cva('flex gap-2');

export const fadeLinesStyles = cva('flex flex-col gap-2');
