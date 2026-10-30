import { cva } from 'class-variance-authority';

export const drawerContentStyles = cva(
	'bg-surface text-ink shadow-pop rounded-l-dialog data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right fixed inset-y-0 right-0 z-50 flex w-[min(460px,100vw)] flex-col duration-300 outline-none'
);

export const drawerHeaderStyles = cva(
	'border-line-soft flex items-start justify-between gap-3 border-b px-5 py-4'
);

export const drawerEyebrowStyles = cva('text-primary-strong text-xs font-medium');

export const drawerTitleStyles = cva('text-lg font-semibold tracking-tight');

export const drawerDescriptionStyles = cva('text-ink-muted mt-0.5 text-sm');

export const drawerBodyStyles = cva(
	'flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-5'
);

export const drawerFooterStyles = cva(
	'border-line-soft flex flex-wrap justify-end gap-2 border-t px-5 py-3.5'
);
