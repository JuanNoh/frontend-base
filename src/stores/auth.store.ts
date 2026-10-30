import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { authStorage } from './auth.storage';

export interface AuthUser {
	id: number;
	fullName: string;
	email: string;
}

interface AuthState {
	token: string | null;
	user: AuthUser | null;
	isAuthenticated: boolean;
	remember: boolean;
	login: (token: string, user: AuthUser, remember: boolean) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			user: null,
			isAuthenticated: false,
			remember: false,
			login: (token, user, remember) =>
				set({ token, user, remember, isAuthenticated: true }),
			logout: () => {
				set({ token: null, user: null, remember: false, isAuthenticated: false });
				useAuthStore.persist.clearStorage();
			},
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => authStorage),
		}
	)
);
