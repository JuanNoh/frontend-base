import { useAppearanceStore } from '@/stores/appearance.store';

export function useThemeMode() {
	const mode = useAppearanceStore((state) => state.mode);
	const setMode = useAppearanceStore((state) => state.setMode);

	return { mode, setMode };
}
