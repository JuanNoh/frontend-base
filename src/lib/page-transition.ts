interface LocationChange {
	fromLocation?: unknown;
	pathChanged: boolean;
}

export function pageTransitionTypes({ fromLocation, pathChanged }: LocationChange) {
	return fromLocation && pathChanged && !document.hidden ? ['page'] : false;
}
