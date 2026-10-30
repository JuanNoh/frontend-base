import { Link } from '@tanstack/react-router';
import { isNavBranch } from '@/components/layout/app-shell/app-shell.utils';
import {
	railCountStyles,
	railLinkLabelStyles,
	railLinkStyles,
} from '@/components/layout/app-rail/app-rail.styles';
import { RailBranch } from '@/components/layout/app-rail/rail-branch/rail-branch.component';
import { RailFlyout } from '@/components/layout/app-rail/rail-flyout/rail-flyout.component';
import { RailTip } from '@/components/layout/app-rail/rail-tip/rail-tip.component';
import type { RailNavItemProps } from './rail-nav-item.types';

export function RailNavItem({
	node,
	collapsed = false,
	nested = false,
	onNavigate,
}: RailNavItemProps) {
	const { item } = node;

	if (!isNavBranch(item)) {
		return (
			<RailTip enabled={collapsed} content={item.label}>
				<Link
					to={item.to}
					hash={item.hash}
					activeOptions={{ exact: true, includeHash: Boolean(item.hash) }}
					onClick={onNavigate}
					className={railLinkStyles({ collapsed, nested })}
				>
					{item.icon && <item.icon />}
					<span className={railLinkLabelStyles({ collapsed })}>
						{item.label}
					</span>
					{item.count !== undefined && (
						<span className={railCountStyles({ collapsed })}>
							{item.count}
						</span>
					)}
				</Link>
			</RailTip>
		);
	}

	if (collapsed) {
		return <RailFlyout item={item} active={node.active} nodes={node.children} />;
	}

	return (
		<RailBranch item={item} active={node.active} nested={nested}>
			{node.children.map((child) => (
				<RailNavItem
					key={child.key}
					node={child}
					nested
					onNavigate={onNavigate}
				/>
			))}
		</RailBranch>
	);
}
