import { useRef, type ChangeEvent, type FocusEvent } from 'react';
import { assignRef } from '@/lib/utils/assign-ref';
import type { UseNumberInputOptions } from './number-input.types';
import {
	caretAt,
	cleanNumber,
	parseNumber,
	settleNumber,
	showNumber,
} from './number-input.utils';

export function useNumberInput({
	ref,
	value,
	onChange,
	onBlur,
	...format
}: UseNumberInputOptions) {
	const previous = useRef('');
	const display = (clean: string) => showNumber(clean, format);
	const exceedsMax = (clean: string) =>
		format.max !== undefined && (parseNumber(clean) ?? 0) > format.max;

	const setRef = (node: HTMLInputElement | null) => {
		assignRef(ref, node);
		if (!node) return;
		const clean = settleNumber(cleanNumber(node.value, format), format);
		previous.current = clean;
		if (display(clean) !== node.value) node.value = display(clean);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const input = event.target;
		const raw = input.value;
		const prefix = raw.slice(0, input.selectionStart ?? raw.length);
		const clean = cleanNumber(raw, format);
		const rejected = exceedsMax(clean);
		const next = rejected ? previous.current : clean;
		const shown = display(next);
		const typed = cleanNumber(prefix, format).length;

		previous.current = next;
		if (shown !== raw) {
			input.value = shown;
			const caret = caretAt(shown, rejected ? Math.max(typed - 1, 0) : typed);
			input.setSelectionRange(caret, caret);
		}
		onChange?.(event);
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		const input = event.target;
		const settled = display(settleNumber(cleanNumber(input.value, format), format));
		if (settled !== input.value) {
			input.value = settled;
			previous.current = cleanNumber(settled, format);
			onChange?.(event);
		}
		onBlur?.(event);
	};

	return {
		setRef,
		onChange: handleChange,
		onBlur: handleBlur,
		inputMode: format.decimals > 0 ? ('decimal' as const) : ('numeric' as const),
		value:
			value === undefined ? undefined : display(cleanNumber(String(value), format)),
	};
}
