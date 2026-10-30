import type { ComboboxOption } from './combobox.types';

export function filterOptions(options: ComboboxOption[], query: string) {
	const needle = query.trim().toLowerCase();
	if (!needle) return options;
	return options.filter((option) =>
		`${option.label} ${option.description ?? ''}`.toLowerCase().includes(needle)
	);
}
