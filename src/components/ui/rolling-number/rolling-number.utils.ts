export const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function splitChars(value: string) {
	return [...value].map((char, index, all) => ({
		key: `${all.length - index}`,
		char,
		isDigit: /\d/.test(char),
	}));
}
