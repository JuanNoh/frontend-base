import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { DropdownMenu } from 'radix-ui';
import { isNavBranch } from '@/components/layout/app-shell/app-shell.utils';
import {
	railFlyoutChevronStyles,
	railFlyoutCountStyles,
	railFlyoutItemLabelStyles,
	railFlyoutItemStyles,
	railFlyoutStyles,
} from '@/components/layout/app-rail/rail-flyout/rail-flyout.styles';
import type { RailFlyoutItemsProps } from './rail-flyout-items.types';

export function RailFlyoutItems({ nodes, onNavigate }: RailFlyoutItemsProps) {
	return (
		<>
			{nodes.map((node) =>
				isNavBranch(node.item) ? (
					<DropdownMenu.Sub key={node.key}>
						<DropdownMenu.SubTrigger
							data-active={node.active || undefined}
							className={railFlyoutItemStyles()}
						>
							{node.item.icon && <node.item.icon />}
							<span className={railFlyoutItemLabelStyles()}>
								{node.item.label}
							</span>
							<ChevronRight className={railFlyoutChevronStyles()} />
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent
								sideOffset={10}
								alignOffset={-6}
								className={railFlyoutStyles()}
							>
								<RailFlyoutItems
									nodes={node.children}
									onNavigate={onNavigate}
								/>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
				) : (
					<DropdownMenu.Item key={node.key} asChild>
						<Link
							to={node.item.to}
							hash={node.item.hash}
							activeOptions={{
								exact: true,
								includeHash: Boolean(node.item.hash),
							}}
							onClick={onNavigate}
							className={railFlyoutItemStyles()}
						>
							{node.item.icon && <node.item.icon />}
							<span className={railFlyoutItemLabelStyles()}>
								{node.item.label}
							</span>
							{node.item.count !== undefined && (
								<span className={railFlyoutCountStyles()}>
									{node.item.count}
								</span>
							)}
						</Link>
					</DropdownMenu.Item>
				)
			)}
		</>
	);
}
