import ky from 'ky';
import { useAuthStore } from '@/stores/auth.store';

export const apiClient = ky.create({
	prefix: import.meta.env.VITE_API_URL,
	timeout: 30_000,
	retry: 1,
	hooks: {
		beforeRequest: [
			({ request }) => {
				const { token } = useAuthStore.getState();
				if (token) request.headers.set('Authorization', `Bearer ${token}`);
			},
		],
		afterResponse: [
			({ response }) => {
				if (response.status === 401 || response.status === 403) {
					useAuthStore.getState().logout();
				}
			},
		],
	},
});
