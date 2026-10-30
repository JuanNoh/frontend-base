import type { CSSProperties } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { Card } from '@/components/ui/card/card.component';
import { ColorPicker } from '@/components/ui/color-picker/color-picker.component';
import { Popover } from '@/components/ui/popover/popover.component';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import { Slider } from '@/components/ui/slider/slider.component';
import type { SegmentedOption } from '@/components/ui/segmented/segmented.types';
import {
	ACCENTS,
	useAppearanceStore,
	type Backdrop,
	type Finish,
	type Palette,
	type Rail,
	type Shape,
	type Surface,
	type ThemeMode,
} from '@/stores/appearance.store';
import { useAccentPicker } from '../../hooks/useAccentPicker';
import {
	panelCodeStyles,
	panelCustomSwatchStyles,
	panelLabelStyles,
	panelRowStyles,
	panelSliderStyles,
	panelStyles,
	panelSwatchesStyles,
	panelSwatchStyles,
} from './appearance-panel.styles';

const MODES: SegmentedOption<ThemeMode>[] = [
	{
		value: 'light',
		label: (
			<>
				<Sun />
				Claro
			</>
		),
	},
	{
		value: 'dark',
		label: (
			<>
				<Moon />
				Oscuro
			</>
		),
	},
	{
		value: 'system',
		label: (
			<>
				<Monitor />
				Sistema
			</>
		),
	},
];

const PALETTES: SegmentedOption<Palette>[] = [
	{ value: 'taupe', label: 'Cálidos' },
	{ value: 'mist', label: 'Fríos' },
	{ value: 'olive', label: 'Oliva' },
];

const SHAPES: SegmentedOption<Shape>[] = [
	{ value: 'suave', label: 'Suave' },
	{ value: 'equilibrada', label: 'Equilibrada' },
	{ value: 'compacta', label: 'Compacta' },
];

const RAILS: SegmentedOption<Rail>[] = [
	{ value: 'tenue', label: 'Tenue' },
	{ value: 'oscuro', label: 'Oscuro' },
];

const FINISHES: SegmentedOption<Finish>[] = [
	{ value: 'liquido', label: 'Líquido' },
	{ value: 'tactil', label: 'Táctil' },
	{ value: 'plano', label: 'Plano' },
];

const SURFACES: SegmentedOption<Surface>[] = [
	{ value: 'solida', label: 'Sólidas' },
	{ value: 'vidrio', label: 'Vidrio' },
];

const BACKDROPS: SegmentedOption<Backdrop>[] = [
	{ value: 'liso', label: 'Liso' },
	{ value: 'puntos', label: 'Puntos' },
	{ value: 'rejilla', label: 'Rejilla' },
];

export function AppearancePanel() {
	const appearance = useAppearanceStore();
	const picker = useAccentPicker();

	return (
		<Card className={panelStyles()}>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Tema</span>
				<Segmented
					aria-label="Tema"
					value={appearance.mode}
					onValueChange={appearance.setMode}
					options={MODES}
				/>
			</div>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Grises</span>
				<Segmented
					aria-label="Familia de grises"
					value={appearance.palette}
					onValueChange={appearance.setPalette}
					options={PALETTES}
				/>
			</div>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Acento</span>
				<div className={panelSwatchesStyles()}>
					{ACCENTS.map((option) => (
						<button
							key={option.value}
							type="button"
							aria-label={option.label}
							title={option.label}
							aria-pressed={appearance.accent === option.value}
							onClick={() => appearance.setAccent(option.value)}
							className={panelSwatchStyles()}
							style={
								{
									'--swatch':
										option.value === 'ink'
											? 'var(--text)'
											: option.value,
								} as CSSProperties
							}
						/>
					))}
					<Popover
						align="start"
						trigger={
							<button
								type="button"
								aria-label="Color personalizado"
								title="Color personalizado"
								aria-pressed={picker.isCustom}
								className={panelCustomSwatchStyles({
									filled: picker.isCustom,
								})}
								style={{ '--swatch': picker.swatch } as CSSProperties}
							/>
						}
					>
						<ColorPicker
							value={picker.value}
							onChange={picker.onChange}
							onCommit={picker.onCommit}
						/>
					</Popover>
					<code className={panelCodeStyles()}>{appearance.accent}</code>
				</div>
			</div>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Forma</span>
				<Segmented
					aria-label="Forma"
					value={appearance.shape}
					onValueChange={appearance.setShape}
					options={SHAPES}
				/>
			</div>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Menú lateral</span>
				<Segmented
					aria-label="Menú lateral"
					value={appearance.rail}
					onValueChange={appearance.setRail}
					options={RAILS}
				/>
			</div>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Acabado</span>
				<Segmented
					aria-label="Acabado de botones y campos"
					value={appearance.finish}
					onValueChange={appearance.setFinish}
					options={FINISHES}
				/>
			</div>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Tarjetas</span>
				<Segmented
					aria-label="Tarjetas"
					value={appearance.surface}
					onValueChange={appearance.setSurface}
					options={SURFACES}
				/>
			</div>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Vidrio</span>
				<div className={panelSliderStyles()}>
					<Slider
						aria-label="Opacidad del vidrio"
						min={30}
						max={96}
						step={2}
						value={[appearance.glass]}
						onValueChange={([value]) => appearance.setGlass(value)}
					/>
					<code className={panelCodeStyles()}>{appearance.glass}%</code>
				</div>
			</div>
			<div className={panelRowStyles()}>
				<span className={panelLabelStyles()}>Fondo</span>
				<Segmented
					aria-label="Fondo"
					value={appearance.backdrop}
					onValueChange={appearance.setBackdrop}
					options={BACKDROPS}
				/>
			</div>
		</Card>
	);
}
