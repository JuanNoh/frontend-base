const pad = (value: number) => String(value).padStart(2, '0');

export const HOURS = Array.from({ length: 24 }, (_, index) => pad(index));

export function minuteOptions(step: number) {
	return Array.from({ length: Math.ceil(60 / step) }, (_, index) => pad(index * step));
}

export function splitTime(value = '') {
	const [hour = '', minute = ''] = value.split(':');
	return { hour, minute };
}
