import { Button } from '@/components/ui/button/button.component';
import { Select } from '@/components/ui/select/select.component';
import { dataTableFilterStyles } from './data-table.styles';
import type { DataTableFiltersProps } from './data-table.types';
import { ALL_FILTER } from './data-table.utils';

export function DataTableFilters<T>({
	filters,
	values,
	onChange,
	onClear,
}: DataTableFiltersProps<T>) {
	const isActive = Object.values(values).some((value) => value !== ALL_FILTER);

	return (
		<>
			{filters.map((filter) => (
				<Select
					key={filter.key}
					value={values[filter.key] ?? ALL_FILTER}
					onValueChange={(value) => onChange(filter.key, value)}
					options={[
						{ value: ALL_FILTER, label: `${filter.label}: todos` },
						...filter.options,
					]}
					className={dataTableFilterStyles()}
				/>
			))}
			{isActive && (
				<Button variant="ghost" size="sm" onClick={onClear}>
					Limpiar
				</Button>
			)}
		</>
	);
}
