import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/auth.store';
import { loginRequest } from '../api/auth.api';

export function useLoginMutation() {
	const login = useAuthStore((state) => state.login);

	return useMutation({
		mutationFn: loginRequest,
		onSuccess: ({ token, user }) => login(token, user),
	});
}
