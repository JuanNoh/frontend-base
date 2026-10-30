import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input/input.component';
import { passwordToggleStyles } from './password-input.styles';
import type { PasswordInputProps } from './password-input.types';
import { usePasswordVisibility } from './usePasswordVisibility';

export function PasswordInput(props: PasswordInputProps) {
	const { isVisible, type, toggleLabel, toggle } = usePasswordVisibility();

	return (
		<Input
			{...props}
			type={type}
			trailing={
				<button
					type="button"
					onClick={toggle}
					aria-label={toggleLabel}
					className={passwordToggleStyles()}
				>
					{isVisible ? <EyeOff /> : <Eye />}
				</button>
			}
		/>
	);
}
