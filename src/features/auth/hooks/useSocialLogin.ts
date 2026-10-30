import { toast } from 'sonner';
import type { BrandName } from '@/components/ui/brand-icon/brand-icon.types';
import type { SocialProvider } from '../types/auth.types';

const OAUTH_URLS: Record<BrandName, string | undefined> = {
	google: import.meta.env.VITE_OAUTH_GOOGLE_URL,
	microsoft: import.meta.env.VITE_OAUTH_MICROSOFT_URL,
};

export function useSocialLogin() {
	return (provider: SocialProvider) => {
		const url = OAUTH_URLS[provider.id];
		if (url) {
			window.location.assign(url);
			return;
		}
		toast.info(`${provider.label} todavía no está conectado`, {
			description: `Falta configurar el proveedor OAuth de ${provider.label} en el backend. Mientras, entra con tu correo.`,
		});
	};
}
