import { Link } from '@tanstack/react-router';
import { Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { Checkbox } from '@/components/ui/checkbox/checkbox.component';
import { FieldError } from '@/components/ui/field-error/field-error.component';
import { Input } from '@/components/ui/input/input.component';
import { PasswordInput } from '@/components/ui/password-input/password-input.component';
import { useLoginForm } from '../../hooks/useLoginForm';
import {
	loginFormForgotStyles,
	loginFormOptionsStyles,
	loginFormRememberStyles,
	loginFormStyles,
	loginFormSubmitStyles,
} from './login-form.styles';

export function LoginForm() {
	const { register, errors, remember, isSubmitting, errorMessage, onSubmit } =
		useLoginForm();

	return (
		<form onSubmit={onSubmit} className={loginFormStyles()} noValidate>
			<Input
				label="Correo electrónico"
				type="email"
				autoComplete="email"
				placeholder="tu@empresa.com"
				leading={<Mail />}
				error={errors.email?.message}
				{...register('email')}
			/>
			<PasswordInput
				label="Contraseña"
				autoComplete="current-password"
				placeholder="••••••••"
				leading={<Lock />}
				error={errors.password?.message}
				{...register('password')}
			/>
			<div className={loginFormOptionsStyles()}>
				<label className={loginFormRememberStyles()}>
					<Checkbox
						checked={remember.checked}
						onCheckedChange={remember.onCheckedChange}
					/>
					Recordarme
				</label>
				<Link to="/recuperar" className={loginFormForgotStyles()}>
					¿Olvidaste tu contraseña?
				</Link>
			</div>
			<FieldError error={errorMessage} />
			<Button
				type="submit"
				block
				isSubmitting={isSubmitting}
				className={loginFormSubmitStyles()}
			>
				Iniciar sesión
			</Button>
		</form>
	);
}
