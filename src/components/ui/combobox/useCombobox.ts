import { useId, useMemo, useState, type KeyboardEvent } from 'react';
import type { ComboboxOption } from './combobox.types';
import { filterOptions } from './combobox.utils';

export function useCombobox(
	options: ComboboxOption[],
	value: string | undefined,
	onValueChange: (value: string) => void
) {
	const selected = options.find((option) => option.value === value);
	const [query, setQuery] = useState(selected?.label ?? '');
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const listId = useId();

	const results = useMemo(
		() => filterOptions(options, query === selected?.label ? '' : query),
		[options, query, selected?.label]
	);

	const choose = (option: ComboboxOption) => {
		onValueChange(option.value);
		setQuery(option.label);
		setIsOpen(false);
	};

	const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			setIsOpen(true);
			setActiveIndex((index) => Math.min(index + 1, results.length - 1));
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			setActiveIndex((index) => Math.max(index - 1, 0));
		} else if (event.key === 'Enter' && isOpen && results[activeIndex]) {
			event.preventDefault();
			choose(results[activeIndex]);
		} else if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};

	return {
		query,
		isOpen,
		results,
		activeIndex,
		listId,
		optionId: (index: number) => `${listId}-${index}`,
		onInputChange: (text: string) => {
			setQuery(text);
			setActiveIndex(0);
			setIsOpen(true);
		},
		onKeyDown,
		open: () => setIsOpen(true),
		close: () => setIsOpen(false),
		setActiveIndex,
		choose,
	};
}
