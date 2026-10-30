import { AppearancePanel } from '../appearance-panel/appearance-panel.component';
import { PresetPicker } from '../preset-picker/preset-picker.component';
import {
	quantumHeroEyebrowStyles,
	quantumHeroIntroStyles,
	quantumHeroStyles,
	quantumHeroTitleStyles,
} from './quantum-hero.styles';

export function QuantumHero() {
	return (
		<section id="apariencia" className={quantumHeroStyles()}>
			<div className={quantumHeroIntroStyles()}>
				<div>
					<p className={quantumHeroEyebrowStyles()}>
						Quantum UI · octubre 2026
					</p>
					<h1 className={quantumHeroTitleStyles()}>
						Color con medida, <span>tacto moderno.</span>
					</h1>
				</div>
				<PresetPicker />
			</div>
			<AppearancePanel />
		</section>
	);
}
