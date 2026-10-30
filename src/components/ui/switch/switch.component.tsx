import { Switch as SwitchPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import { switchStyles, switchThumbStyles } from './switch.styles';
import type { SwitchProps } from './switch.types';

export function Switch({ className, ...rest }: SwitchProps) {
	return (
		<SwitchPrimitive.Root className={cn(switchStyles(), className)} {...rest}>
			<SwitchPrimitive.Thumb className={switchThumbStyles()} />
		</SwitchPrimitive.Root>
	);
}
