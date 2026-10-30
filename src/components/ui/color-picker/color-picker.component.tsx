import type { CSSProperties } from 'react';
import { Pipette } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { Input } from '@/components/ui/input/input.component';
import { Slider } from '@/components/ui/slider/slider.component';
import {
	colorCaptionStyles,
	colorHeadStyles,
	colorHexStyles,
	colorPickerStyles,
	colorPreviewStyles,
	colorRowLabelStyles,
	colorRowsStyles,
	colorShadesStyles,
	colorShadeStyles,
} from './color-picker.styles';
import type { ColorPickerProps } from './color-picker.types';
import { HUE, INTENSITY, LIGHTNESS } from './color-picker.utils';
import { useColorPicker } from './useColorPicker';

export function ColorPicker(props: ColorPickerProps) {
	const picker = useColorPicker(props);

	return (
		<div className={colorPickerStyles()}>
			<div className={colorHeadStyles()}>
				<span
					aria-hidden="true"
					className={colorPreviewStyles()}
					style={{ '--swatch': picker.hex } as CSSProperties}
				/>
				<Input
					label="Código hex"
					value={picker.hexField}
					onChange={picker.onHexChange}
					onBlur={picker.onHexBlur}
					spellCheck={false}
					autoComplete="off"
					className={colorHexStyles()}
				/>
				{picker.pickFromScreen && (
					<Button
						variant="secondary"
						size="icon"
						aria-label="Tomar un color de la pantalla"
						onClick={picker.pickFromScreen}
					>
						<Pipette />
					</Button>
				)}
			</div>
			<div className={colorRowsStyles()}>
				<span className={colorRowLabelStyles()}>Tono</span>
				<Slider
					{...HUE}
					thumbLabel="Tono"
					gradient={picker.gradients.hue}
					value={[picker.lch.h]}
					onValueChange={picker.setChannel('h')}
					onValueCommit={picker.commit}
				/>
				<span className={colorRowLabelStyles()}>Intensidad</span>
				<Slider
					{...INTENSITY}
					thumbLabel="Intensidad"
					gradient={picker.gradients.intensity}
					value={[picker.lch.c]}
					onValueChange={picker.setChannel('c')}
					onValueCommit={picker.commit}
				/>
				<span className={colorRowLabelStyles()}>Claridad</span>
				<Slider
					{...LIGHTNESS}
					thumbLabel="Claridad"
					gradient={picker.gradients.lightness}
					value={[picker.lch.l]}
					onValueChange={picker.setChannel('l')}
					onValueCommit={picker.commit}
				/>
			</div>
			<div aria-hidden="true" className={colorShadesStyles()}>
				{picker.shades.map((shade) => (
					<span
						key={shade.key}
						className={colorShadeStyles({ base: shade.isBase })}
						style={{ '--swatch': shade.color } as CSSProperties}
					/>
				))}
			</div>
			<p className={colorCaptionStyles()}>
				Tu color cae en el <b>{picker.baseShade}</b> de la familia{' '}
				<b>{picker.family}</b>.
			</p>
		</div>
	);
}
