import type { LegalDoc, LegalDocId } from '../types/legal.types';

export const LEGAL_DOCS: Record<LegalDocId, LegalDoc> = {
	terminos: {
		title: 'Términos del servicio',
		updatedAt: '29 de octubre de 2026',
		intro: 'Estos términos explican las reglas para usar [Nombre del producto], que ofrece [Nombre de tu empresa]. Al crear una cuenta o entrar al servicio, aceptas lo que aquí se describe.',
		sections: [
			{
				title: 'Tu cuenta',
				paragraphs: [
					'Eres responsable de lo que pase con tu cuenta y de mantener tu contraseña en privado. Si notas un acceso que no reconoces, avísanos de inmediato a [correo de soporte].',
					'La información que registres debe ser verdadera y estar al día, sobre todo tus datos fiscales.',
				],
			},
			{
				title: 'Uso permitido',
				paragraphs: [
					'Puedes usar el servicio para administrar la operación de tu negocio. No está permitido usarlo para actividades ilícitas, para intentar entrar a cuentas ajenas ni para afectar el funcionamiento de la plataforma.',
				],
			},
			{
				title: 'Tu información',
				paragraphs: [
					'Los datos que cargas siguen siendo tuyos. Los usamos solo para darte el servicio, como se explica en el Aviso de privacidad.',
					'Puedes descargar tu información o pedir que se elimine escribiendo a [correo de soporte].',
				],
			},
			{
				title: 'Pagos y cancelación',
				paragraphs: [
					'[Describe aquí tus planes, la forma de cobro, la facturación y cómo se cancela una suscripción.]',
				],
			},
			{
				title: 'Disponibilidad y responsabilidad',
				paragraphs: [
					'Trabajamos para que el servicio esté disponible todo el tiempo, pero puede haber pausas por mantenimiento o causas ajenas. [Ajusta este párrafo con los límites de responsabilidad que te indique tu abogado.]',
				],
			},
			{
				title: 'Cambios a estos términos',
				paragraphs: [
					'Si cambiamos estos términos, te avisaremos dentro del servicio o por correo antes de que entren en vigor.',
				],
			},
			{
				title: 'Contacto',
				paragraphs: [
					'[Nombre de tu empresa] · [domicilio] · [correo de contacto] · [teléfono]',
				],
			},
		],
		related: { to: '/privacidad', label: 'Ver el Aviso de privacidad' },
	},
	privacidad: {
		title: 'Aviso de privacidad',
		updatedAt: '29 de octubre de 2026',
		intro: '[Nombre de tu empresa], con domicilio en [domicilio], es responsable del uso y la protección de tus datos personales. Este aviso explica qué datos recabamos, para qué los usamos y cómo puedes ejercer tus derechos.',
		sections: [
			{
				title: 'Datos que recabamos',
				paragraphs: [
					'Datos de identificación y contacto (nombre, correo, teléfono), datos fiscales (RFC, régimen, domicilio fiscal) y los datos de uso necesarios para que el servicio funcione. [Ajusta la lista a lo que realmente recabas.]',
				],
			},
			{
				title: 'Para qué los usamos',
				paragraphs: [
					'Finalidades principales: crear y administrar tu cuenta, darte el servicio, emitir comprobantes fiscales y atender tus solicitudes.',
					'Finalidades secundarias: mandarte novedades del producto. Puedes pedir que dejemos de hacerlo en cualquier momento.',
				],
			},
			{
				title: 'Con quién los compartimos',
				paragraphs: [
					'Solo con proveedores que necesitamos para operar (por ejemplo, alojamiento y timbrado de facturas) y con autoridades cuando la ley lo exija. [Enlista aquí tus proveedores o tipos de proveedor.]',
				],
			},
			{
				title: 'Tus derechos',
				paragraphs: [
					'Puedes acceder a tus datos, corregirlos, cancelarlos u oponerte a su uso, así como revocar tu consentimiento. Escríbenos a [correo de privacidad] indicando tu nombre, lo que solicitas y un medio para responderte.',
				],
			},
			{
				title: 'Cookies',
				paragraphs: [
					'Usamos cookies y almacenamiento del navegador para mantener tu sesión y recordar tus preferencias, como el tema. [Indica si usas herramientas de analítica o publicidad.]',
				],
			},
			{
				title: 'Cambios a este aviso',
				paragraphs: [
					'Cualquier cambio se publicará en esta misma página con su fecha de actualización.',
				],
			},
		],
		related: { to: '/terminos', label: 'Ver los Términos del servicio' },
	},
};
