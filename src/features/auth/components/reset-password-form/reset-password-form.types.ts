import type { FormEventHandler } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { ChecklistItem } from '@/components/ui/checklist/checklist.types';
import type { ResetPasswordValues } from '../../schemas/password-reset.schema';

export interface ResetPasswordFormProps {
	register: UseFormRegister<ResetPasswordValues>;
	errors: FieldErrors<ResetPasswordValues>;
	rules: ChecklistItem[];
	isSubmitting: boolean;
	isExpired: boolean;
	onSubmit: FormEventHandler<HTMLFormElement>;
}
