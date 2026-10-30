import { z } from 'zod';

export const appointmentSchema = z.object({
	client: z.string().trim().min(2, 'Escribe el nombre de quien viene.'),
	service: z.string().min(1, 'Elige un servicio.'),
	personId: z.string().min(1, 'Elige quién atiende.'),
	time: z.string().min(1, 'Elige una hora.'),
	duration: z.string().min(1, 'Elige la duración.'),
});

export type AppointmentValues = z.infer<typeof appointmentSchema>;
