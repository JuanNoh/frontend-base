const DEMOS = import.meta.glob<string>('../components/*/*.component.tsx', {
	query: '?raw',
	import: 'default',
});

const API_TYPES = import.meta.glob<string>('/src/components/ui/*/*.types.ts', {
	query: '?raw',
	import: 'default',
});

export function loadDemoSource(name: string) {
	return DEMOS[`../components/${name}/${name}.component.tsx`]();
}

export function loadApiSource(name: string) {
	return API_TYPES[`/src/components/ui/${name}/${name}.types.ts`]();
}
