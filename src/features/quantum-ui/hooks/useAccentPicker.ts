import { previewAccent } from '@/lib/appearance';
import { DEFAULT_ACCENT, ACCENTS, useAppearanceStore } from '@/stores/appearance.store';

export function useAccentPicker() {
	const accent = useAppearanceStore((state) => state.accent);
	const setAccent = useAppearanceStore((state) => state.setAccent);
	const isCustom = !ACCENTS.some((option) => option.value === accent);

	return {
		isCustom,
		swatch: isCustom ? accent : undefined,
		value: accent === 'ink' ? DEFAULT_ACCENT : accent,
		onChange: previewAccent,
		onCommit: setAccent,
	};
}
