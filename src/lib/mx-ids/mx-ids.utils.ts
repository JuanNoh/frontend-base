import type {
	MxIdIssue,
	MxIdKind,
	MxIdPart,
	MxIdPartProgress,
	MxIdSpec,
	MxIdSpecKind,
} from './mx-ids.types';

const RFC_LETTER = /[A-ZÑ&]/;
const LETTER = /[A-Z]/;
const DIGIT = /\d/;
const ALNUM = /[A-Z\d]/;
const CONSONANT = /[B-DF-HJ-NP-TV-Z]/;

const RFC_DICTIONARY = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ';
const CURP_DICTIONARY = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const CLABE_WEIGHTS = [3, 7, 1];
const GENERIC_RFC = ['XAXX010101000', 'XEXX010101000'];
const CURP_STATES = new Set(
	'AS BC BS CC CL CM CS CH DF DG GT GR HG JC MC MN MS NT NL OC PL QT QR SP SL SR TC TS TL VZ YN ZS NE'.split(
		' '
	)
);

const repeat = (char: RegExp, times: number) => Array.from({ length: times }, () => char);

const part = (label: string, chars: RegExp[], format?: string): MxIdPart => ({
	label,
	chars,
	format,
});

const MX_ID_SPECS: Record<MxIdSpecKind, MxIdSpec> = {
	'rfc-fisica': {
		noun: 'el RFC',
		description: 'Persona física · 13 caracteres',
		parts: [
			part('Iniciales', repeat(RFC_LETTER, 4)),
			part('Nacimiento', repeat(DIGIT, 6), 'AAMMDD'),
			part('Homoclave', repeat(ALNUM, 2)),
			part('Verificador', [/[\dA]/]),
		],
	},
	'rfc-moral': {
		noun: 'el RFC',
		description: 'Persona moral · 12 caracteres',
		parts: [
			part('Razón social', repeat(RFC_LETTER, 3)),
			part('Constitución', repeat(DIGIT, 6), 'AAMMDD'),
			part('Homoclave', repeat(ALNUM, 2)),
			part('Verificador', [/[\dA]/]),
		],
	},
	curp: {
		noun: 'la CURP',
		description: '18 caracteres',
		parts: [
			part('Iniciales', [LETTER, /[AEIOUX]/, LETTER, LETTER]),
			part('Nacimiento', repeat(DIGIT, 6), 'AAMMDD'),
			part('Sexo', [/[HMX]/], 'H, M o X'),
			part('Estado', repeat(LETTER, 2), 'clave de 2 letras'),
			part('Consonantes', repeat(CONSONANT, 3)),
			part('Homonimia', [ALNUM]),
			part('Verificador', [DIGIT]),
		],
	},
	clabe: {
		noun: 'la CLABE',
		description: '18 dígitos',
		numeric: true,
		parts: [
			part('Banco', repeat(DIGIT, 3)),
			part('Plaza', repeat(DIGIT, 3)),
			part('Cuenta', repeat(DIGIT, 11)),
			part('Control', [DIGIT]),
		],
	},
	nss: {
		noun: 'el NSS',
		description: '11 dígitos del IMSS',
		numeric: true,
		parts: [
			part('Subdelegación', repeat(DIGIT, 2)),
			part('Alta', repeat(DIGIT, 2), 'AA'),
			part('Nacimiento', repeat(DIGIT, 2), 'AA'),
			part('Folio', repeat(DIGIT, 4)),
			part('Verificador', [DIGIT]),
		],
	},
	telefono: {
		noun: 'el teléfono',
		description: '10 dígitos',
		numeric: true,
		parts: [part('Teléfono', repeat(DIGIT, 10))],
	},
	cp: {
		noun: 'el código postal',
		description: '5 dígitos',
		numeric: true,
		parts: [part('Código postal', repeat(DIGIT, 5))],
	},
};

const charsOf = (spec: MxIdSpec) => spec.parts.flatMap((item) => item.chars);

const lengthOf = (spec: MxIdSpec) => charsOf(spec).length;

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export function resolveMxIdKind(kind: MxIdKind, value: string): MxIdSpecKind {
	if (kind !== 'rfc') return kind;
	return DIGIT.test(value.charAt(3)) ? 'rfc-moral' : 'rfc-fisica';
}

export function mxIdSpecOf(kind: MxIdKind, value: string) {
	return MX_ID_SPECS[resolveMxIdKind(kind, value)];
}

export function mxIdLength(kind: MxIdKind, value: string) {
	if (kind === 'rfc' && value.length < 4) return 13;
	return lengthOf(mxIdSpecOf(kind, value));
}

export function normalizeMxId(kind: MxIdKind, raw: string) {
	const allowed = MX_ID_SPECS[resolveMxIdKind(kind, '')].numeric ? DIGIT : /[A-ZÑ&\d]/;
	const clean = [...raw.toUpperCase()].filter((char) => allowed.test(char)).join('');
	return clean.slice(0, mxIdLength(kind, clean));
}

function fitsNext(kind: MxIdKind, value: string, char: string) {
	const candidates =
		kind === 'rfc' && value.length === 3
			? [MX_ID_SPECS['rfc-fisica'], MX_ID_SPECS['rfc-moral']]
			: [mxIdSpecOf(kind, value)];
	return candidates.some((spec) => charsOf(spec)[value.length]?.test(char));
}

export function nextMxIdValue(kind: MxIdKind, previous: string, raw: string) {
	const clean = normalizeMxId(kind, raw);
	const typedAtEnd = clean.length === previous.length + 1 && clean.startsWith(previous);
	if (typedAtEnd && !fitsNext(kind, previous, clean.slice(-1))) return previous;
	return clean;
}

