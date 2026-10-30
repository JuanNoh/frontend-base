import { cva } from 'class-variance-authority';

export const railFlyoutStyles = cva(
	'glass-pop rounded-pop text-ink data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=right]:slide-in-from-left-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-52 overflow-y-auto p-1.5'
);

export const railFlyoutLabelStyles = cva(
	'text-ink-muted px-2.5 pt-1.5 pb-1 text-xs font-medium'
);

export const railFlyoutSeparatorStyles = cva('bg-line-soft mx-1 my-1.5 h-px');

export const railFlyoutItemStyles = cva(
	'rounded-field flex cursor-pointer items-center gap-2.5 px-2.5 py-2 text-sm outline-none select-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			tone: {
				default:
					'data-[highlighted]:bg-ink/6 data-[state=open]:bg-ink/6 [&_svg]:text-ink-muted data-[status=active]:text-primary-strong data-[active]:font-medium data-[status=active]:font-semibold data-[active]:[&>svg:first-child]:text-primary-strong data-[status=active]:[&_svg]:text-primary-strong',
				danger: 'text-danger data-[highlighted]:bg-danger-soft',
			},
		},
		defaultVariants: { tone: 'default' },
	}
);

export const railFlyoutItemLabelStyles = cva('flex-1 truncate');

export const railFlyoutCountStyles = cva('text-ink-muted font-mono text-[11px]');

export const railFlyoutChevronStyles = cva('ml-auto');
