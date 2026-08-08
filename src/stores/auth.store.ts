import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface AuthUser {
	id: number;
	fullName: string;
	email: string;
}

interface AuthState {
	token: string | null;
	user: AuthUser | null;
	isAuthenticated: boolean;
	login: (token: string, user: AuthUser) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			user: null,
			isAuthenticated: false,
			login: (token, user) => set({ token, user, isAuthenticated: true }),
			logout: () => set({ token: null, user: null, isAuthenticated: false }),
		}),
		{
			name: 'auth',
			// sessionStorage: la sesión muere con la pestaña
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
