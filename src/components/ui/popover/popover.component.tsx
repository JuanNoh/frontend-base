import { Popover as PopoverPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import { popoverContentStyles } from './popover.styles';
import type { PopoverProps } from './popover.types';

export function Popover({
	trigger,
	children,
	open,
	onOpenChange,
	align = 'start',
	padding,
	className,
}: PopoverProps) {
	return (
		<PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
			<PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
			<PopoverPrimitive.Portal>
				<PopoverPrimitive.Content
					align={align}
					sideOffset={6}
					className={cn(popoverContentStyles({ padding }), className)}
				>
					{children}
				</PopoverPrimitive.Content>
			</PopoverPrimitive.Portal>
		</PopoverPrimitive.Root>
	);
}
