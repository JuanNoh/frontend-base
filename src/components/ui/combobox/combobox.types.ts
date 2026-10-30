export interface ComboboxOption {
	value: string;
	label: string;
	description?: string;
}

export interface ComboboxProps {
	options: ComboboxOption[];
	value?: string;
	onValueChange: (value: string) => void;
	label?: string;
	hint?: string;
	placeholder?: string;
	emptyMessage?: string;
	id?: string;
	className?: string;
}
