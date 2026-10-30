import { useState, type ChangeEvent } from 'react';
import { SHADE_KEYS } from '@/lib/palette/palette.constants';
import { generateScale } from '@/lib/palette/scale.utils';
import type { ColorPickerProps, Lch } from './color-picker.types';
import {
	fromLch,
	hueGradient,
	intensityGradient,
	lightnessGradient,
	toLch,
} from './color-picker.utils';

const HEX_PATTERN = /^#?[0-9a-f]{6}$/i;

export function useColorPicker({ value, onChange, onCommit }: ColorPickerProps) {
	const [lch, setLch] = useState(() => toLch(value));
	const [exact, setExact] = useState<string | null>(null);
	const [draft, setDraft] = useState<string | null>(null);
	const hex = exact ?? fromLch(lch);
	const scale = generateScale(hex);

	const applyHex = (color: string) => {
		const next = (color.startsWith('#') ? color : `#${color}`).toLowerCase();
		setLch(toLch(next));
		setExact(next);
		onCommit(next);
	};

	const setChannel =
		(channel: keyof Lch) =>
		([amount]: number[]) => {
			const next = { ...lch, [channel]: amount };
			setLch(next);
			setExact(null);
			setDraft(null);
			onChange?.(fromLch(next));
		};

	const onHexChange = (event: ChangeEvent<HTMLInputElement>) => {
		const next = event.target.value.trim();
		setDraft(next);
		if (HEX_PATTERN.test(next)) applyHex(next);
	};

	const pickFromScreen = window.EyeDropper
		? () => {
				const dropper = new window.EyeDropper!();
				dropper
					.open()
					.then(({ sRGBHex }) => applyHex(sRGBHex))
					.catch(() => undefined);
			}
		: undefined;

	return {
		lch,
		hex,
		hexField: draft ?? hex,
		onHexChange,
		onHexBlur: () => setDraft(null),
		setChannel,
		commit: () => onCommit(hex),
		pickFromScreen,
		gradients: {
			hue: hueGradient(lch),
			intensity: intensityGradient(lch),
			lightness: lightnessGradient(lch),
		},
		shades: SHADE_KEYS.map((key) => ({
			key,
			color: scale.palette[key],
			isBase: key === scale.baseShade,
		})),
		family: scale.family,
		baseShade: scale.baseShade,
	};
}
