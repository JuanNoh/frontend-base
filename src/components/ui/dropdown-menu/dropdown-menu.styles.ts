import { cva } from 'class-variance-authority';

export const menuContentStyles = cva(
	'glass-pop rounded-pop text-ink data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 z-50 min-w-52 p-1.5'
);

export const menuLabelStyles = cva(
	'text-ink-muted px-2.5 pt-1.5 pb-1 text-xs font-medium'
);

export const menuSeparatorStyles = cva('bg-line-soft mx-1 my-1.5 h-px');

export const menuItemStyles = cva(
	'rounded-field flex cursor-pointer items-center gap-2.5 px-2.5 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			tone: {
				default: 'data-[highlighted]:bg-ink/6 [&_svg]:text-ink-muted',
				danger: 'text-danger data-[highlighted]:bg-danger-soft',
			},
		},
		defaultVariants: { tone: 'default' },
	}
);

export const menuShortcutStyles = cva('text-ink-muted font-mono text-[11px]');

export const dropdownItemLabelStyles = cva('flex-1');
