import { cva } from 'class-variance-authority';

export const workspaceMenuStyles = cva('', {
	variants: {
		collapsed: {
			true: 'w-64',
			false: 'w-(--radix-dropdown-menu-trigger-width) min-w-60',
		},
	},
	defaultVariants: { collapsed: false },
});

export const workspaceItemStyles = cva(
	'rounded-field data-[highlighted]:bg-ink/6 flex cursor-pointer items-center gap-2.5 px-2 py-1.5 outline-none select-none'
);

export const workspaceItemTextStyles = cva(
	'min-w-0 flex-1 [&_b]:block [&_b]:truncate [&_b]:text-[13px] [&_b]:font-medium [&_small]:text-ink-muted [&_small]:block [&_small]:truncate [&_small]:font-mono [&_small]:text-[11px]'
);

export const workspaceCheckStyles = cva('text-primary-strong [&_svg]:size-4');
