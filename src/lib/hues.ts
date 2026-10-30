export const HUES = {
	blue: '[--c:var(--hue-blue)]',
	violet: '[--c:var(--hue-violet)]',
	pink: '[--c:var(--hue-pink)]',
	orange: '[--c:var(--hue-orange)]',
	green: '[--c:var(--hue-green)]',
	teal: '[--c:var(--hue-teal)]',
	amber: '[--c:var(--hue-amber)]',
	indigo: '[--c:var(--hue-indigo)]',
	brand: '[--c:var(--brand)]',
} as const;

export type Hue = keyof typeof HUES;
