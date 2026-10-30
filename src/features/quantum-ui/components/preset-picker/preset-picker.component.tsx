import type { CSSProperties } from 'react';
import type { PresetName } from '@/stores/appearance.store';
import { useActivePreset } from '../../hooks/useActivePreset';
import {
	presetCardStyles,
	presetDescriptionStyles,
	presetPickerStyles,
	presetPreviewAccentStyles,
	presetPreviewCanvasStyles,
	presetPreviewLineStyles,
	presetPreviewRailStyles,
	presetPreviewStyles,
	presetTitleStyles,
} from './preset-picker.styles';

const PRESET_CARDS: {
	name: PresetName;
	title: string;
	description: string;
	preview: { page: string; rail: string; accent: string };
}[] = [
	{
		name: 'coral',
		title: 'Coral',
		description: 'Gris cálido como papel y coral apagado. La de inicio.',
		preview: {
			page: 'oklch(96.6% 0.005 106.5)',
			rail: 'oklch(93% 0.006 106)',
			accent: 'oklch(58% 0.13 40)',
		},
	},
	{
		name: 'jade',
		title: 'Jade',
		description: 'Gris cálido con un toque de jade. Formas equilibradas.',
		preview: {
			page: 'oklch(96% 0.002 17)',
			rail: 'oklch(93% 0.005 30)',
			accent: 'oklch(58% 0.13 163)',
		},
	},
	{
		name: 'indigo',
		title: 'Índigo',
		description: 'Gris frío e índigo, con formas suaves.',
		preview: {
			page: 'oklch(96.3% 0.002 197)',
			rail: 'oklch(93% 0.005 210)',
			accent: 'oklch(55% 0.16 270)',
		},
	},
	{
		name: 'tinta',
		title: 'Tinta',
		description: 'Gris oliva, acento negro y menú oscuro. El más sobrio.',
		preview: {
			page: 'oklch(96.6% 0.005 106.5)',
			rail: 'oklch(15.3% 0.006 107)',
			accent: 'oklch(22.8% 0.013 107)',
		},
	},
];

export function PresetPicker() {
	const { activePreset, applyPreset } = useActivePreset();

	return (
		<div className={presetPickerStyles()}>
			{PRESET_CARDS.map((card) => (
				<button
					key={card.name}
					type="button"
					aria-pressed={activePreset === card.name}
					onClick={() => applyPreset(card.name)}
					className={presetCardStyles()}
				>
					<span
						className={presetPreviewStyles()}
						style={
							{
								'--preview-page': card.preview.page,
								'--preview-rail': card.preview.rail,
								'--preview-accent': card.preview.accent,
							} as CSSProperties
						}
					>
						<span className={presetPreviewRailStyles()} />
						<span className={presetPreviewCanvasStyles()}>
							<span className={presetPreviewAccentStyles()} />
							<span className={presetPreviewLineStyles()} />
							<span className={presetPreviewLineStyles()} />
						</span>
					</span>
					<span className={presetTitleStyles()}>{card.title}</span>
					<span className={presetDescriptionStyles()}>{card.description}</span>
				</button>
			))}
		</div>
	);
}
