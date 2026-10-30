import { z } from 'zod';

export const LOGIN_VARIANTS = ['dividido', 'vidrio', 'minimo'] as const;

export const loginSearchSchema = z.object({
	estilo: z.enum(LOGIN_VARIANTS).default('dividido').catch('dividido'),
});

export const resetSearchSchema = z.object({
	token: z.string().default('').catch(''),
});
