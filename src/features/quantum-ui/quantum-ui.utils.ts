import { flattenNav } from '@/components/layout/app-shell/app-shell.utils';
import {
	PRESETS,
	type Appearance,
	type Preset,
	type PresetName,
} from '@/stores/appearance.store';
import { QUANTUM_NAV } from './quantum-nav';

export function crumbsFor(pathname: string, hash: string) {
	const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
	const leaves = flattenNav(QUANTUM_NAV).filter(({ leaf }) => leaf.to === path);
	const match = leaves.find(({ leaf }) => leaf.hash === hash) ?? leaves[0];
	return match ? ['Quantum UI', ...match.trail, match.leaf.label] : ['Quantum UI'];
}

export function matchPreset(appearance: Appearance): PresetName | undefined {
	const names = Object.keys(PRESETS) as PresetName[];
	return names.find((name) => {
		const preset: Preset = PRESETS[name];
		return (Object.keys(preset) as (keyof Preset)[]).every(
			(key) => preset[key] === appearance[key]
		);
	});
}

export function simulateSlowLoad() {
	return new Promise<void>((resolve) => window.setTimeout(resolve, 1800));
}

export function simulateServerError(): never {
	throw Object.assign(
		new Error('Demostración: el servidor respondió 500 al cargar las facturas.'),
		{ response: new Response(null, { status: 500 }) }
	);
}
