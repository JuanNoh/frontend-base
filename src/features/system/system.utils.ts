import type { ErrorCopy } from './system.types';

function readStatus(error: unknown) {
	if (typeof error !== 'object' || error === null || !('response' in error)) {
		return undefined;
	}
	return error.response instanceof Response ? error.response.status : undefined;
}

function isOffline(error: unknown) {
	return (
		!navigator.onLine ||
		(error instanceof TypeError && /fetch|network/i.test(error.message))
	);
}

function copyFor(status: number | undefined, offline: boolean) {
	if (offline) {
		return {
			title: 'Sin conexión',
			text: 'Revisa tu internet y vuelve a intentar.',
		};
	}
	if (status === 401 || status === 403) {
		return {
			title: 'No tienes acceso',
			text: 'Tu sesión pudo haber vencido o tu usuario no tiene permiso para esta sección.',
		};
	}
	if (status === 404) {
		return {
			title: 'No encontramos lo que buscabas',
			text: 'El registro ya no existe o se movió a otro lugar.',
		};
	}
	if (status && status >= 500) {
		return {
			title: 'El servidor tuvo un problema',
			text: 'No es algo que hayas hecho. Intenta de nuevo en unos segundos; si sigue, comparte los detalles con soporte.',
		};
	}
	return {
		title: 'Algo salió mal',
		text: 'No pudimos mostrar esta pantalla. Puedes reintentar o volver al inicio.',
	};
}

export function describeError(error: unknown, path: string): ErrorCopy {
	const status = readStatus(error);
	const base = error instanceof Error ? error : new Error(String(error));
	const lines = [`${base.name}: ${base.message}`, `Ruta: ${path}`];
	if (status) lines.push(`Estado HTTP: ${status}`);
	if (import.meta.env.DEV && base.stack) {
		lines.push('', base.stack.replace(lines[0], '').trim());
	}

	return {
		...copyFor(status, isOffline(error)),
		code: status ? `Error ${status}` : undefined,
		details: lines.join('\n'),
	};
}
