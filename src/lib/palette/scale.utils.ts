import chroma, { type Color } from 'chroma-js';
import {
	GRAY_FAMILIES,
	GRAY_SATURATION_LIMIT,
	SHADE_KEYS,
	TAILWIND_FAMILIES,
} from './palette.constants';
import type { Palette, PaletteScale } from './palette.types';

const hueOf = (color: Color) => {
	const hue = color.get('hsl.h');
	return Number.isNaN(hue) ? 0 : hue;
};

export function generateScale(baseColor: string): PaletteScale {
	const base = chroma(baseColor);
	const baseSaturation = base.get('hsl.s');
	const baseLightness = base.get('hsl.l');
	const wantsGray = baseSaturation <= GRAY_SATURATION_LIMIT;

	let family = '';
	let minDelta = Infinity;
	for (const [name, shades] of Object.entries(TAILWIND_FAMILIES)) {
		if (GRAY_FAMILIES.includes(name) !== wantsGray) continue;
		for (const hex of shades) {
			const delta = chroma.deltaE(base, hex);
			if (delta <= minDelta) {
				minDelta = delta;
				family = name;
			}
		}
	}
	const shades = TAILWIND_FAMILIES[family];

	let anchorIdx = 0;
	let minLightnessDiff = Infinity;
	shades.forEach((hex, idx) => {
		const diff = Math.abs(chroma(hex).get('hsl.l') - baseLightness);
		if (diff <= minLightnessDiff) {
			minLightnessDiff = diff;
			anchorIdx = idx;
		}
	});

	const anchor = chroma(shades[anchorIdx]);
	const hueShift = hueOf(base) - hueOf(anchor);
	const anchorSaturation = anchor.get('hsl.s');
	const saturationRatio = anchorSaturation > 0 ? baseSaturation / anchorSaturation : 1;

	const palette = {} as Palette;
	SHADE_KEYS.forEach((key, idx) => {
		if (idx === anchorIdx) {
			palette[key] = base.hex();
			return;
		}
		const ref = chroma(shades[idx]);
		const hue = (((hueOf(ref) + hueShift) % 360) + 360) % 360;
		const saturated = ref.set('hsl.s', ref.get('hsl.s') * saturationRatio).hex();
		palette[key] = chroma(saturated).set('hsl.h', hue).hex();
	});

	return { palette, family, baseShade: SHADE_KEYS[anchorIdx] };
}
