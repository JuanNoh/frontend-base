import { useId } from 'react';
import type { FieldIdsOptions } from './input.types';

export function useFieldIds({ id, hint, error }: FieldIdsOptions) {
	const autoId = useId();
	const controlId = id ?? autoId;
	const hintId = `${controlId}-hint`;
	const errorId = `${controlId}-error`;
	const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(' ');

	return { controlId, hintId, errorId, describedBy: describedBy || undefined };
}
