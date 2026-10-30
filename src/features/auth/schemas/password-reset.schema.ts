import { z } from 'zod';

export const PASSWORD_RULES = [
	{ label: 'Al menos 8 caracteres', pattern: /^.{8,}$/ },
	{ label: 'Una letra mayúscula', pattern: /[A-ZÁÉÍÓÚÑ]/ },
	{ label: 'Un número', pattern: /\d/ },
	{ label: 'Un símbolo, como ! o #', pattern: /[^\p{L}\p{N}\s]/u },
];

export const forgotPasswordSchema = z.object({
	email: z.email('El formato del correo electrónico es incorrecto.'),
});

export const resetPasswordSchema = z
	.object({
		password: z
			.string()
			.refine(
				(value) => PASSWORD_RULES.every((rule) => rule.pattern.test(value)),
				'La contraseña todavía no cumple todos los requisitos.'
			),
		confirm: z.string().min(1, 'Escribe otra vez la contraseña.'),
	})
	.refine((values) => values.password === values.confirm, {
		path: ['confirm'],
		error: 'Las contraseñas no coinciden.',
	});

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
