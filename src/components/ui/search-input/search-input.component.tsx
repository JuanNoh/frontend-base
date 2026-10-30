import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input/input.component';
import { Spinner } from '@/components/ui/spinner/spinner.component';
import { searchClearStyles } from './search-input.styles';
import type { SearchInputProps } from './search-input.types';
import { useSearchInput } from './useSearchInput';

export function SearchInput({
	defaultValue,
	onSearch,
	delay,
	isSearching,
	placeholder = 'Buscar…',
	...rest
}: SearchInputProps) {
	const search = useSearchInput({ defaultValue, onSearch, delay });

	return (
		<Input
			{...rest}
			role="searchbox"
			placeholder={placeholder}
			autoComplete="off"
			leading={<Search />}
			value={search.value}
			onChange={(event) => search.onChange(event.target.value)}
			onKeyDown={search.onKeyDown}
			trailing={
				isSearching ? (
					<Spinner />
				) : (
					search.value && (
						<button
							type="button"
							aria-label="Limpiar búsqueda"
							onClick={search.clear}
							className={searchClearStyles()}
						>
							<X />
						</button>
					)
				)
			}
		/>
	);
}
