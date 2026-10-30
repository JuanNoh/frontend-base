import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useWorkspace } from '@/features/quantum-ui/hooks/useWorkspace';
import { companySchema, type CompanyValues } from '../schemas/company.schema';

export function useCompanyForm() {
	const { workspace } = useWorkspace();
	const [logo, setLogo] = useState<File[]>([]);
	const form = useForm<CompanyValues>({
		resolver: zodResolver(companySchema),
		defaultValues: {
			name: workspace.name,
			rfc: 'CDS120501AB8',
			email: 'hola@empresa.mx',
			phone: '9991234567',
			cp: '97000',
		},
	});

	return {
		register: form.register,
		errors: form.formState.errors,
		isDirty: form.formState.isDirty,
		logo,
		setLogo,
		onSubmit: form.handleSubmit((values) => {
			form.reset(values);
			toast.success('Datos guardados', { description: values.name });
		}),
	};
}
