import type { StateStorage } from 'zustand/middleware';

interface PersistedAuth {
	state?: { remember?: boolean };
}

function storageFor(value: string) {
	const { state } = JSON.parse(value) as PersistedAuth;
	return state?.remember ? localStorage : sessionStorage;
}

export const authStorage: StateStorage = {
	getItem: (name) => localStorage.getItem(name) ?? sessionStorage.getItem(name),
	setItem: (name, value) => {
		const target = storageFor(value);
		const other = target === localStorage ? sessionStorage : localStorage;
		other.removeItem(name);
		target.setItem(name, value);
	},
	removeItem: (name) => {
		localStorage.removeItem(name);
		sessionStorage.removeItem(name);
	},
};
