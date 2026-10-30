import { cva } from 'class-variance-authority';

export const modalOverlayStyles = cva(
	'bg-scrim data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-[3px]'
);

export const modalContentStyles = cva(
	'bg-surface text-ink rounded-dialog shadow-pop data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-2 fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 p-6 focus:outline-none'
);

export const modalTitleStyles = cva('pr-8 text-lg font-semibold tracking-tight');

export const modalDescriptionStyles = cva('text-ink-muted mt-1 text-sm');

export const modalFooterStyles = cva('mt-6 flex flex-wrap justify-end gap-2');

export const modalCloseStyles = cva('absolute top-3 right-3');

export const modalBodyStyles = cva('mt-4');
