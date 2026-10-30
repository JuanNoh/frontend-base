import { DropdownMenu } from 'radix-ui';
import { Tooltip } from '@/components/ui/tooltip/tooltip.component';
import {
	railLinkLabelStyles,
	railLinkStyles,
} from '@/components/layout/app-rail/app-rail.styles';
import { RailFlyoutItems } from '@/components/layout/app-rail/rail-flyout-items/rail-flyout-items.component';
import { railFlyoutLabelStyles, railFlyoutStyles } from './rail-flyout.styles';
import type { RailFlyoutProps } from './rail-flyout.types';
import { useRailFlyout } from './useRailFlyout';

export function RailFlyout({ item, active, nodes }: RailFlyoutProps) {
	const { open, setOpen, close } = useRailFlyout();

	return (
		<DropdownMenu.Root open={open} onOpenChange={setOpen}>
			<Tooltip side="right" content={item.label}>
				<DropdownMenu.Trigger
					data-active={active || undefined}
					className={railLinkStyles({ collapsed: true })}
				>
					{item.icon && <item.icon />}
					<span className={railLinkLabelStyles({ collapsed: true })}>
						{item.label}
					</span>
				</DropdownMenu.Trigger>
			</Tooltip>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					side="right"
					align="start"
					sideOffset={14}
					className={railFlyoutStyles()}
				>
					<DropdownMenu.Label className={railFlyoutLabelStyles()}>
						{item.label}
					</DropdownMenu.Label>
					<RailFlyoutItems nodes={nodes} onNavigate={close} />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
