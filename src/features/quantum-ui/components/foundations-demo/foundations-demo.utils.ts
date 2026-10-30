export function accentStepStyle(name: string, index: number) {
	return {
		background: `var(--brand-${name})`,
		color: index < 5 ? 'var(--n-950)' : 'var(--n-50)',
	};
}

export function neutralStepStyle(name: string, index: number) {
	return {
		background: `var(--n-${name})`,
		color: index < 5 ? 'var(--n-950)' : 'var(--n-50)',
	};
}
