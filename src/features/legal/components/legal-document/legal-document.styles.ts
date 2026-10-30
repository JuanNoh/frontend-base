import { cva } from 'class-variance-authority';

export const legalPageStyles = cva(
	'bg-surface-muted min-h-dvh px-3 py-6 sm:px-6 sm:py-14'
);

export const legalArticleStyles = cva(
	'rounded-dialog border-line-soft surface-card shadow-card mx-auto flex max-w-2xl flex-col gap-6 border p-6 sm:p-10'
);

export const legalBackStyles = cva('-ml-2 self-start');

export const legalHeaderStyles = cva('flex flex-col gap-2');

export const legalEyebrowStyles = cva('text-primary-strong text-xs font-medium');

export const legalTitleStyles = cva(
	'text-3xl font-semibold tracking-tight text-balance sm:text-4xl'
);

export const legalMetaStyles = cva('text-ink-muted text-sm');

export const legalIntroStyles = cva('text-[15px] leading-relaxed text-pretty');

export const legalSectionsStyles = cva('flex flex-col gap-7');

export const legalSectionStyles = cva('flex flex-col gap-2');

export const legalSectionTitleStyles = cva(
	'text-base font-semibold [&_span]:text-ink-muted [&_span]:mr-1.5 [&_span]:tabular-nums'
);

export const legalParagraphStyles = cva(
	'text-ink-muted text-sm leading-relaxed text-pretty'
);

export const legalFooterStyles = cva(
	'border-line-soft flex flex-wrap items-center justify-between gap-3 border-t pt-6'
);

export const legalRelatedStyles = cva(
	'text-primary-strong focus-visible:ring-primary/30 rounded-[4px] text-sm font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-3'
);
