import { useEffect, useId, useMemo, useState, type KeyboardEvent } from 'react';
import type { Command } from './command-palette.types';
import {
	filterCommands,
	groupCommands,
	isPaletteShortcut,
} from './command-palette.utils';

export function useCommandPalette(commands: Command[]) {
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [activeIndex, setActiveIndex] = useState(0);
	const [listElement, setListElement] = useState<HTMLDivElement | null>(null);
	const listId = useId();

	const results = useMemo(() => filterCommands(commands, query), [commands, query]);
	const groups = useMemo(() => groupCommands(results), [results]);

	const reset = () => {
		setQuery('');
		setActiveIndex(0);
	};

	useEffect(() => {
		const onKeyDown = (event: globalThis.KeyboardEvent) => {
			if (!isPaletteShortcut(event)) return;
			event.preventDefault();
			setQuery('');
			setActiveIndex(0);
			setIsOpen((open) => !open);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	useEffect(() => {
		listElement?.querySelector('[data-active]')?.scrollIntoView({ block: 'nearest' });
	}, [listElement, activeIndex]);

	const run = (command: Command) => {
		setIsOpen(false);
		command.run();
	};

	const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			setActiveIndex((index) => Math.min(index + 1, results.length - 1));
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			setActiveIndex((index) => Math.max(index - 1, 0));
		} else if (event.key === 'Enter' && results[activeIndex]) {
			event.preventDefault();
			run(results[activeIndex]);
		}
	};

	return {
		isOpen,
		open: () => {
			reset();
			setIsOpen(true);
		},
		onOpenChange: setIsOpen,
		query,
		changeQuery: (value: string) => {
			setQuery(value);
			setActiveIndex(0);
		},
		groups,
		hasResults: results.length > 0,
		activeIndex,
		setActiveIndex,
		run,
		onInputKeyDown,
		listRef: setListElement,
		listId,
	};
}
