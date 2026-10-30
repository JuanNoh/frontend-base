import { useAppearanceStore } from '@/stores/appearance.store';

export function useThemeToggle() {
	const setMode = useAppearanceStore((state) => state.setMode);

	return {
		toggle: () =>
			setMode(
				document.documentElement.classList.contains('dark') ? 'light' : 'dark'
			),
	};
}
