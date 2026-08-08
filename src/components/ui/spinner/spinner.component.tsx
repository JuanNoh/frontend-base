import { cn } from '@/lib/utils/cn';
import { spinnerStyles } from './spinner.styles';
import type { SpinnerProps } from './spinner.types';

export function Spinner({ size, tone, className, ...rest }: SpinnerProps) {
	return (
		<span
			role="status"
			aria-label="Cargando"
			className={cn(spinnerStyles({ size, tone }), className)}
			{...rest}
		/>
	);
}
