import { Building2, Hash, Lock, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card/card.component';
import { Combobox } from '@/components/ui/combobox/combobox.component';
import { DatePicker } from '@/components/ui/date-picker/date-picker.component';
import { Input } from '@/components/ui/input/input.component';
import { MultiSelect } from '@/components/ui/multi-select/multi-select.component';
import { NumberInput } from '@/components/ui/number-input/number-input.component';
import { PasswordInput } from '@/components/ui/password-input/password-input.component';
import { Select } from '@/components/ui/select/select.component';
import { Textarea } from '@/components/ui/textarea/textarea.component';
import { useFieldsDemo } from '../../hooks/useFieldsDemo';
import { fieldsGridStyles, fieldsWideStyles } from './fields-demo.styles';

const REGIMENES = [
	{ value: '601', label: '601 · General de Ley Personas Morales' },
	{ value: '603', label: '603 · Personas Morales con Fines no Lucrativos' },
	{ value: '605', label: '605 · Sueldos y Salarios' },
	{ value: '606', label: '606 · Arrendamiento' },
	{ value: '612', label: '612 · Actividades Empresariales y Profesionales' },
	{ value: '626', label: '626 · Régimen Simplificado de Confianza' },
];

const PROVIDERS = [
	{ value: 'dpe', label: 'Distribuidora Peninsular', description: 'DPE080714HJ8' },
	{ value: 'pmo', label: 'Papelería Montejo', description: 'PMO110523AB2' },
	{ value: 'gal', label: 'Gasolinera Altabrisa', description: 'GAL190301TT8' },
	{ value: 'tch', label: 'Telefonía Chactemal', description: 'TCH840315KT9' },
	{ value: 'sux', label: 'Suministros Uxmal', description: 'SUX950324V27' },
	{ value: 'mka', label: 'Mayoreo Kanasín', description: 'MKA910715UB6' },
];

const TAGS = [
	{ value: 'hoteleria', label: 'Hotelería' },
	{ value: 'recurrente', label: 'Recurrente' },
	{ value: 'credito-30', label: 'Crédito 30 días' },
	{ value: 'exportacion', label: 'Exportación' },
	{ value: 'gobierno', label: 'Gobierno' },
	{ value: 'prioritario', label: 'Prioritario' },
];

export function FieldsDemo() {
	const demo = useFieldsDemo();

	return (
		<Card className={fieldsGridStyles()}>
			<Input
				label="Razón social"
				defaultValue="Hotel Caribe Azul"
				leading={<Building2 />}
				hint="Tal como aparece en la constancia fiscal."
			/>
			<Input
				label="RFC"
				defaultValue="HCA15090"
				maxLength={13}
				leading={<Hash />}
				error="El RFC lleva 12 caracteres (moral) o 13 (física)."
			/>
			<NumberInput
				label="Importe"
				leading="$"
				trailing="MXN"
				decimals={2}
				fixed
				thousands
				defaultValue="126400"
				hint="Solo números: comas y centavos salen solos."
			/>
			<NumberInput
				label="Cantidad"
				thousands
				max={9999}
				placeholder="0"
				hint="Enteros, hasta 9,999."
			/>
			<NumberInput
				label="Descuento"
				trailing="%"
				decimals={2}
				max={100}
				placeholder="0.00"
				hint="De 0 a 100, con 2 decimales."
			/>
			<NumberInput
				label="Tipo de cambio"
				trailing="MXN/USD"
				decimals={4}
				fixed
				min={1}
				defaultValue="18.2345"
				hint="Si dejas menos de 1, sube a 1 al salir del campo."
			/>
			<Select label="Régimen fiscal" defaultValue="601" options={REGIMENES} />
			<DatePicker
				label="Fecha de emisión"
				value={demo.issuedAt}
				onValueChange={demo.setIssuedAt}
			/>
			<Combobox
				label="Proveedor"
				placeholder="Busca por nombre o RFC"
				options={PROVIDERS}
				value={demo.provider}
				onValueChange={demo.setProvider}
			/>
			<MultiSelect
				label="Etiquetas"
				placeholder="Elige etiquetas"
				options={TAGS}
				value={demo.tags}
				onValueChange={demo.setTags}
			/>
			<Input
				label="Correo para enviar el CFDI"
				type="email"
				leading={<Mail />}
				placeholder="facturas@cliente.mx"
			/>
			<PasswordInput
				label="Contraseña de la e.firma"
				leading={<Lock />}
				defaultValue="demo-no-real"
				hint="Se guarda cifrada; nunca viaja en texto plano."
			/>
			<Input
				label="Uso de CFDI"
				defaultValue="G03 · Gastos en general"
				disabled
				hint="Lo fija el catálogo del cliente."
			/>
			<Select
				label="Método de pago"
				placeholder="Elige PUE o PPD"
				options={[
					{ value: 'PUE', label: 'PUE · Una sola exhibición' },
					{ value: 'PPD', label: 'PPD · En parcialidades' },
				]}
			/>
			<Textarea
				label="Notas internas"
				className={fieldsWideStyles()}
				placeholder="Escribe y mira cómo crece el campo…"
				defaultValue="Cobrar en 2 parcialidades. Emitir el complemento de pago a más tardar el día 5 del mes siguiente."
				hint="Crece solo mientras escribes (field-sizing)."
			/>
		</Card>
	);
}
