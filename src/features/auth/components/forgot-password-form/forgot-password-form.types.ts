import type { FormEventHandler } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { ForgotPasswordValues } from '../../schemas/password-reset.schema';

export interface ForgotPasswordFormProps {
	register: UseFormRegister<ForgotPasswordValues>;
	errors: FieldErrors<ForgotPasswordValues>;
	isSubmitting: boolean;
	errorMessage?: string;
	onSubmit: FormEventHandler<HTMLFormElement>;
}