function partIndexAt(spec: MxIdSpec, position: number) {
	let end = 0;
	return spec.parts.findIndex((item) => {
		end += item.chars.length;
		return position < end;
	});
}

function isRealDate(year: number, month: number, day: number) {
	const date = new Date(year, month - 1, day);
	return (
		date.getFullYear() === year &&
		date.getMonth() === month - 1 &&
		date.getDate() === day
	);
}

function readDate(digits: string, centuries: number[]) {
	const [year, month, day] = [0, 2, 4].map((start) =>
		Number(digits.slice(start, start + 2))
	);
	return centuries.some((century) => isRealDate(century + year, month, day));
}

function rfcCheckDigit(value: string) {
	const body = value.slice(0, -1).padStart(12, ' ');
	const sum = [...body].reduce(
		(total, char, index) => total + RFC_DICTIONARY.indexOf(char) * (13 - index),
		0
	);
	const digit = 11 - (sum % 11);
	if (digit === 11) return '0';
	return digit === 10 ? 'A' : String(digit);
}

function curpCheckDigit(value: string) {
	const sum = [...value.slice(0, 17)].reduce(
		(total, char, index) => total + CURP_DICTIONARY.indexOf(char) * (18 - index),
		0
	);
	return String((10 - (sum % 10)) % 10);
}

function clabeCheckDigit(value: string) {
	const sum = [...value.slice(0, 17)].reduce(
		(total, char, index) => total + ((Number(char) * CLABE_WEIGHTS[index % 3]) % 10),
		0
	);
	return String((10 - (sum % 10)) % 10);
}

function luhnCheckDigit(value: string) {
	const sum = [...value.slice(0, -1)].reduce((total, char, index) => {
		const product = Number(char) * (index % 2 === 0 ? 1 : 2);
		return total + (product > 9 ? product - 9 : product);
	}, 0);
	return String((10 - (sum % 10)) % 10);
}

function checkRfc(value: string): MxIdIssue | null {
	if (GENERIC_RFC.includes(value)) return null;
	if (!readDate(value.slice(-9, -3), [1900, 2000])) {
		return { message: 'La fecha (AAMMDD) no existe.', part: 1 };
	}
	if (rfcCheckDigit(value) !== value.slice(-1)) {
		return { message: 'El dígito verificador no coincide: revisa el RFC.', part: 3 };
	}
	return null;
}

function checkCurp(value: string): MxIdIssue | null {
	const century = DIGIT.test(value.charAt(16)) ? 1900 : 2000;
	if (!readDate(value.slice(4, 10), [century])) {
		return { message: 'La fecha de nacimiento no existe.', part: 1 };
	}
	if (!CURP_STATES.has(value.slice(11, 13))) {
		return { message: 'La clave del estado de nacimiento no existe.', part: 3 };
	}
	if (curpCheckDigit(value) !== value.slice(-1)) {
		return { message: 'El dígito verificador no coincide: revisa la CURP.', part: 6 };
	}
	return null;
}

const CHECKS: Partial<Record<MxIdSpecKind, (value: string) => MxIdIssue | null>> = {
	'rfc-fisica': checkRfc,
	'rfc-moral': checkRfc,
	curp: checkCurp,
	clabe: (value) =>
		clabeCheckDigit(value) === value.slice(-1)
			? null
			: { message: 'El dígito de control no coincide: revisa la CLABE.', part: 3 },
	nss: (value) =>
		luhnCheckDigit(value) === value.slice(-1)
			? null
			: { message: 'El dígito verificador no coincide: revisa el NSS.', part: 4 },
	telefono: (value) =>
		/^[01]/.test(value)
			? { message: 'Los teléfonos de México no empiezan en 0 ni en 1.' }
			: null,
	cp: (value) =>
		value.startsWith('00')
			? { message: 'Los códigos postales empiezan en 01.' }
			: null,
};

export function checkMxId(kind: MxIdKind, value: string): MxIdIssue | null {
	const resolved = resolveMxIdKind(kind, value);
	const spec = MX_ID_SPECS[resolved];
	const chars = charsOf(spec);
	const unit = spec.numeric ? 'dígitos' : 'caracteres';

	if (!value) return { message: `Escribe ${spec.noun}.` };
	if (kind === 'rfc' && value.length < 4) {
		return { message: 'El RFC lleva 12 caracteres (moral) o 13 (física).' };
	}
	if (value.length !== chars.length) {
		return { message: `${capitalize(spec.noun)} lleva ${chars.length} ${unit}.` };
	}
	return checkMxIdPrefix(kind, value) ?? CHECKS[resolved]?.(value) ?? null;
}

export function checkMxIdPrefix(kind: MxIdKind, value: string): MxIdIssue | null {
	const spec = mxIdSpecOf(kind, value);
	const chars = charsOf(spec);
	const wrong = [...value].findIndex((char, index) => !chars[index]?.test(char));
	if (wrong === -1) return null;
	const part = partIndexAt(spec, wrong);
	return {
		message: `Revisa «${spec.parts[part].label}»: hay un carácter que no va ahí.`,
		part,
	};
}

export function mxIdProgress(kind: MxIdKind, value: string): MxIdPartProgress[] {
	let offset = 0;
	return mxIdSpecOf(kind, value).parts.map((item) => {
		const filled = Math.min(Math.max(value.length - offset, 0), item.chars.length);
		offset += item.chars.length;
		return { label: item.label, length: item.chars.length, filled };
	});
}

export function nextMxIdPartIndex(kind: MxIdKind, value: string) {
	return partIndexAt(mxIdSpecOf(kind, value), value.length);
}

export function isMxIdComplete(kind: MxIdKind, value: string) {
	return value.length === mxIdLength(kind, value) && value.length >= 4;
}
