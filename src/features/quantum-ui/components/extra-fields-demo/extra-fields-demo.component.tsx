import { Card } from '@/components/ui/card/card.component';
import { DateRangePicker } from '@/components/ui/date-range-picker/date-range-picker.component';
import { FileUpload } from '@/components/ui/file-upload/file-upload.component';
import { MxIdInput } from '@/components/ui/mx-id-input/mx-id-input.component';
import { OtpInput } from '@/components/ui/otp-input/otp-input.component';
import { SearchInput } from '@/components/ui/search-input/search-input.component';
import { TimePicker } from '@/components/ui/time-picker/time-picker.component';
import { useExtraFieldsDemo } from '../../hooks/useExtraFieldsDemo';
import { extraFieldsGridStyles, extraFieldsWideStyles } from './extra-fields-demo.styles';

export function ExtraFieldsDemo() {
	const demo = useExtraFieldsDemo();

	return (
		<Card className={extraFieldsGridStyles()}>
			<DateRangePicker
				label="Periodo"
				value={demo.period}
				onValueChange={demo.setPeriod}
				hint="Atajos a la izquierda; o elige inicio y fin."
			/>
			<TimePicker
				label="Hora de corte"
				value={demo.time}
				onValueChange={demo.setTime}
			/>
			<SearchInput
				label="Buscar cliente"
				placeholder="Nombre o RFC"
				onSearch={demo.onSearch}
				hint={
					demo.results === null
						? 'Espera a que dejes de escribir antes de buscar.'
						: `Buscó: «${demo.results}»`
				}
			/>
			<MxIdInput
				kind="telefono"
				label="Teléfono"
				leading="+52"
				placeholder="9981234567"
			/>
			<OtpInput
				label="Código de verificación"
				value={demo.code}
				onValueChange={demo.setCode}
				onComplete={demo.onCodeComplete}
				hint="Se mueve solo; también puedes pegar el código."
			/>
			<FileUpload
				label="XML y sellos"
				accept=".xml,.cer,.key"
				multiple
				maxSizeMb={5}
				files={demo.files}
				onFilesChange={demo.setFiles}
				className={extraFieldsWideStyles()}
			/>
		</Card>
	);
}
