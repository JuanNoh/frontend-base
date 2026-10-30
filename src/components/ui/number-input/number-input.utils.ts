import type { NumberFormat } from './number-input.types';

export function parseNumber(value: unknown) {
	if (typeof value === 'number') return value;
	const clean = String(value ?? '').replace(/,/g, '');
	if (clean === '' || clean === '-' || clean === '.' || clean === '-.')
		return undefined;
	const parsed = Number(clean);
	return Number.isNaN(parsed) ? undefined : parsed;
}

export function cleanNumber(raw: string, { decimals, negative }: NumberFormat) {
	const sign = negative && raw.trimStart().startsWith('-') ? '-' : '';
	const [whole = '', ...rest] = raw.replace(/[^\d.]/g, '').split('.');
	const integer = whole.replace(/^0+(?=\d)/, '');
	const fraction = rest.join('').slice(0, decimals);
	const dot = decimals > 0 && raw.includes('.') ? '.' : '';
	return `${sign}${integer}${dot}${fraction}`;
}

export function showNumber(clean: string, { thousands }: NumberFormat) {
	if (!thousands) return clean;
	const [whole, fraction] = clean.split('.');
	const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return fraction === undefined ? grouped : `${grouped}.${fraction}`;
}

export function settleNumber(clean: string, format: NumberFormat) {
	const value = parseNumber(clean);
	if (value === undefined) return '';

	const { min = -Infinity, max = Infinity, decimals, fixed } = format;
	const bounded = Math.min(Math.max(value, min), max);
	const text = bounded === value ? clean : String(bounded);
	const [whole, fraction = ''] = text.split('.');
	const integer = whole === '' || whole === '-' ? `${whole}0` : whole;
	const digits = fixed ? fraction.padEnd(decimals, '0') : fraction;
	return digits ? `${integer}.${digits}` : integer;
}

export function caretAt(shown: string, count: number) {
	let seen = 0;
	for (let index = 0; index < shown.length; index++) {
		if (seen === count) return index;
		if (shown[index] !== ',') seen++;
	}
	return shown.length;
}
