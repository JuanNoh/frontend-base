import type { ChangeEvent, ClipboardEvent, FocusEvent, KeyboardEvent } from 'react';
import type { UseOtpInputOptions } from './otp-input.types';

const onlyDigits = (text: string) => text.replace(/\D/g, '');

function focusBox(from: HTMLElement, index: number) {
	const box = from.parentElement?.children[index];
	if (box instanceof HTMLInputElement) box.focus();
}

export function useOtpInput({
	value,
	onValueChange,
	onComplete,
	length,
}: UseOtpInputOptions) {
	const digits = Array.from({ length }, (_, index) => value[index] ?? '');

	const commit = (next: string) => {
		onValueChange(next);
		if (next.length === length) onComplete?.(next);
	};

	const write = (box: HTMLElement, index: number, typed: string) => {
		const start = Math.min(index, value.length);
		commit(`${value.slice(0, start)}${typed}`.slice(0, length));
		focusBox(box, Math.min(start + typed.length, length - 1));
	};

	return {
		digits,
		onChange: (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
			const typed = onlyDigits(event.target.value);
			if (typed) write(event.target, index, typed);
		},
		onPaste: (index: number) => (event: ClipboardEvent<HTMLInputElement>) => {
			event.preventDefault();
			const typed = onlyDigits(event.clipboardData.getData('text'));
			if (typed) write(event.currentTarget, index, typed);
		},
		onFocus: (event: FocusEvent<HTMLInputElement>) => event.target.select(),
		onKeyDown: (index: number) => (event: KeyboardEvent<HTMLInputElement>) => {
			const box = event.currentTarget;
			if (event.key === 'Backspace') {
				event.preventDefault();
				const target = digits[index] ? index : Math.max(index - 1, 0);
				onValueChange(`${value.slice(0, target)}${value.slice(target + 1)}`);
				focusBox(box, target);
			}
			if (event.key === 'ArrowLeft') focusBox(box, Math.max(index - 1, 0));
			if (event.key === 'ArrowRight')
				focusBox(box, Math.min(index + 1, length - 1));
		},
	};
}
