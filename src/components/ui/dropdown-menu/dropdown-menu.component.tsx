import { Fragment } from 'react';
import { DropdownMenu as MenuPrimitive } from 'radix-ui';
import {
	dropdownItemLabelStyles,
	menuContentStyles,
	menuItemStyles,
	menuLabelStyles,
	menuSeparatorStyles,
	menuShortcutStyles,
} from './dropdown-menu.styles';
import type { DropdownMenuProps } from './dropdown-menu.types';

export function DropdownMenu({
	trigger,
	groups,
	label,
	align = 'end',
}: DropdownMenuProps) {
	return (
		<MenuPrimitive.Root>
			<MenuPrimitive.Trigger asChild>{trigger}</MenuPrimitive.Trigger>
			<MenuPrimitive.Portal>
				<MenuPrimitive.Content
					align={align}
					sideOffset={6}
					className={menuContentStyles()}
				>
					{label && (
						<MenuPrimitive.Label className={menuLabelStyles()}>
							{label}
						</MenuPrimitive.Label>
					)}
					{groups.map((group, index) => (
						<Fragment key={index}>
							{index > 0 && (
								<MenuPrimitive.Separator
									className={menuSeparatorStyles()}
								/>
							)}
							{group.map((item) => (
								<MenuPrimitive.Item
									key={item.label}
									disabled={item.disabled}
									onSelect={item.onSelect}
									className={menuItemStyles({ tone: item.tone })}
								>
									{item.icon}
									<span className={dropdownItemLabelStyles()}>
										{item.label}
									</span>
									{item.shortcut && (
										<kbd className={menuShortcutStyles()}>
											{item.shortcut}
										</kbd>
									)}
								</MenuPrimitive.Item>
							))}
						</Fragment>
					))}
				</MenuPrimitive.Content>
			</MenuPrimitive.Portal>
		</MenuPrimitive.Root>
	);
}
