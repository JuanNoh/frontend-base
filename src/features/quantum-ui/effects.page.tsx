import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { AnimationsDemo } from './components/animations-demo/animations-demo.component';
import { EffectsDemo } from './components/effects-demo/effects-demo.component';
import { QuantumSection } from './components/quantum-section/quantum-section.component';
import { quantumPageStyles } from './quantum-ui.styles';

export function EffectsPage() {
	return (
		<div className={quantumPageStyles()}>
			<PageHeader
				eyebrow="Componentes"
				title="Efectos"
				description="Movimiento con medida: CSS moderno primero y motion solo donde hace falta."
			/>
			<QuantumSection
				id="efectos"
				eyebrow="Efectos"
				title="Efectos nativos"
				description="CSS moderno, sin librerías: todo funciona en los navegadores de 2026."
				demo="effects-demo"
			>
				<EffectsDemo />
			</QuantumSection>
			<QuantumSection
				id="animaciones"
				eyebrow="Efectos"
				title="Animaciones"
				description="Con motion/react, respetando «reducir movimiento» del sistema."
				demo="animations-demo"
			>
				<AnimationsDemo />
			</QuantumSection>
		</div>
	);
}
