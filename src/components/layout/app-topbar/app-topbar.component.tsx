import {
	Menu,
	Monitor,
	Moon,
	PanelLeftClose,
	PanelLeftOpen,
	Search,
	Sun,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs/breadcrumbs.component';
import { Button } from '@/components/ui/button/button.component';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import type { SegmentedOption } from '@/components/ui/segmented/segmented.types';
import { Tooltip } from '@/components/ui/tooltip/tooltip.component';
import type { ThemeMode } from '@/stores/appearance.store';
import {
	topbarActionsStyles,
	topbarCollapseStyles,
	topbarKbdStyles,
	topbarMenuStyles,
	topbarProgressStyles,
	topbarSearchIconStyles,
	topbarSearchStyles,
	topbarStyles,
	topbarThemeStyles,
} from './app-topbar.styles';
import type { AppTopbarProps } from './app-topbar.types';
import { TopbarNotifications } from './topbar-notifications/topbar-notifications.component';
import { useThemeMode } from './useThemeMode';

const MODES: SegmentedOption<ThemeMode>[] = [
	{ value: 'light', label: <Sun />, ariaLabel: 'Claro' },
	{ value: 'dark', label: <Moon />, ariaLabel: 'Oscuro' },
	{ value: 'system', label: <Monitor />, ariaLabel: 'Sistema' },
];

export function AppTopbar({
	crumbs,
	collapsed,
	onMenu,
	onToggleCollapse,
	onSearch,
	notifications,
	onNotificationsRead,
}: AppTopbarProps) {
	const { mode, setMode } = useThemeMode();

	return (
		<header data-shell="topbar" className={topbarStyles()}>
			<Button
				variant="ghost"
				size="icon"
				aria-label="Abrir menú"
				onClick={onMenu}
				className={topbarMenuStyles()}
			>
				<Menu />
			</Button>
			<Tooltip content={collapsed ? 'Expandir menú' : 'Contraer menú'}>
				<Button
					variant="ghost"
					size="icon"
					aria-label={collapsed ? 'Expandir menú' : 'Contraer menú'}
					onClick={onToggleCollapse}
					className={topbarCollapseStyles()}
				>
					{collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
				</Button>
			</Tooltip>
			<Breadcrumbs items={crumbs.map((label) => ({ label }))} />
			<div className={topbarActionsStyles()}>
				<button type="button" onClick={onSearch} className={topbarSearchStyles()}>
					<Search />
					Buscar o ejecutar…
					<kbd className={topbarKbdStyles()}>⌘K</kbd>
				</button>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Buscar"
					onClick={onSearch}
					className={topbarSearchIconStyles()}
				>
					<Search />
				</Button>
				<Segmented
					aria-label="Tema"
					value={mode}
					onValueChange={setMode}
					options={MODES}
					className={topbarThemeStyles()}
				/>
				{notifications && (
					<TopbarNotifications
						notifications={notifications}
						onReadAll={onNotificationsRead}
					/>
				)}
			</div>
			<span className={topbarProgressStyles()} />
		</header>
	);
}
