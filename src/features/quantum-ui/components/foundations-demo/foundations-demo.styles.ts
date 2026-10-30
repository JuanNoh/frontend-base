import { cva } from 'class-variance-authority';

export const scaleStyles = cva(
	'border-line-soft rounded-field grid grid-cols-11 overflow-hidden border'
);

export const scaleStepStyles = cva(
	'flex h-14 items-end p-1.5 font-mono text-[10px] max-sm:h-10 max-sm:text-[0px]'
);

export const tokenGridStyles = cva(
	'grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2'
);

export const tokenStyles = cva(
	'border-line-soft surface-card rounded-field flex items-center gap-2.5 border p-2'
);

export const tokenSwatchStyles = cva(
	'border-line-soft rounded-check size-8 shrink-0 border'
);

export const tokenNameStyles = cva('block font-mono text-[11.5px] font-semibold');

export const tokenHintStyles = cva('text-ink-muted block text-[11px]');

export const typeRowStyles = cva(
	'border-line-soft grid items-baseline gap-1 border-b py-2.5 last:border-b-0 sm:grid-cols-[120px_1fr] sm:gap-3'
);

export const typeLabelStyles = cva('text-ink-muted font-mono text-[11px]');

export const radiiStyles = cva('flex flex-wrap gap-3');

export const radiusSampleStyles = cva(
	'border-line bg-surface-sunken text-ink-muted grid h-14 w-18 place-items-center border font-mono text-[10.5px]'
);

export const foundationsGridStyles = cva('grid gap-4 lg:grid-cols-2');

export const typeDisplayStyles = cva(
	'text-[28px] leading-tight font-semibold tracking-tight'
);

export const typeHeadingStyles = cva('text-[17px] font-semibold');

export const typeBodyStyles = cva('text-sm');

export const typeFigureStyles = cva('font-mono text-[22px] font-semibold tabular-nums');

export const typeBodyGapStyles = cva('gap-0');

export const tokenToneStyles = cva('', {
	variants: {
		tone: {
			surfaceMuted: 'bg-surface-muted',
			surface: 'bg-surface',
			ink: 'bg-ink',
			primary: 'bg-primary',
			success: 'bg-success',
			warning: 'bg-warning',
			danger: 'bg-danger',
			info: 'bg-info',
		},
	},
});

export const radiusShapeStyles = cva('', {
	variants: {
		shape: {
			button: 'rounded-btn',
			field: 'rounded-field',
			card: 'rounded-card',
			dialog: 'rounded-dialog',
			shadowSm: 'rounded-card bg-surface shadow-card',
			shadowBtn: 'rounded-card bg-surface shadow-btn',
			shadowPop: 'rounded-card bg-surface shadow-pop',
		},
	},
});
