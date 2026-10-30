import type { Command, CommandGroup } from './command-palette.types';

export function filterCommands(commands: Command[], query: string) {
	const needle = query.trim().toLowerCase();
	if (!needle) return commands;
	return commands.filter((command) =>
		`${command.label} ${command.group}`.toLowerCase().includes(needle)
	);
}

export function groupCommands(commands: Command[]) {
	return commands.reduce<CommandGroup[]>((groups, command, index) => {
		const last = groups[groups.length - 1];
		if (last?.label === command.group) last.items.push({ command, index });
		else groups.push({ label: command.group, items: [{ command, index }] });
		return groups;
	}, []);
}

export function isPaletteShortcut(event: KeyboardEvent) {
	return (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
}
