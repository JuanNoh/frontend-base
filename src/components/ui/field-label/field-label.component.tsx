import { cn } from '@/lib/utils/cn';
import type { FieldLabelProps } from './field-label.types';

export function FieldLabel({ children, className, ...rest }: FieldLabelProps) {
	if (!children) return null;

	return (
		<label className={cn('text-ink text-sm font-medium', className)} {...rest}>
			{children}
		</label>
	);
}
