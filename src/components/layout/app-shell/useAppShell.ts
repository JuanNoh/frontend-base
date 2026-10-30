import { useState } from 'react';
import type { Command } from '@/components/ui/command-palette/command-palette.types';
import { useCommandPalette } from '@/components/ui/command-palette/useCommandPalette';
import { useAppearanceStore } from '@/stores/appearance.store';
import { useIsDesktop } from './useIsDesktop';

export function useAppShell(commands: Command[]) {
	const palette = useCommandPalette(commands);
	const [isRailOpen, setIsRailOpen] = useState(false);
	const railCollapsed = useAppearanceStore((state) => state.railCollapsed);
	const toggleRailCollapsed = useAppearanceStore((state) => state.toggleRailCollapsed);
	const isDesktop = useIsDesktop();

	return {
		palette,
		isRailOpen,
		isRailCollapsed: railCollapsed && isDesktop,
		toggleRailCollapsed,
		openRail: () => setIsRailOpen(true),
		closeRail: () => setIsRailOpen(false),
	};
}
