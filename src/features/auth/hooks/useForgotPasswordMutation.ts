import { useMutation } from '@tanstack/react-query';
import { requestPasswordReset } from '../api/auth.api';

export function useForgotPasswordMutation() {
	return useMutation({ mutationFn: requestPasswordReset });
}
