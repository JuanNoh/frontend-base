import chroma from 'chroma-js';
import type { Lch } from './color-picker.types';

export const LIGHTNESS = { min: 0.25, max: 0.92, step: 0.005 };
export const INTENSITY = { min: 0, max: 0.3, step: 0.002 };
export const HUE = { min: 0, max: 360, step: 1 };

const HUE_STOPS = Array.from({ length: 13 }, (_, index) => index * 30);

export function toLch(color: string): Lch {
	const [l, c, h] = chroma(color).oklch();
	return { l, c, h: Number.isNaN(h) ? 0 : h };
}

export function fromLch({ l, c, h }: Lch) {
	return chroma.oklch(l, c, h).hex();
}

export function hueGradient({ l, c }: Lch) {
	const stops = HUE_STOPS.map((hue) => `oklch(${l} ${c} ${hue})`);
	return `linear-gradient(90deg, ${stops.join(', ')})`;
}

export function intensityGradient({ l, h }: Lch) {
	return `linear-gradient(90deg, oklch(${l} 0 ${h}), oklch(${l} ${INTENSITY.max} ${h}))`;
}

export function lightnessGradient({ c, h }: Lch) {
	const stops = [LIGHTNESS.min, LIGHTNESS.max].map(
		(lightness) => `oklch(${lightness} ${c} ${h})`
	);
	return `linear-gradient(90deg, ${stops.join(', ')})`;
}
