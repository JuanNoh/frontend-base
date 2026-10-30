import type { InputProps } from '@/components/ui/input/input.types';

export type SearchInputProps = Omit<
	InputProps,
	'type' | 'value' | 'onChange' | 'leading' | 'trailing'
> & {
	defaultValue?: string;
	onSearch: (value: string) => void;
	delay?: number;
	isSearching?: boolean;
};

export type UseSearchInputOptions = Pick<
	SearchInputProps,
	'defaultValue' | 'onSearch' | 'delay'
>;
