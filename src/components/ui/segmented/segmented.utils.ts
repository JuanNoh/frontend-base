export function keepSelection<T extends string>(onValueChange: (value: T) => void) {
	return (next: string) => {
		if (next) onValueChange(next as T);
	};
}
