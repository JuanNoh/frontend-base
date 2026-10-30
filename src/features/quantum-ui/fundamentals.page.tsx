import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { AppearancePanel } from './components/appearance-panel/appearance-panel.component';
import { FoundationsDemo } from './components/foundations-demo/foundations-demo.component';
import { PresetPicker } from './components/preset-picker/preset-picker.component';
import { QuantumSection } from './components/quantum-section/quantum-section.component';
import { appearanceLayoutStyles, quantumPageStyles } from './quantum-ui.styles';

export function FundamentalsPage() {
	return (
		<div className={quantumPageStyles()}>
			<PageHeader
				eyebrow="Componentes"
				title="Fundamentos"
				description="El tema vive en un solo lugar: cambia un control y toda la plantilla obedece."
			/>
			<QuantumSection
				id="apariencia"
				eyebrow="Tema"
				title="Apariencia"
				description="Escoge una mezcla o ajusta cada control. Se guarda en este navegador."
				demo="appearance-panel"
			>
				<div className={appearanceLayoutStyles()}>
					<PresetPicker />
					<AppearancePanel />
				</div>
			</QuantumSection>
			<QuantumSection
				id="fundamentos"
				eyebrow="Base"
				title="Color y tipografía"
				description="Escala del acento y grises tintados en OKLCH, tipografía y radios. Todo sale de theme.css."
				demo="foundations-demo"
			>
				<FoundationsDemo />
			</QuantumSection>
		</div>
	);
}
