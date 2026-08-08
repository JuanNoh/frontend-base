import { z } from 'zod';

export const loginSchema = z.object({
	email: z.email('El formato del correo electrónico es incorrecto.'),
	password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.'),
});

export type LoginValues = z.infer<typeof loginSchema>;
