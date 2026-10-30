export function stepStatus(index: number, done: number) {
	if (index < done) return 'done' as const;
	if (index === done) return 'current' as const;
	return 'pending' as const;
}
