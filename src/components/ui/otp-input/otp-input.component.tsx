import { FieldError } from '@/components/ui/field-error/field-error.component';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import { fieldStyles } from '@/components/ui/input/input.styles';
import { useFieldIds } from '@/components/ui/input/useFieldIds';
import { cn } from '@/lib/utils/cn';
import { otpBoxStyles, otpRowStyles } from './otp-input.styles';
import type { OtpInputProps } from './otp-input.types';
import { useOtpInput } from './useOtpInput';

export function OtpInput({
	value,
	onValueChange,
	onComplete,
	length = 6,
	label,
	hint,
	error,
	id,
	disabled,
	className,
}: OtpInputProps) {
	const { controlId, hintId, errorId, describedBy } = useFieldIds({ id, hint, error });
	const otp = useOtpInput({ value, onValueChange, onComplete, length });

	return (
		<div className={cn(fieldStyles(), className)}>
			<FieldLabel htmlFor={controlId}>{label}</FieldLabel>
			<div role="group" aria-label={label} className={otpRowStyles()}>
				{otp.digits.map((digit, index) => (
					<input
						key={index}
						id={index === 0 ? controlId : undefined}
						aria-label={`Dígito ${index + 1} de ${length}`}
						aria-invalid={!!error}
						aria-describedby={describedBy}
						autoComplete={index === 0 ? 'one-time-code' : 'off'}
						inputMode="numeric"
						disabled={disabled}
						value={digit}
						onChange={otp.onChange(index)}
						onPaste={otp.onPaste(index)}
						onKeyDown={otp.onKeyDown(index)}
						onFocus={otp.onFocus}
						className={otpBoxStyles({ invalid: !!error })}
					/>
				))}
			</div>
			<FieldHint id={hintId}>{hint}</FieldHint>
			<FieldError id={errorId} error={error} />
		</div>
	);
}
