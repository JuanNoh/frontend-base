import confetti from 'canvas-confetti';

const CONFETTI_TOKENS = [
	'--hue-green',
	'--hue-violet',
	'--hue-orange',
	'--hue-blue',
	'--hue-pink',
	'--hue-amber',
];

function tokenColors(tokens: string[]) {
	const context = document
		.createElement('canvas')
		.getContext('2d', { willReadFrequently: true });
	if (!context) return undefined;
	const styles = getComputedStyle(document.documentElement);

	return tokens.map((token) => {
		context.clearRect(0, 0, 1, 1);
		context.fillStyle = styles.getPropertyValue(token).trim();
		context.fillRect(0, 0, 1, 1);
		const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;
		return `#${[red, green, blue].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
	});
}

function originOf(anchor?: HTMLElement | null) {
	if (!anchor) return { x: 0.5, y: 0.6 };
	const rect = anchor.getBoundingClientRect();
	return {
		x: (rect.left + rect.width / 2) / window.innerWidth,
		y: (rect.top + rect.height / 2) / window.innerHeight,
	};
}

export function celebrate(anchor?: HTMLElement | null) {
	const shared = {
		origin: originOf(anchor),
		colors: tokenColors(CONFETTI_TOKENS),
		disableForReducedMotion: true,
		scalar: 0.9,
		ticks: 180,
	};

	void confetti({ ...shared, particleCount: 70, spread: 70, startVelocity: 34 });
	void confetti({
		...shared,
		particleCount: 40,
		spread: 140,
		startVelocity: 22,
		decay: 0.92,
	});
}
