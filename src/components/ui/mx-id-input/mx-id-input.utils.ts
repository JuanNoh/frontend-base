import type { MxIdKind, MxIdPart, MxIdSpecKind } from '@/lib/mx-ids/mx-ids.types';
import type { MxIdPartState, MxIdStatus } from './mx-id-input.types';

const VALID_HINTS: Record<MxIdSpecKind, string> = {
	'rfc-fisica': 'Persona física · formato y dígito verificador correctos',
	'rfc-moral': 'Persona moral · formato y dígito verificador correctos',
	curp: 'Formato, fecha, estado y dígito verificador correctos',
	clabe: 'Formato y dígito de control correctos',
	nss: 'Formato y dígito verificador correctos',
	cp: 'Formato correcto',
	telefono: 'Formato correcto',
};

interface HintOptions {
	kind: MxIdKind;
	resolved: MxIdSpecKind;
	status: MxIdStatus;
	description: string;
	next?: MxIdPart;
	hint?: string;
}

export function mxIdHint({
	kind,
	resolved,
	status,
	description,
	next,
	hint,
}: HintOptions) {
	if (status === 'invalid') return undefined;
	if (status === 'valid') return VALID_HINTS[resolved];
	if (status === 'typing' && next) {
		return `Sigue: ${next.label}${next.format ? ` (${next.format})` : ''}`;
	}
	if (hint) return hint;
	return kind === 'rfc' ? 'Física (13) o moral (12): se detecta sola' : description;
}

interface PartStateOptions {
	index: number;
	filled: number;
	length: number;
	status: MxIdStatus;
	nextIndex: number;
	invalidPart?: number;
}

export function mxIdPartState({
	index,
	filled,
	length,
	status,
	nextIndex,
	invalidPart,
}: PartStateOptions): MxIdPartState {
	if (invalidPart === index) return 'invalid';
	if (status === 'valid') return 'valid';
	if (index === nextIndex) return 'current';
	return filled === length ? 'done' : 'idle';
}
