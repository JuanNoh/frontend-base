import type { FieldErrorProps } from './field-error.types';

export function FieldError({ error }: FieldErrorProps) {
	if (!error) return null;

	return (
		<span role="alert" className="text-danger text-xs">
			{error}
		</span>
	);
}
