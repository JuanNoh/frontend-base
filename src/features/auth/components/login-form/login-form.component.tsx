import { Button } from '@/components/ui/button/button.component';
import { Input } from '@/components/ui/input/input.component';
import { useLoginForm } from '../../hooks/useLoginForm';

export function LoginForm() {
	const { register, errors, isSubmitting, errorMessage, onSubmit } = useLoginForm();

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
			<Input
				label="Correo electrónico"
				type="email"
				placeholder="tu@correo.com"
				error={errors.email?.message}
				{...register('email')}
			/>
			<Input
				label="Contraseña"
				type="password"
				placeholder="••••••••"
				error={errors.password?.message}
				{...register('password')}
			/>
			{errorMessage && <p className="text-danger text-sm">{errorMessage}</p>}
			<Button type="submit" isSubmitting={isSubmitting}>
				Iniciar sesión
			</Button>
		</form>
	);
}
