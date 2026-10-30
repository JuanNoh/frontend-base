import { cva } from 'class-variance-authority';

export const presetPickerStyles = cva('grid gap-3 sm:grid-cols-2');

export const presetCardStyles = cva(
	'rounded-card border-line bg-surface hover:border-ink/25 aria-pressed:border-primary flex cursor-pointer flex-col gap-2.5 border p-2.5 text-left transition-[border-color,box-shadow] outline-none focus-visible:ring-3 focus-visible:ring-primary/30 aria-pressed:shadow-[0_0_0_3px_color-mix(in_oklab,var(--brand)_25%,transparent)]'
);

export const presetPreviewStyles = cva(
	'border-line-soft grid h-14 grid-cols-[18px_1fr] overflow-hidden rounded-field border bg-(--preview-page)'
);

export const presetPreviewRailStyles = cva('bg-(--preview-rail)');

export const presetPreviewCanvasStyles = cva('flex flex-col gap-1.5 p-2');

export const presetPreviewAccentStyles = cva(
	'h-2.5 w-1/2 rounded-full bg-(--preview-accent)'
);

export const presetPreviewLineStyles = cva('bg-line h-1.5 rounded-full last:w-2/3');

export const presetTitleStyles = cva('text-sm font-semibold');

export const presetDescriptionStyles = cva('text-ink-muted text-xs leading-snug');
