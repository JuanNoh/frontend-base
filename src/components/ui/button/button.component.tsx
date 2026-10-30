import { cn } from '@/lib/utils/cn';
import { Spinner } from '@/components/ui/spinner/spinner.component';
import { buttonStyles } from './button.styles';
import type { ButtonProps } from './button.types';

export function Button({
	variant,
	size,
	block,
	isSubmitting = false,
	disabled,
	className,
	type = 'button',
	children,
	...rest
}: ButtonProps) {
	return (
		<button
			className={cn(buttonStyles({ variant, size, block }), className)}
			disabled={disabled || isSubmitting}
			type={type}
			{...rest}
		>
			{isSubmitting && <Spinner tone="current" />}
			{children}
		</button>
	);
}
