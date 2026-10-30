import type { AuthUser } from '@/stores/auth.store';
import type { LoginValues } from '../schemas/login.schema';
import type { ForgotPasswordValues } from '../schemas/password-reset.schema';

export interface LoginResponse {
	token: string;
	user: AuthUser;
}

export interface ResetPasswordRequest {
	token: string;
	password: string;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function loginRequest(body: LoginValues): Promise<LoginResponse> {
	await wait(800);
	return {
		token: 'demo-token',
		user: { id: 1, fullName: 'Usuario Demo', email: body.email },
	};
}

export async function requestPasswordReset(body: ForgotPasswordValues) {
	await wait(800);
	return { email: body.email };
}

export async function resetPasswordRequest({ token }: ResetPasswordRequest) {
	await wait(900);
	if (token === 'vencido') throw new Error('El enlace ya venció.');
}
