import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { ButtonsDemo } from './components/buttons-demo/buttons-demo.component';
import { ExtraFieldsDemo } from './components/extra-fields-demo/extra-fields-demo.component';
import { FieldsDemo } from './components/fields-demo/fields-demo.component';
import { FiscalDemo } from './components/fiscal-demo/fiscal-demo.component';
import { NavigationDemo } from './components/navigation-demo/navigation-demo.component';
import { QuantumSection } from './components/quantum-section/quantum-section.component';
import { SelectionDemo } from './components/selection-demo/selection-demo.component';
import { quantumPageStyles } from './quantum-ui.styles';

export function FormsPage() {
	return (
		<div className={quantumPageStyles()}>
			<PageHeader
				eyebrow="Componentes"
				title="Formularios"
				description="Botones, campos y controles listos para conectar con react-hook-form y zod."
			/>
			<QuantumSection
				id="botones"
				eyebrow="Acciones"
				title="Botones"
				description="Relleno plano, filo de luz por fuera y cápsula, con ayuda al pasar y menú de acciones."
				demo="buttons-demo"
				api={['button', 'tooltip', 'dropdown-menu']}
			>
				<ButtonsDemo />
			</QuantumSection>
			<QuantumSection
				id="campos"
				eyebrow="Entrada de datos"
				title="Campos"
				description="Rellenos en lugar de borde: fecha con calendario propio, búsqueda con sugerencias, etiquetas múltiples y notas."
				demo="fields-demo"
				api={[
					'input',
					'date-picker',
					'combobox',
					'multi-select',
					'select',
					'textarea',
				]}
			>
				<FieldsDemo />
			</QuantumSection>
			<QuantumSection
				id="seleccion"
				eyebrow="Entrada de datos"
				title="Selección"
				description="Opciones en tarjeta, casillas, interruptores, deslizador y contador."
				demo="selection-demo"
				api={['radio-group', 'checkbox', 'switch', 'slider', 'number-stepper']}
			>
				<SelectionDemo />
			</QuantumSection>
			<QuantumSection
				id="fiscales"
				eyebrow="Entrada de datos"
				title="Datos fiscales de México"
				description="RFC de persona física o moral, CURP, CLABE, NSS y código postal: cada uno con su estructura, su fecha y su dígito verificador."
				demo="fiscal-demo"
				api={['mx-id-input']}
			>
				<FiscalDemo />
			</QuantumSection>
			<QuantumSection
				id="campos-extra"
				eyebrow="Entrada de datos"
				title="Más campos"
				description="Periodo, hora, búsqueda con espera, teléfono, código de verificación y archivos."
				demo="extra-fields-demo"
				api={[
					'date-range-picker',
					'time-picker',
					'search-input',
					'otp-input',
					'file-upload',
					'number-input',
				]}
			>
				<ExtraFieldsDemo />
			</QuantumSection>
			<QuantumSection
				id="pestanas"
				eyebrow="Navegación"
				title="Pestañas"
				description="El indicador se desliza con resorte y respeta «reducir movimiento»."
				demo="navigation-demo"
				api={['tabs', 'segmented']}
			>
				<NavigationDemo />
			</QuantumSection>
		</div>
	);
}
