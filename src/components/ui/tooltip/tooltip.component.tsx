import { Tooltip as TooltipPrimitive } from 'radix-ui';
import { tooltipStyles } from './tooltip.styles';
import type { TooltipProps } from './tooltip.types';

export function Tooltip({ content, children, side = 'top' }: TooltipProps) {
	return (
		<TooltipPrimitive.Root>
			<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Portal>
				<TooltipPrimitive.Content
					side={side}
					sideOffset={6}
					className={tooltipStyles()}
				>
					{content}
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		</TooltipPrimitive.Root>
	);
}
