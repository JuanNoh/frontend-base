import { BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { MxIdInput } from '@/components/ui/mx-id-input/mx-id-input.component';
import { NumberInput } from '@/components/ui/number-input/number-input.component';
import { parseNumber } from '@/components/ui/number-input/number-input.utils';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import type { SegmentedOption } from '@/components/ui/segmented/segmented.types';
import { useFiscalDemo } from '../../hooks/useFiscalDemo';
import type { Persona } from '../../schemas/fiscal-demo.schema';
import { DemoCard } from '../demo-card/demo-card.component';
import { effectDescriptionStyles } from '../effects-demo/effects-demo.styles';
import {
	fiscalActionsStyles,
	fiscalFormStyles,
	fiscalGridStyles,
	fiscalSamplesStyles,
} from './fiscal-demo.styles';

const PERSONAS: SegmentedOption<Persona>[] = [
	{ value: 'fisica', label: 'Física' },
	{ value: 'moral', label: 'Moral' },
];

const SAMPLES = [
	{ label: 'Público en general', value: 'XAXX010101000' },
	{ label: 'Extranjero', value: 'XEXX010101000' },
	{ label: 'Persona moral', value: 'CDS120501AB8' },
	{ label: 'Con error', value: 'CDS120501AB9' },
];

export function FiscalDemo() {
	const demo = useFiscalDemo();
	const isFisica = demo.persona === 'fisica';

	return (
		<div className={fiscalGridStyles()}>
			<DemoCard
				title="Alta de cliente"
				aside={
					<Segmented
						aria-label="Tipo de persona"
						value={demo.persona}
						onValueChange={demo.setPersona}
						options={PERSONAS}
					/>
				}
			>
				<form onSubmit={demo.onSubmit} noValidate className={fiscalFormStyles()}>
					<MxIdInput
						key={demo.persona}
						kind={isFisica ? 'rfc-fisica' : 'rfc-moral'}
						label="RFC"
						placeholder={isFisica ? 'GODE561231GR8' : 'CDS120501AB8'}
						error={demo.errors.rfc?.message}
						{...demo.register('rfc')}
					/>
					{isFisica && (
						<MxIdInput
							kind="curp"
							label="CURP"
							placeholder="GODE561231HDFRRN00"
							error={demo.errors.curp?.message}
							{...demo.register('curp')}
						/>
					)}
					<MxIdInput
						kind="cp"
						label="Código postal"
						placeholder="97000"
						error={demo.errors.cp?.message}
						{...demo.register('cp')}
					/>
					<MxIdInput
						kind="clabe"
						label="CLABE"
						placeholder="032180000118359719"
						error={demo.errors.clabe?.message}
						{...demo.register('clabe')}
					/>
					<NumberInput
						label="Límite de crédito"
						leading="$"
						trailing="MXN"
						decimals={2}
						fixed
						thousands
						placeholder="0.00"
						error={demo.errors.credito?.message}
						{...demo.register('credito', { setValueAs: parseNumber })}
					/>
					<div className={fiscalActionsStyles()}>
						<Button type="submit">
							<BadgeCheck />
							Validar datos
						</Button>
					</div>
				</form>
			</DemoCard>
			<DemoCard title="RFC sin saber el tipo">
				<MxIdInput
					kind="rfc"
					label="RFC"
					placeholder="Escribe o elige un ejemplo"
					{...demo.freeRfc}
				/>
				<div className={fiscalSamplesStyles()}>
					{SAMPLES.map((sample) => (
						<Button
							key={sample.value}
							size="sm"
							variant="secondary"
							onClick={() => demo.pickSample(sample.value)}
						>
							{sample.label}
						</Button>
					))}
				</div>
				<MxIdInput kind="nss" label="NSS" placeholder="12345678903" />
				<p className={effectDescriptionStyles()}>
					Solo deja escribir lo que va en cada posición, pasa todo a mayúsculas,
					revisa que la fecha exista y calcula el dígito verificador. La barra
					muestra qué parte falta.
				</p>
			</DemoCard>
		</div>
	);
}
