import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { CardsDemo } from './components/cards-demo/cards-demo.component';
import { ContentDemo } from './components/content-demo/content-demo.component';
import { LayersDemo } from './components/layers-demo/layers-demo.component';
import { NoticesDemo } from './components/notices-demo/notices-demo.component';
import { QuantumSection } from './components/quantum-section/quantum-section.component';
import { SystemDemo } from './components/system-demo/system-demo.component';
import { quantumPageStyles } from './quantum-ui.styles';

export function SurfacesPage() {
	return (
		<div className={quantumPageStyles()}>
			<PageHeader
				eyebrow="Componentes"
				title="Superficies"
				description="Tarjetas, capas, avisos y las pantallas que ve la gente cuando algo sale mal."
			/>
			<QuantumSection
				id="tarjetas"
				eyebrow="Superficies"
				title="Tarjetas"
				description="Sólida con gráfica, vidrio sobre color, hundida, reflector, borde vivo e interactiva."
				demo="cards-demo"
				api={['card', 'entity-card']}
			>
				<CardsDemo />
			</QuantumSection>
			<QuantumSection
				id="modal"
				eyebrow="Superficies"
				title="Capas"
				description="Modal, panel lateral, filtros flotantes, paleta de comandos y avisos."
				demo="layers-demo"
				api={['modal', 'drawer', 'popover', 'command-palette']}
			>
				<LayersDemo />
			</QuantumSection>
			<QuantumSection
				id="estados"
				eyebrow="Superficies"
				title="Avisos y estados"
				description="El color solo aparece cuando avisa algo: alertas, etiquetas, carga y vacío."
				demo="notices-demo"
				api={['alert', 'badge', 'progress', 'skeleton', 'empty-state']}
			>
				<NoticesDemo />
			</QuantumSection>
			<QuantumSection
				id="contenido"
				eyebrow="Superficies"
				title="Contenido"
				description="Árbol, acordeón, línea de tiempo, personas, ruta y errores que no tumban la página."
				demo="content-demo"
				api={[
					'tree-view',
					'accordion',
					'timeline',
					'avatar',
					'breadcrumbs',
					'error-boundary',
				]}
			>
				<ContentDemo />
			</QuantumSection>
			<QuantumSection
				id="pantallas"
				eyebrow="Sistema"
				title="Pantallas del sistema"
				description="Lo que ve la gente cuando una página no existe, algo falla o tarda en cargar."
				demo="system-demo"
			>
				<SystemDemo />
			</QuantumSection>
		</div>
	);
}
