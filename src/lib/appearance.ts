import { SHADE_KEYS } from '@/lib/palette/palette.constants';
import { brandTokens, isValidColor } from '@/lib/palette/palette.utils';
import {
	DEFAULT_ACCENT,
	useAppearanceStore,
	type Appearance,
} from '@/stores/appearance.store';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const lastPointer = { x: window.innerWidth / 2, y: 0 };
const BRAND_VARS = [
	'--brand-base',
	'--brand-on-dark',
	'--brand-text-light',
	'--brand-ink-light',
	'--brand-ink-dark',
	...SHADE_KEYS.map((key) => `--brand-${key}`),
];
let paintedAccent: string | undefined;

function paintAccent(accent: string) {
	const root = document.documentElement;
	if (accent === 'ink') {
		root.dataset.accent = 'ink';
		BRAND_VARS.forEach((name) => root.style.removeProperty(name));
		return;
	}

	delete root.dataset.accent;
	const tokens = brandTokens(isValidColor(accent) ? accent : DEFAULT_ACCENT);
	root.style.setProperty('--brand-base', tokens.light);
	root.style.setProperty('--brand-on-dark', tokens.dark);
	root.style.setProperty('--brand-text-light', tokens.textLight);
	root.style.setProperty('--brand-ink-light', tokens.inkLight);
	root.style.setProperty('--brand-ink-dark', tokens.inkDark);
	SHADE_KEYS.forEach((key) =>
		root.style.setProperty(`--brand-${key}`, tokens.scale.palette[key])
	);
}

export function previewAccent(accent: string) {
	paintAccent(accent);
}

function applyAppearance(appearance: Appearance) {
	const root = document.documentElement;
	const isDark =
		appearance.mode === 'dark' ||
		(appearance.mode === 'system' && prefersDark.matches);

	root.classList.toggle('dark', isDark);
	root.dataset.palette = appearance.palette;
	root.dataset.shape = appearance.shape;
	root.dataset.rail = appearance.rail;
	root.dataset.finish = appearance.finish;
	root.dataset.surface = appearance.surface;
	root.dataset.backdrop = appearance.backdrop;
	root.style.setProperty('--glass-tint', `${appearance.glass}%`);

	if (appearance.accent !== paintedAccent) {
		paintAccent(appearance.accent);
		paintedAccent = appearance.accent;
	}
}

function visualSignature(appearance: Appearance) {
	const { mode, palette, accent, shape, rail, finish, surface, backdrop } = appearance;
	return [
		mode,
		palette,
		accent,
		shape,
		rail,
		finish,
		surface,
		backdrop,
		prefersDark.matches,
	].join('|');
}

function revealFromPointer(update: () => void) {
	if (!document.startViewTransition || prefersReducedMotion.matches) return update();

	const { x, y } = lastPointer;
	const radius = Math.hypot(
		Math.max(x, window.innerWidth - x),
		Math.max(y, window.innerHeight - y)
	);
	const transition = document.startViewTransition(update);
	transition.finished.catch(() => undefined);
	transition.ready
		.then(() =>
			document.documentElement.animate(
				{
					clipPath: [
						`circle(0px at ${x}px ${y}px)`,
						`circle(${radius}px at ${x}px ${y}px)`,
					],
				},
				{
					duration: 520,
					easing: 'cubic-bezier(.4, 0, .2, 1)',
					pseudoElement: '::view-transition-new(root)',
				}
			)
		)
		.catch(() => undefined);
}

export function initAppearance() {
	let signature = visualSignature(useAppearanceStore.getState());
	applyAppearance(useAppearanceStore.getState());

	const sync = () => {
		const state = useAppearanceStore.getState();
		const next = visualSignature(state);
		const changed = next !== signature;
		signature = next;
		if (changed) revealFromPointer(() => applyAppearance(state));
		else applyAppearance(state);
	};

	window.addEventListener(
		'pointerdown',
		(event) => {
			lastPointer.x = event.clientX;
			lastPointer.y = event.clientY;
		},
		{ passive: true, capture: true }
	);
	useAppearanceStore.subscribe(sync);
	prefersDark.addEventListener('change', sync);
}
