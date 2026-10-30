import { z } from 'zod';
import { mxIdSchema } from '@/lib/mx-ids/mx-ids.schema';

export const companySchema = z.object({
	name: z.string().trim().min(2, 'Escribe el nombre de la empresa.'),
	rfc: mxIdSchema('rfc'),
	email: z.email('Escribe un correo válido.'),
	phone: mxIdSchema('telefono'),
	cp: mxIdSchema('cp'),
});

export type CompanyValues = z.infer<typeof companySchema>;
