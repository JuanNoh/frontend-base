import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { BackendTableDemo } from './components/backend-table-demo/backend-table-demo.component';
import { InsightsDemo } from './components/insights-demo/insights-demo.component';
import { InvoicesDemo } from './components/invoices-demo/invoices-demo.component';
import { ModulesDemo } from './components/modules-demo/modules-demo.component';
import { QuantumSection } from './components/quantum-section/quantum-section.component';
import { ShowcaseDemo } from './components/showcase-demo/showcase-demo.component';
import { StatsDemo } from './components/stats-demo/stats-demo.component';
import { VerticalPicker } from './components/vertical-picker/vertical-picker.component';
import { useWorkspace } from './hooks/useWorkspace';
import {
	dataStackStyles,
	quantumPageStyles,
	verticalContentStyles,
} from './quantum-ui.styles';

export function BusinessPage() {
	const { vertical, selectVertical } = useWorkspace();

	return (
		<div className={quantumPageStyles()}>
			<PageHeader
				eyebrow="Componentes"
				title="Datos"
				description="Indicadores, gráficas y tablas. Cambia de giro y todo se adapta con los mismos componentes."
			/>
			<QuantumSection
				id="giros"
				eyebrow="Negocio"
				title="Una base, cualquier negocio"
				description="Este selector es el mismo que el de empresa en el menú: cambia el giro de toda la plantilla."
				demo="showcase-demo"
				api={['entity-card']}
			>
				<VerticalPicker value={vertical.id} onValueChange={selectVertical} />
				<div className={verticalContentStyles()}>
					<ShowcaseDemo vertical={vertical} />
					<QuantumSection
						id="modulos"
						eyebrow="Negocio"
						title="Centro de módulos"
						description="Cada módulo con su color. Al pasar el cursor, una luz del color del módulo recorre el borde."
						demo="modules-demo"
						api={['module-tile']}
					>
						<ModulesDemo vertical={vertical} />
					</QuantumSection>
					<QuantumSection
						id="indicadores"
						eyebrow="Negocio"
						title="Indicadores"
						description="Cifras que ruedan, gráficas que crecen al aparecer y avance por pasos."
						demo="insights-demo"
						api={[
							'stat-card',
							'bar-chart',
							'line-chart',
							'donut-chart',
							'funnel-chart',
						]}
					>
						<div key={vertical.id} className={dataStackStyles()}>
							<StatsDemo vertical={vertical} />
							<InsightsDemo vertical={vertical} />
						</div>
					</QuantumSection>
				</div>
			</QuantumSection>
			<QuantumSection
				id="facturas"
				eyebrow="Tablas"
				title="Facturas"
				description="Busca, ordena por columna y selecciona filas para ver la barra de acciones. Datos de ejemplo."
				demo="invoices-demo"
				api={['data-table']}
			>
				<InvoicesDemo />
			</QuantumSection>
			<QuantumSection
				id="backend"
				eyebrow="Tablas"
				title="Tabla con backend"
				description="La misma tabla y el mismo hook hablan con .NET, Node u offset. Cambia el formato y mira qué pide y qué recibe."
				demo="backend-table-demo"
				api={['data-table']}
			>
				<BackendTableDemo />
			</QuantumSection>
		</div>
	);
}
