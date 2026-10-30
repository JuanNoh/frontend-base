import { cva } from 'class-variance-authority';

export const notificationListStyles = cva('flex flex-col');

export const notificationRowStyles = cva(
	'border-line-soft flex items-center justify-between gap-4 border-b py-3 last:border-b-0 [&_b]:block [&_b]:text-sm [&_b]:font-medium [&_small]:text-ink-muted [&_small]:block [&_small]:text-xs'
);
