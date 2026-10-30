import { Input } from '@/components/ui/input/input.component';
import { cn } from '@/lib/utils/cn';
import { numberInputStyles } from './number-input.styles';
import type { NumberInputProps } from './number-input.types';
import { parseNumber } from './number-input.utils';
import { useNumberInput } from './useNumberInput';

export function NumberInput({
	decimals = 0,
	fixed = false,
	thousands = false,
	negative = false,
	min,
	max,
	ref,
	value,
	onChange,
	onBlur,
	className,
	...rest
}: NumberInputProps) {
	const { setRef, ...field } = useNumberInput({
		decimals,
		fixed,
		thousands,
		negative,
		min: parseNumber(min),
		max: parseNumber(max),
		ref,
		value,
		onChange,
		onBlur,
	});

	return (
		<Input
			{...rest}
			ref={setRef}
			value={field.value}
			onChange={field.onChange}
			onBlur={field.onBlur}
			inputMode={field.inputMode}
			autoComplete="off"
			className={cn(numberInputStyles(), className)}
		/>
	);
}
