import { cva } from 'class-variance-authority';
import { HUES } from '@/lib/hues';

export const avatarStyles = cva(
	'hue-tile relative inline-grid shrink-0 place-items-center rounded-full font-mono font-semibold select-none',
	{
		variants: {
			size: {
				sm: 'size-8 text-xs',
				md: 'size-10 text-sm',
				lg: 'size-14 text-lg',
			},
			hue: HUES,
		},
		defaultVariants: { size: 'sm', hue: 'brand' },
	}
);

export const avatarImageStyles = cva('size-full rounded-full object-cover');

export const avatarStatusStyles = cva(
	'ring-surface absolute right-0 bottom-0 size-2.5 rounded-full ring-2',
	{
		variants: {
			status: {
				online: 'bg-success',
				busy: 'bg-warning',
				offline: 'bg-line',
			},
		},
	}
);

export const avatarGroupStyles = cva('flex items-center');

export const avatarGroupItemStyles = cva('ring-surface -ml-2 ring-2 first:ml-0');
