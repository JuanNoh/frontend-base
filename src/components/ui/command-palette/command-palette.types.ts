import type { LucideIcon } from 'lucide-react';
import type { useCommandPalette } from './useCommandPalette';

export interface Command {
	id: string;
	label: string;
	group: string;
	icon?: LucideIcon;
	shortcut?: string;
	run: () => void;
}

export interface CommandGroup {
	label: string;
	items: { command: Command; index: number }[];
}

export type CommandPaletteState = ReturnType<typeof useCommandPalette>;

export interface CommandPaletteProps {
	palette: CommandPaletteState;
	placeholder?: string;
}
