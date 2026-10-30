import { z } from 'zod';
import { mxIdSchema } from '@/lib/mx-ids/mx-ids.schema';

const shared = {
	cp: mxIdSchema('cp'),
	clabe: mxIdSchema('clabe'),
	credito: z.number().optional(),
};

export const fiscalDemoSchema = z.discriminatedUnion('persona', [
	z.object({
		persona: z.literal('fisica'),
		rfc: mxIdSchema('rfc-fisica'),
		curp: mxIdSchema('curp'),
		...shared,
	}),
	z.object({
		persona: z.literal('moral'),
		rfc: mxIdSchema('rfc-moral'),
		curp: z.string(),
		...shared,
	}),
]);

export type FiscalDemoValues = z.infer<typeof fiscalDemoSchema>;

export type Persona = FiscalDemoValues['persona'];
