import { Card } from '@/components/ui/card/card.component';
import { Checkbox } from '@/components/ui/checkbox/checkbox.component';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import { NumberStepper } from '@/components/ui/number-stepper/number-stepper.component';
import { RadioGroup } from '@/components/ui/radio-group/radio-group.component';
import { Slider } from '@/components/ui/slider/slider.component';
import { Switch } from '@/components/ui/switch/switch.component';
import { useSelectionDemo } from '../../hooks/useSelectionDemo';
import {
	selectionCardStyles,
	selectionCheckRowStyles,
	selectionCheckboxStyles,
	selectionChecksStyles,
	selectionGridStyles,
	selectionHintStyles,
	selectionRangeCardStyles,
	selectionSliderStyles,
	selectionStepperRowStyles,
	selectionStepperStyles,
	selectionSwitchLabelStyles,
	selectionSwitchRowStyles,
	selectionSwitchesStyles,
} from './selection-demo.styles';

const PAYMENT_METHODS = [
	{ value: 'PUE', label: 'PUE', description: 'Pago en una sola exhibición' },
	{ value: 'PPD', label: 'PPD', description: 'En parcialidades; pide complemento' },
];

const SWITCHES = [
	{
		id: 'sw-timbrar',
		label: 'Timbrar al guardar',
		hint: 'Sin pasar por borrador',
		on: true,
	},
	{
		id: 'sw-correo',
		label: 'Enviar CFDI por correo',
		hint: 'PDF + XML al receptor',
		on: true,
	},
	{
		id: 'sw-avisos',
		label: 'Avisar facturas vencidas',
		hint: 'Cada lunes a las 9:00',
		on: false,
	},
];

export function SelectionDemo() {
	const demo = useSelectionDemo();

	return (
		<div className={selectionGridStyles()}>
			<Card className={selectionCardStyles()}>
				<RadioGroup
					defaultValue="PUE"
					options={PAYMENT_METHODS}
					aria-label="Método de pago"
				/>
				<div className={selectionChecksStyles()}>
					<label className={selectionCheckRowStyles()}>
						<Checkbox defaultChecked className={selectionCheckboxStyles()} />
						<span>
							Incluir IVA 16%
							<span className={selectionHintStyles()}>
								Se desglosa en el CFDI
							</span>
						</span>
					</label>
					<label className={selectionCheckRowStyles()}>
						<Checkbox
							checked="indeterminate"
							className={selectionCheckboxStyles()}
						/>
						<span>
							Aplicar retenciones
							<span className={selectionHintStyles()}>
								Parcial: ISR sí, IVA no
							</span>
						</span>
					</label>
				</div>
			</Card>
			<Card padding="none" className={selectionSwitchesStyles()}>
				{SWITCHES.map((item) => (
					<label
						key={item.id}
						htmlFor={item.id}
						className={selectionSwitchRowStyles()}
					>
						<span>
							<span className={selectionSwitchLabelStyles()}>
								{item.label}
							</span>
							<span className={selectionHintStyles()}>{item.hint}</span>
						</span>
						<Switch id={item.id} defaultChecked={item.on} />
					</label>
				))}
			</Card>
			<Card className={selectionRangeCardStyles()}>
				<div className={selectionSliderStyles()}>
					<FieldLabel>
						Tolerancia de conciliación: {demo.toleranceLabel}
					</FieldLabel>
					<Slider
						min={0}
						max={50}
						value={demo.tolerance}
						onValueChange={demo.setTolerance}
						aria-label="Tolerancia de conciliación"
					/>
					<FieldHint>Diferencias menores se concilian solas.</FieldHint>
				</div>
				<div className={selectionStepperStyles()}>
					<FieldLabel>Parcialidades</FieldLabel>
					<div className={selectionStepperRowStyles()}>
						<NumberStepper
							aria-label="Parcialidades"
							min={1}
							max={12}
							value={demo.installments}
							onValueChange={demo.setInstallments}
						/>
						<FieldHint>{demo.installmentLabel}</FieldHint>
					</div>
				</div>
			</Card>
		</div>
	);
}
