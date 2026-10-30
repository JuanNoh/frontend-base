import { useMutation } from '@tanstack/react-query';
import { resetPasswordRequest } from '../api/auth.api';

export function useResetPasswordMutation() {
	return useMutation({ mutationFn: resetPasswordRequest });
}
