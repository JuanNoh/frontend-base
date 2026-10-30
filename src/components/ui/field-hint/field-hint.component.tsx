import { cn } from '@/lib/utils/cn';
import { fieldHintStyles } from './field-hint.styles';
import type { FieldHintProps } from './field-hint.types';

export function FieldHint({ children, className, ...rest }: FieldHintProps) {
	if (!children) return null;

	return (
		<span className={cn(fieldHintStyles(), className)} {...rest}>
			{children}
		</span>
	);
}
