import {
	PRESETS,
	type Appearance,
	type Preset,
	type PresetName,
} from '@/stores/appearance.store';

export function scrollToSection(id: string) {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	document
		.getElementById(id)
		?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
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
