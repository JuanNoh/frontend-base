import { useAppearanceStore } from '@/stores/appearance.store';
import { matchPreset } from '../quantum-ui.utils';

export function useActivePreset() {
	const appearance = useAppearanceStore();

	return {
		activePreset: matchPreset(appearance),
		applyPreset: appearance.applyPreset,
	};
}
