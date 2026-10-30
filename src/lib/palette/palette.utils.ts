import chroma from 'chroma-js';
import { SHADE_KEYS } from './palette.constants';
import type { BrandTokens, Palette, ShadeKey } from './palette.types';
import { generateScale } from './scale.utils';

const WHITE_INK_MIN_CONTRAST = 3;
const TEXT_CONTRAST_ON_WHITE = 4.5;
const CONTRAST_ON_BLACK = 7;

export function isValidColor(color: string) {
	return chroma.valid(color);
}

function firstShade(palette: Palette, shades: ShadeKey[], against: string, min: number) {
	return shades.find((shade) => chroma.contrast(palette[shade], against) >= min);
}

function readableInk(background: string, dark: string) {
	return chroma.contrast(background, 'white') >= WHITE_INK_MIN_CONTRAST
		? 'white'
		: dark;
}

export function brandTokens(accent: string): BrandTokens {
	const scale = generateScale(accent);
	const { palette, baseShade } = scale;
	const baseIndex = SHADE_KEYS.indexOf(baseShade);
	const darker = SHADE_KEYS.slice(baseIndex);
	const lighter = SHADE_KEYS.slice(0, baseIndex + 1).reverse();
	const light = palette[baseShade];
	const dark =
		palette[firstShade(palette, lighter, 'black', CONTRAST_ON_BLACK) ?? '50'];

	return {
		scale,
		light,
		dark,
		textLight:
			palette[
				firstShade(palette, darker, 'white', TEXT_CONTRAST_ON_WHITE) ?? '950'
			],
		inkLight: readableInk(light, palette['950']),
		inkDark: readableInk(dark, palette['950']),
	};
}
