import { cn } from '@/lib/utils/cn';
import { fieldLabelStyles } from './field-label.styles';
import type { FieldLabelProps } from './field-label.types';

export function FieldLabel({ children, className, ...rest }: FieldLabelProps) {
	if (!children) return null;

	return (
		<label className={cn(fieldLabelStyles(), className)} {...rest}>
			{children}
		</label>
	);
}
