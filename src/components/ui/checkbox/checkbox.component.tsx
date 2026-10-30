import { Check, Minus } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import {
	checkboxIconStyles,
	checkboxIndicatorStyles,
	checkboxStyles,
} from './checkbox.styles';
import type { CheckboxProps } from './checkbox.types';

export function Checkbox({ className, ...rest }: CheckboxProps) {
	return (
		<CheckboxPrimitive.Root className={cn(checkboxStyles(), className)} {...rest}>
			<CheckboxPrimitive.Indicator className={checkboxIndicatorStyles()}>
				<Check
					className={checkboxIconStyles({ state: 'checked' })}
					strokeWidth={3}
				/>
				<Minus
					className={checkboxIconStyles({ state: 'indeterminate' })}
					strokeWidth={3}
				/>
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}
