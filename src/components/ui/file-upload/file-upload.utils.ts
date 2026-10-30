const UNITS = ['B', 'KB', 'MB', 'GB'];

export function formatBytes(bytes: number) {
	const unit = Math.min(Math.floor(Math.log(bytes || 1) / Math.log(1024)), 3);
	const value = bytes / 1024 ** unit;
	return `${unit === 0 ? value : value.toFixed(1)} ${UNITS[unit]}`;
}

export function fileId(file: File) {
	return `${file.name}-${file.size}-${file.lastModified}`;
}

function matchesAccept(file: File, accept?: string) {
	if (!accept) return true;
	const name = file.name.toLowerCase();
	return accept
		.split(',')
		.map((rule) => rule.trim().toLowerCase())
		.some((rule) => {
			if (rule.startsWith('.')) return name.endsWith(rule);
			if (rule.endsWith('/*')) return file.type.startsWith(rule.slice(0, -1));
			return file.type === rule;
		});
}

export function reviewFiles(incoming: File[], accept?: string, maxSizeMb?: number) {
	const accepted: File[] = [];
	const rejected: string[] = [];

	incoming.forEach((file) => {
		if (!matchesAccept(file, accept))
			rejected.push(`${file.name}: tipo no permitido`);
		else if (maxSizeMb && file.size > maxSizeMb * 1024 ** 2) {
			rejected.push(`${file.name}: pesa más de ${maxSizeMb} MB`);
		} else accepted.push(file);
	});

	return { accepted, rejected };
}

export function fileType(name: string) {
	const dot = name.lastIndexOf('.');
	return dot > 0 ? name.slice(dot + 1) : 'archivo';
}

function joinWithOr(items: string[]) {
	if (items.length < 2) return items.join('');
	return `${items.slice(0, -1).join(', ')} o ${items[items.length - 1]}`;
}

export function describeLimits(accept?: string, maxSizeMb?: number) {
	const types = accept
		?.split(',')
		.map((rule) => rule.trim().replace(/^\./, '').toUpperCase());
	const parts = [types && joinWithOr(types), maxSizeMb && `hasta ${maxSizeMb} MB`];
	return parts.filter(Boolean).join(' · ');
}
