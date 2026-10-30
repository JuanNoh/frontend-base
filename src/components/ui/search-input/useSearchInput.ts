import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useDebouncedValue } from '@/lib/useDebouncedValue';
import type { UseSearchInputOptions } from './search-input.types';

export function useSearchInput({
	defaultValue = '',
	onSearch,
	delay = 300,
}: UseSearchInputOptions) {
	const [value, setValue] = useState(defaultValue);
	const debounced = useDebouncedValue(value.trim(), delay);
	const lastSent = useRef(defaultValue.trim());

	useEffect(() => {
		if (debounced === lastSent.current) return;
		lastSent.current = debounced;
		onSearch(debounced);
	}, [debounced, onSearch]);

	const clear = () => {
		setValue('');
		lastSent.current = '';
		onSearch('');
	};

	return {
		value,
		clear,
		onChange: (next: string) => setValue(next),
		onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Escape' && value) clear();
		},
	};
}
