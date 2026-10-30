import { LogOut } from 'lucide-react';
import { DropdownMenu } from 'radix-ui';
import { Avatar } from '@/components/ui/avatar/avatar.component';
import { Tooltip } from '@/components/ui/tooltip/tooltip.component';
import { railTextStyles } from '@/components/layout/app-rail/app-rail.styles';
import {
	railFlyoutItemStyles,
	railFlyoutSeparatorStyles,
	railFlyoutStyles,
} from '@/components/layout/app-rail/rail-flyout/rail-flyout.styles';
import {
	railIconButtonStyles,
	railUserMenuHeadStyles,
	railUserStyles,
	railUserTriggerStyles,
} from './rail-user.styles';
import type { RailUserProps } from './rail-user.types';

export function RailUser({ user, collapsed, onLogout }: RailUserProps) {
	if (!collapsed) {
		return (
			<div className={railUserStyles()}>
				<Avatar name={user.name} />
				<span className={railTextStyles()}>
					<b>{user.name}</b>
					<small>{user.caption}</small>
				</span>
				{onLogout && (
					<Tooltip content="Cerrar sesión">
						<button
							type="button"
							aria-label="Cerrar sesión"
							onClick={onLogout}
							className={railIconButtonStyles()}
						>
							<LogOut />
						</button>
					</Tooltip>
				)}
			</div>
		);
	}

	return (
		<DropdownMenu.Root>
			<Tooltip side="right" content={user.name}>
				<DropdownMenu.Trigger
					aria-label={`Cuenta de ${user.name}`}
					className={railUserTriggerStyles()}
				>
					<Avatar name={user.name} />
				</DropdownMenu.Trigger>
			</Tooltip>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					side="right"
					align="end"
					sideOffset={14}
					className={railFlyoutStyles()}
				>
					<DropdownMenu.Label className={railUserMenuHeadStyles()}>
						<b>{user.name}</b>
						<small>{user.caption}</small>
					</DropdownMenu.Label>
					{onLogout && (
						<>
							<DropdownMenu.Separator
								className={railFlyoutSeparatorStyles()}
							/>
							<DropdownMenu.Item
								onSelect={onLogout}
								className={railFlyoutItemStyles({ tone: 'danger' })}
							>
								<LogOut />
								Cerrar sesión
							</DropdownMenu.Item>
						</>
					)}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
