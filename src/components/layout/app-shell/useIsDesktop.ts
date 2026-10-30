import { useSyncExternalStore } from 'react';

const desktop = window.matchMedia('(min-width: 64rem)');

function subscribe(onChange: () => void) {
	desktop.addEventListener('change', onChange);
	return () => desktop.removeEventListener('change', onChange);
}

function isDesktop() {
	return desktop.matches;
}

export function useIsDesktop() {
	return useSyncExternalStore(subscribe, isDesktop);
}
