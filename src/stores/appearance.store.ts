import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark' | 'system';
export type Palette = 'taupe' | 'mist' | 'olive';
export type Shape = 'suave' | 'equilibrada' | 'compacta';
export type Rail = 'tenue' | 'oscuro';
export type Finish = 'liquido' | 'tactil' | 'plano';
export type Surface = 'solida' | 'vidrio';
export type Backdrop = 'liso' | 'puntos' | 'rejilla';

export interface Appearance {
	mode: ThemeMode;
	palette: Palette;
	accent: string;
	shape: Shape;
	rail: Rail;
	finish: Finish;
	surface: Surface;
	backdrop: Backdrop;
	glass: number;
	railCollapsed: boolean;
}

export type Preset = Omit<Appearance, 'mode' | 'railCollapsed'>;
export type PresetName = keyof typeof PRESETS;

interface AppearanceState extends Appearance {
	setMode: (mode: ThemeMode) => void;
	setPalette: (palette: Palette) => void;
	setAccent: (accent: string) => void;
	setShape: (shape: Shape) => void;
	setRail: (rail: Rail) => void;
	setFinish: (finish: Finish) => void;
	setSurface: (surface: Surface) => void;
	setBackdrop: (backdrop: Backdrop) => void;
	setGlass: (glass: number) => void;
	toggleRailCollapsed: () => void;
	applyPreset: (name: PresetName) => void;
}

export const DEFAULT_ACCENT = 'oklch(58% 0.13 163)';

export const ACCENTS = [
	{ label: 'Jade', value: DEFAULT_ACCENT },
	{ label: 'Índigo', value: 'oklch(55% 0.16 270)' },
	{ label: 'Turquesa', value: 'oklch(58% 0.11 205)' },
	{ label: 'Coral', value: 'oklch(60% 0.15 38)' },
	{ label: 'Orquídea', value: 'oklch(56% 0.16 330)' },
	{ label: 'Tinta', value: 'ink' },
] as const;

export const PRESETS = {
	jade: {
		palette: 'taupe',
		accent: DEFAULT_ACCENT,
		shape: 'equilibrada',
		rail: 'tenue',
		finish: 'liquido',
		surface: 'solida',
		backdrop: 'liso',
		glass: 72,
	},
	indigo: {
		palette: 'mist',
		accent: 'oklch(55% 0.16 270)',
		shape: 'suave',
		rail: 'tenue',
		finish: 'liquido',
		surface: 'solida',
		backdrop: 'liso',
		glass: 55,
	},
	tinta: {
		palette: 'olive',
		accent: 'ink',
		shape: 'compacta',
		rail: 'oscuro',
		finish: 'plano',
		surface: 'solida',
		backdrop: 'liso',
		glass: 88,
	},
} satisfies Record<string, Preset>;

export const useAppearanceStore = create<AppearanceState>()(
	persist(
		(set) => ({
			mode: 'system',
			railCollapsed: false,
			...PRESETS.jade,
			setMode: (mode) => set({ mode }),
			setPalette: (palette) => set({ palette }),
			setAccent: (accent) => set({ accent }),
			setShape: (shape) => set({ shape }),
			setRail: (rail) => set({ rail }),
			setFinish: (finish) => set({ finish }),
			setSurface: (surface) => set({ surface }),
			setBackdrop: (backdrop) => set({ backdrop }),
			setGlass: (glass) => set({ glass }),
			toggleRailCollapsed: () =>
				set((state) => ({ railCollapsed: !state.railCollapsed })),
			applyPreset: (name) => set(PRESETS[name]),
		}),
		{ name: 'appearance' }
	)
);
