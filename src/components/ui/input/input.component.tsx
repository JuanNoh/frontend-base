import { useId } from 'react';
import { cn } from '@/lib/utils/cn';
import { FieldError } from '@/components/ui/field-error/field-error.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import type { InputProps } from './input.types';

export function Input({ label, error, className, id, ...rest }: InputProps) {
	const autoId = useId();
	const inputId = id ?? autoId;

	return (
		<div className="relative flex w-full flex-col gap-1">
			<FieldLabel htmlFor={inputId}>{label}</FieldLabel>
			<input
				id={inputId}
				className={cn(
					'rounded-(--radius-field) border-line placeholder:text-ink-muted focus:border-primary w-full border bg-white px-3 py-2 text-sm outline-none disabled:bg-line-soft',
					error && 'border-danger',
					className
				)}
				aria-invalid={!!error}
				{...rest}
			/>
			<FieldError error={error} />
		</div>
	);
}
