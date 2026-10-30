import type { MultiSelectOption } from './multi-select.types';

export function useMultiSelect(
	options: MultiSelectOption[],
	value: string[],
	onValueChange: (value: string[]) => void
) {
	const isSelected = (option: string) => value.includes(option);

	return {
		selectedOptions: options.filter((option) => isSelected(option.value)),
		isSelected,
		toggle: (option: string) =>
			onValueChange(
				isSelected(option)
					? value.filter((item) => item !== option)
					: [...value, option]
			),
		remove: (option: string) =>
			onValueChange(value.filter((item) => item !== option)),
	};
}
