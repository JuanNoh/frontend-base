import { fieldErrorStyles } from './field-error.styles';
import type { FieldErrorProps } from './field-error.types';

export function FieldError({ id, error }: FieldErrorProps) {
	if (!error) return null;

	return (
		<span id={id} role="alert" className={fieldErrorStyles()}>
			{error}
		</span>
	);
}
