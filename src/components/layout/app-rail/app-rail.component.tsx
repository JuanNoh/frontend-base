import { Search } from 'lucide-react';
import { initials } from '@/lib/format';
import {
	railBrandStyles,
	railGroupLabelStyles,
	railGroupStyles,
	railKbdStyles,
	railLogoStyles,
	railNavStyles,
	railScrimStyles,
	railSearchLabelStyles,
	railSearchStyles,
	railStyles,
	railTextStyles,
} from './app-rail.styles';
import type { AppRailProps } from './app-rail.types';
import { RailNavItem } from './rail-nav-item/rail-nav-item.component';
import { RailTip } from './rail-tip/rail-tip.component';
import { RailUser } from './rail-user/rail-user.component';
import { RailWorkspace } from './rail-workspace/rail-workspace.component';
import { useAppRail } from './useAppRail';

export function AppRail({
	nav,
	brand = { name: 'Frontend Base', caption: 'Plantilla 2026' },
	workspace,
	workspaces,
	workspaceId,
	onWorkspaceChange,
	user,
	onLogout,
	isOpen,
	collapsed,
	onClose,
	onSearch,
}: AppRailProps) {
	const groups = useAppRail(nav);

	return (
		<>
			<div
				aria-hidden="true"
				data-open={isOpen || undefined}
				onClick={onClose}
				className={railScrimStyles()}
			/>
			<aside
				data-shell="rail"
				data-open={isOpen || undefined}
				data-collapsed={collapsed || undefined}
				className={railStyles()}
			>
				<div className={railBrandStyles({ collapsed })}>
					<span className={railLogoStyles()}>{initials(brand.name)}</span>
					<span className={railTextStyles({ collapsed })}>
						<b>{brand.name}</b>
						<small>{brand.caption}</small>
					</span>
				</div>

				<RailWorkspace
					workspace={workspace}
					workspaces={workspaces}
					workspaceId={workspaceId}
					onWorkspaceChange={onWorkspaceChange}
					collapsed={collapsed}
				/>

				<RailTip enabled={collapsed} content="Buscar · ⌘K">
					<button
						type="button"
						onClick={onSearch}
						className={railSearchStyles({ collapsed })}
					>
						<Search />
						<span className={railSearchLabelStyles({ collapsed })}>
							Buscar…
						</span>
						<kbd className={railKbdStyles({ collapsed })}>⌘K</kbd>
					</button>
				</RailTip>

				<nav aria-label="Navegación" className={railNavStyles()}>
					{groups.map((group) => (
						<div key={group.key} className={railGroupStyles()}>
							{group.label && (
								<span className={railGroupLabelStyles({ collapsed })}>
									{group.label}
								</span>
							)}
							{group.nodes.map((node) => (
								<RailNavItem
									key={node.key}
									node={node}
									collapsed={collapsed}
									onNavigate={onClose}
								/>
							))}
						</div>
					))}
				</nav>

				{user && (
					<RailUser user={user} collapsed={collapsed} onLogout={onLogout} />
				)}
			</aside>
		</>
	);
}
