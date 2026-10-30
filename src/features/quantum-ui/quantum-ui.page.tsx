import { AppShell } from '@/components/layout/app-shell/app-shell.component';
import { AnimationsDemo } from './components/animations-demo/animations-demo.component';
import { BackendTableDemo } from './components/backend-table-demo/backend-table-demo.component';
import { ButtonsDemo } from './components/buttons-demo/buttons-demo.component';
import { CardsDemo } from './components/cards-demo/cards-demo.component';
import { ContentDemo } from './components/content-demo/content-demo.component';
import { EffectsDemo } from './components/effects-demo/effects-demo.component';
import { ExtraFieldsDemo } from './components/extra-fields-demo/extra-fields-demo.component';
import { FieldsDemo } from './components/fields-demo/fields-demo.component';
import { FiscalDemo } from './components/fiscal-demo/fiscal-demo.component';
import { FoundationsDemo } from './components/foundations-demo/foundations-demo.component';
import { InsightsDemo } from './components/insights-demo/insights-demo.component';
import { InvoicesDemo } from './components/invoices-demo/invoices-demo.component';
import { QuantumHero } from './components/quantum-hero/quantum-hero.component';
import { QuantumSection } from './components/quantum-section/quantum-section.component';
import { LayersDemo } from './components/layers-demo/layers-demo.component';
import { ModulesDemo } from './components/modules-demo/modules-demo.component';
import { NavigationDemo } from './components/navigation-demo/navigation-demo.component';
import { NoticesDemo } from './components/notices-demo/notices-demo.component';
import { SelectionDemo } from './components/selection-demo/selection-demo.component';
import { ShowcaseDemo } from './components/showcase-demo/showcase-demo.component';
import { StatsDemo } from './components/stats-demo/stats-demo.component';
import { SystemDemo } from './components/system-demo/system-demo.component';
import { VerticalPicker } from './components/vertical-picker/vertical-picker.component';
import { useQuantumCommands } from './hooks/useQuantumCommands';
import { useQuantumShell } from './hooks/useQuantumShell';
import { useVertical } from './hooks/useVertical';
import { QUANTUM_NAV } from './quantum-nav';
import {
	dataStackStyles,
	quantumPageStyles,
	verticalContentStyles,
} from './quantum-ui.styles';

