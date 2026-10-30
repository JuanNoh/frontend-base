export type ShadeKey =
	'50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

export type Palette = Record<ShadeKey, string>;

export interface PaletteScale {
	palette: Palette;
	family: string;
	baseShade: ShadeKey;
}

export interface BrandTokens {
	scale: PaletteScale;
	light: string;
	dark: string;
	textLight: string;
	inkLight: string;
	inkDark: string;
}
