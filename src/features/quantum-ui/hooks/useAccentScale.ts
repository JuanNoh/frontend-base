import { generateScale } from '@/lib/palette/scale.utils';
import { isValidColor } from '@/lib/palette/palette.utils';
import { useAppearanceStore } from '@/stores/appearance.store';

export function useAccentScale() {
	const accent = useAppearanceStore((state) => state.accent);
	if (accent === 'ink' || !isValidColor(accent)) return 'tinta · grises';

	const { family, baseShade } = generateScale(accent);
	return `familia ${family} · base ${baseShade}`;
}
