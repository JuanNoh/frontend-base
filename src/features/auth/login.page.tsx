import { GlassLogin } from './components/glass-login/glass-login.component';
import { LoginToolbar } from './components/login-toolbar/login-toolbar.component';
import { MinimalLogin } from './components/minimal-login/minimal-login.component';
import { SplitLogin } from './components/split-login/split-login.component';
import { useLoginVariant } from './hooks/useLoginVariant';
import { loginPageStyles } from './login.styles';

export function LoginPage() {
	const { variant, setVariant } = useLoginVariant();

	return (
		<div className={loginPageStyles({ variant })}>
			<LoginToolbar variant={variant} onVariantChange={setVariant} />
			{variant === 'dividido' && <SplitLogin />}
			{variant === 'vidrio' && <GlassLogin />}
			{variant === 'minimo' && <MinimalLogin />}
		</div>
	);
}
