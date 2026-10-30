import { cva } from 'class-variance-authority';

export const notificationsPanelStyles = cva(
	'flex w-[min(380px,calc(100vw-24px))] flex-col p-0'
);

export const notificationsHeadStyles = cva(
	'border-line-soft flex items-center gap-2 border-b px-4 py-3'
);

export const notificationsTitleStyles = cva('text-sm font-semibold');

export const notificationsReadAllStyles = cva('ml-auto');

export const notificationsListStyles = cva(
	'flex max-h-[min(420px,60dvh)] flex-col gap-0.5 overflow-y-auto overscroll-contain p-1.5'
);

export const notificationItemStyles = cva(
	'rounded-field relative flex gap-3 px-2.5 py-2.5 data-[unread]:bg-primary-soft/40'
);

export const notificationIconStyles = cva(
	'rounded-field grid size-8 shrink-0 place-items-center [&_svg]:size-4',
	{
		variants: {
			tone: {
				info: 'bg-info-soft text-info',
				success: 'bg-success-soft text-success',
				warning: 'bg-warning-soft text-warning',
				danger: 'bg-danger-soft text-danger',
			},
		},
	}
);

export const notificationBodyStyles = cva(
	'flex min-w-0 flex-1 flex-col gap-0.5 pr-3 [&_b]:text-[13px] [&_b]:font-medium [&_b]:text-pretty [&_small]:text-ink-muted [&_small]:text-xs [&_small]:text-pretty [&_time]:text-ink-muted [&_time]:font-mono [&_time]:text-[11px]'
);

export const notificationUnreadStyles = cva(
	'bg-primary absolute top-3.5 right-2.5 size-2 rounded-full'
);

export const notificationHiddenStyles = cva('sr-only');

export const notificationsEmptyStyles = cva('py-6');

export const topbarBellDotStyles = cva(
	'bg-danger ring-surface-muted absolute top-2 right-2 size-2 rounded-full ring-2'
);

export const topbarBellStyles = cva('relative');
