import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { FileUpload } from '@/components/ui/file-upload/file-upload.component';
import { Input } from '@/components/ui/input/input.component';
import { MxIdInput } from '@/components/ui/mx-id-input/mx-id-input.component';
import { DemoCard } from '@/features/quantum-ui/components/demo-card/demo-card.component';
import { useCompanyForm } from '../../hooks/useCompanyForm';
import {
	companyActionsStyles,
	companyFieldsStyles,
	companyLayoutStyles,
	companyWideStyles,
} from './company-form.styles';

export function CompanyForm() {
	const form = useCompanyForm();

	return (
		<div className={companyLayoutStyles()}>
			<DemoCard title="Datos de la empresa">
				<form
					onSubmit={form.onSubmit}
					noValidate
					className={companyFieldsStyles()}
				>
					<Input
						label="Nombre"
						error={form.errors.name?.message}
						className={companyWideStyles()}
						{...form.register('name')}
					/>
					<MxIdInput
						kind="rfc"
						label="RFC"
						error={form.errors.rfc?.message}
						{...form.register('rfc')}
					/>
					<MxIdInput
						kind="cp"
						label="Código postal"
						error={form.errors.cp?.message}
						{...form.register('cp')}
					/>
					<Input
						type="email"
						label="Correo"
						error={form.errors.email?.message}
						{...form.register('email')}
					/>
					<MxIdInput
						kind="telefono"
						leading="+52"
						label="Teléfono"
						error={form.errors.phone?.message}
						{...form.register('phone')}
					/>
					<div className={companyActionsStyles()}>
						<Button type="submit" disabled={!form.isDirty}>
							<Save />
							Guardar cambios
						</Button>
					</div>
				</form>
			</DemoCard>
			<DemoCard title="Logo">
				<FileUpload
					files={form.logo}
					onFilesChange={form.setLogo}
					accept=".png,.jpg,.svg"
					maxSizeMb={2}
				/>
			</DemoCard>
		</div>
	);
}