export function QuantumUiPage() {
	const commands = useQuantumCommands();
	const shell = useQuantumShell();
	const { vertical, setId } = useVertical();

	return (
		<AppShell
			nav={QUANTUM_NAV}
			crumbs={['Quantum UI', 'Componentes']}
			commands={commands}
			{...shell}
			brand={{ name: 'Quantum UI', caption: 'Sistema de diseño' }}
		>
			<div className={quantumPageStyles()}>
				<QuantumHero />

				<QuantumSection
					id="fundamentos"
					eyebrow="Base"
					title="Fundamentos"
					description="Escala del acento y grises tintados en OKLCH, tipografía y radios. Todo sale de theme.css."
				>
					<FoundationsDemo />
				</QuantumSection>

				<QuantumSection
					id="giros"
					eyebrow="Negocio"
					title="Una base, cualquier negocio"
					description="Cambia de giro: módulos, indicadores, gráficas y tarjetas se adaptan con los mismos componentes."
				>
					<VerticalPicker value={vertical.id} onValueChange={setId} />
					<div className={verticalContentStyles()}>
						<ShowcaseDemo vertical={vertical} />

						<QuantumSection
							id="modulos"
							eyebrow="Negocio"
							title="Centro de módulos"
							description="Cada módulo con su color. Al pasar el cursor, una luz del color del módulo recorre el borde."
						>
							<ModulesDemo vertical={vertical} />
						</QuantumSection>

						<QuantumSection
							id="indicadores"
							eyebrow="Negocio"
							title="Datos"
							description="Cifras que ruedan, gráficas que crecen al aparecer y avance por pasos."
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
					eyebrow="Negocio"
					title="Facturas"
					description="Busca, ordena por columna y selecciona filas para ver la barra de acciones. Datos de ejemplo."
				>
					<InvoicesDemo />
				</QuantumSection>

				<QuantumSection
					id="backend"
					eyebrow="Negocio"
					title="Tabla con backend"
					description="La misma tabla y el mismo hook hablan con .NET, Node u offset. Cambia el formato y mira qué pide y qué recibe."
				>
					<BackendTableDemo />
				</QuantumSection>

				<QuantumSection
					id="botones"
					eyebrow="Componentes"
					title="Botones"
					description="Relleno plano, filo de luz por fuera y cápsula, con ayuda al pasar y menú de acciones."
				>
					<ButtonsDemo />
				</QuantumSection>

				<QuantumSection
					id="seleccion"
					eyebrow="Componentes"
					title="Selección"
					description="Opciones en tarjeta, casillas, interruptores, deslizador y contador."
				>
					<SelectionDemo />
				</QuantumSection>

				<QuantumSection
					id="pestanas"
					eyebrow="Componentes"
					title="Pestañas"
					description="El indicador se desliza con resorte y respeta «reducir movimiento»."
				>
					<NavigationDemo />
				</QuantumSection>

				<QuantumSection
					id="campos"
					eyebrow="Componentes"
					title="Campos"
					description="Rellenos en lugar de borde: fecha con calendario propio, búsqueda con sugerencias, etiquetas múltiples y notas."
				>
					<FieldsDemo />
				</QuantumSection>

				<QuantumSection
					id="fiscales"
					eyebrow="Componentes"
					title="Datos fiscales de México"
					description="RFC de persona física o moral, CURP, CLABE, NSS y código postal: cada uno con su estructura, su fecha y su dígito verificador."
				>
					<FiscalDemo />
				</QuantumSection>

				<QuantumSection
					id="campos-extra"
					eyebrow="Componentes"
					title="Más campos"
					description="Periodo, hora, búsqueda con espera, teléfono, código de verificación y archivos."
				>
					<ExtraFieldsDemo />
				</QuantumSection>

				<QuantumSection
					id="modal"
					eyebrow="Componentes"
					title="Capas"
					description="Modal, panel lateral, filtros flotantes, paleta de comandos y avisos."
				>
					<LayersDemo />
				</QuantumSection>

				<QuantumSection
					id="estados"
					eyebrow="Componentes"
					title="Avisos y estados"
					description="El color solo aparece cuando avisa algo: alertas, etiquetas, carga y vacío."
				>
					<NoticesDemo />
				</QuantumSection>

				<QuantumSection
					id="contenido"
					eyebrow="Componentes"
					title="Contenido"
					description="Árbol, acordeón, línea de tiempo, personas, ruta y errores que no tumban la página."
				>
					<ContentDemo />
				</QuantumSection>

				<QuantumSection
					id="pantallas"
					eyebrow="Componentes"
					title="Pantallas del sistema"
					description="Lo que ve la gente cuando una página no existe, algo falla o tarda en cargar."
				>
					<SystemDemo />
				</QuantumSection>

				<QuantumSection
					id="tarjetas"
					eyebrow="Componentes"
					title="Tarjetas"
					description="Sólida con gráfica, vidrio sobre color, hundida, reflector, borde vivo e interactiva."
				>
					<CardsDemo />
				</QuantumSection>

				<QuantumSection
					id="efectos"
					eyebrow="Efectos"
					title="Efectos nativos"
					description="CSS moderno, sin librerías: todo funciona en los navegadores de 2026."
				>
					<EffectsDemo />
				</QuantumSection>

				<QuantumSection
					id="animaciones"
					eyebrow="Efectos"
					title="Animaciones"
					description="Con motion/react, respetando «reducir movimiento» del sistema."
				>
					<AnimationsDemo />
				</QuantumSection>
			</div>
		</AppShell>
	);
}
