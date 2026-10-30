export interface ColorPickerProps {
	value: string;
	onChange?: (hex: string) => void;
	onCommit: (hex: string) => void;
}

export interface Lch {
	l: number;
	c: number;
	h: number;
}

export interface EyeDropperApi {
	open: () => Promise<{ sRGBHex: string }>;
}

declare global {
	interface Window {
		EyeDropper?: new () => EyeDropperApi;
	}
}
