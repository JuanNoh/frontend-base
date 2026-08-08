import type { AuthUser } from '@/stores/auth.store';
import type { LoginValues } from '../schemas/login.schema';

export interface LoginResponse {
	token: string;
	user: AuthUser;
}

export async function loginRequest(body: LoginValues): Promise<LoginResponse> {
	// demo sin backend: latencia simulada y token falso
	await new Promise((resolve) => setTimeout(resolve, 800));
	return {
		token: 'demo-token',
		user: { id: 1, fullName: 'Juan Noh', email: body.email },
	};
}
