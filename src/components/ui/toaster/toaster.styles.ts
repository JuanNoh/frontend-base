import { cva } from 'class-variance-authority';

export const toastStyles = cva(
	'glass-pop rounded-card text-ink flex w-(--width) items-start gap-3 p-3.5 text-sm [&_[data-icon]]:mt-0.5 [&_[data-icon]]:shrink-0 [&_[data-icon]_svg]:size-4'
);

export const toastTitleStyles = cva('font-semibold');

export const toastDescriptionStyles = cva('text-ink-muted mt-0.5 text-xs');

export const toastToneStyles = cva('', {
	variants: {
		tone: {
			success: '[&_[data-icon]]:text-success',
			error: '[&_[data-icon]]:text-danger',
			warning: '[&_[data-icon]]:text-warning',
			info: '[&_[data-icon]]:text-info',
		},
	},
});

export const toastActionStyles = cva(
	'text-primary-strong hover:bg-ink/6 ml-auto cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium'
);
