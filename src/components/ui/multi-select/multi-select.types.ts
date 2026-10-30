export interface MultiSelectOption {
	value: string;
	label: string;
}

export interface MultiSelectProps {
	options: MultiSelectOption[];
	value: string[];
	onValueChange: (value: string[]) => void;
	label?: string;
	hint?: string;
	placeholder?: string;
	id?: string;
	className?: string;
}
