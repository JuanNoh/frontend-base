import { useState, type ChangeEvent } from 'react';
import {
	checkMxId,
	checkMxIdPrefix,
	isMxIdComplete,
	mxIdLength,
	mxIdProgress,
	mxIdSpecOf,
	nextMxIdPartIndex,
	nextMxIdValue,
	normalizeMxId,
	resolveMxIdKind,
} from '@/lib/mx-ids/mx-ids.utils';
import { assignRef } from '@/lib/utils/assign-ref';
import type { MxIdStatus, UseMxIdInputOptions } from './mx-id-input.types';
import { mxIdHint, mxIdPartState } from './mx-id-input.utils';

export function useMxIdInput({ kind, value, ref, onChange, hint }: UseMxIdInputOptions) {
	const [draft, setDraft] = useState('');
	const current = typeof value === 'string' ? value : draft;
	const spec = mxIdSpecOf(kind, current);
	const resolved = resolveMxIdKind(kind, current);
	const complete = isMxIdComplete(kind, current);
	const issue = complete ? checkMxId(kind, current) : checkMxIdPrefix(kind, current);
	const nextIndex = nextMxIdPartIndex(kind, current);

	let status: MxIdStatus = 'typing';
	if (!current) status = 'empty';
	else if (issue) status = 'invalid';
	else if (complete) status = 'valid';

	const parts = mxIdProgress(kind, current).map((part, index) => ({
		...part,
		state: mxIdPartState({
			index,
			filled: part.filled,
			length: part.length,
			status,
			nextIndex,
			invalidPart: issue?.part,
		}),
	}));

	const setRef = (node: HTMLInputElement | null) => {
		assignRef(ref, node);
		if (!node) return;
		const clean = normalizeMxId(kind, node.value);
		if (clean !== draft) setDraft(clean);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const input = event.target;
		const clean = nextMxIdValue(kind, current, input.value);
		if (clean !== input.value) {
			const caret = Math.min(
				normalizeMxId(
					kind,
					input.value.slice(0, input.selectionStart ?? input.value.length)
				).length,
				clean.length
			);
			input.value = clean;
			input.setSelectionRange(caret, caret);
		}
		setDraft(clean);
		onChange?.(event);
	};

	return {
		setRef,
		onChange: handleChange,
		status,
		issue,
		parts,
		numeric: spec.numeric,
		length: current.length,
		total: mxIdLength(kind, current),
		detected:
			kind === 'rfc' && current.length >= 4
				? resolved === 'rfc-moral'
					? 'Moral'
					: 'Física'
				: undefined,
		hint: mxIdHint({
			kind,
			resolved,
			status,
			description: spec.description,
			next: spec.parts[nextIndex],
			hint,
		}),
	};
}
