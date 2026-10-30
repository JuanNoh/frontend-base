import { toast } from 'sonner';

export function useToastsDemo() {
	return {
		success: () =>
			toast.success('Pago aplicado', {
				description: '$63,200.00 a la factura A-1041.',
				action: {
					label: 'Deshacer',
					onClick: () => toast.info('Se deshizo el pago'),
				},
			}),
		error: () =>
			toast.error('No se pudo timbrar', {
				description: 'El PAC rechazó el RFC del receptor. Revísalo y reintenta.',
			}),
		info: () =>
			toast.info('Sincronización en curso', {
				description: 'El SAT puede tardar hasta 30 minutos.',
			}),
		downloadPdf: () => toast.success('PDF listo', { description: 'A-1041.pdf' }),
		sync: () =>
			toast.info('Solicitud enviada al SAT', {
				description: 'Te avisamos cuando llegue el paquete.',
			}),
	};
}
