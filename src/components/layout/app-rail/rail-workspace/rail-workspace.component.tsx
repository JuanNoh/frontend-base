import type { CSSProperties } from 'react';
import { Building2, Check, ChevronsUpDown } from 'lucide-react';
import { DropdownMenu } from 'radix-ui';
import {
	railChevronStyles,
	railTextStyles,
	railWorkspaceIconStyles,
	railWorkspaceStyles,
} from '@/components/layout/app-rail/app-rail.styles';
import {
	railFlyoutLabelStyles,
	railFlyoutStyles,
} from '@/components/layout/app-rail/rail-flyout/rail-flyout.styles';
import { RailTip } from '@/components/layout/app-rail/rail-tip/rail-tip.component';
import { cn } from '@/lib/utils/cn';
import {
	workspaceCheckStyles,
	workspaceItemStyles,
	workspaceItemTextStyles,
	workspaceMenuStyles,
} from './rail-workspace.styles';
import type { RailWorkspaceProps } from './rail-workspace.types';

export function RailWorkspace({
	workspace,
	workspaces = [],
	workspaceId,
	onWorkspaceChange,
	collapsed,
}: RailWorkspaceProps) {
	const current = workspaces.find((item) => item.id === workspaceId) ?? workspace;
	if (!current) return null;

	const summary = (
		<>
			<span className={railWorkspaceIconStyles()}>
				<Building2 />
			</span>
			<span className={railTextStyles({ collapsed })}>
				<small>{current.caption}</small>
				<b>{current.name}</b>
			</span>
		</>
	);

	if (workspaces.length < 2) {
		return (
			<RailTip enabled={collapsed} content={current.name}>
				<div className={railWorkspaceStyles({ collapsed, static: true })}>
					{summary}
				</div>
			</RailTip>
		);
	}

	return (
		<DropdownMenu.Root>
			<RailTip enabled={collapsed} content={current.name}>
				<DropdownMenu.Trigger
					aria-label={`Empresa: ${current.name}. Cambiar de empresa`}
					className={railWorkspaceStyles({ collapsed })}
				>
					{summary}
					<ChevronsUpDown className={railChevronStyles({ collapsed })} />
				</DropdownMenu.Trigger>
			</RailTip>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					side={collapsed ? 'right' : 'bottom'}
					align="start"
					sideOffset={collapsed ? 14 : 6}
					className={cn(railFlyoutStyles(), workspaceMenuStyles({ collapsed }))}
				>
					<DropdownMenu.Label className={railFlyoutLabelStyles()}>
						Cambiar de empresa
					</DropdownMenu.Label>
					<DropdownMenu.RadioGroup
						value={workspaceId}
						onValueChange={onWorkspaceChange}
					>
						{workspaces.map((item) => (
							<DropdownMenu.RadioItem
								key={item.id}
								value={item.id}
								className={workspaceItemStyles()}
							>
								<span
									className={railWorkspaceIconStyles()}
									style={{ '--c': item.accent } as CSSProperties}
								>
									<Building2 />
								</span>
								<span className={workspaceItemTextStyles()}>
									<b>{item.name}</b>
									<small>{item.caption}</small>
								</span>
								<DropdownMenu.ItemIndicator
									className={workspaceCheckStyles()}
								>
									<Check />
								</DropdownMenu.ItemIndicator>
							</DropdownMenu.RadioItem>
						))}
					</DropdownMenu.RadioGroup>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
