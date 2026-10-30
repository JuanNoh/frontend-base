import { BrandIcon } from '@/components/ui/brand-icon/brand-icon.component';
import { Button } from '@/components/ui/button/button.component';
import { useSocialLogin } from '../../hooks/useSocialLogin';
import type { SocialProvider } from '../../types/auth.types';
import { socialLoginStyles } from './social-login.styles';

const PROVIDERS: SocialProvider[] = [
	{ id: 'google', label: 'Google' },
	{ id: 'microsoft', label: 'Microsoft' },
];

export function SocialLogin() {
	const signInWith = useSocialLogin();

	return (
		<div className={socialLoginStyles()}>
			{PROVIDERS.map((provider) => (
				<Button
					key={provider.id}
					variant="secondary"
					block
					onClick={() => signInWith(provider)}
				>
					<BrandIcon brand={provider.id} />
					Continuar con {provider.label}
				</Button>
			))}
		</div>
	);
}
